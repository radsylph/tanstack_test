import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { paramQueryOptions } from "../../../lib/queryOptions";

function ConditionalQuery() {
  const [commentId, setCommentId] = useState(1);
  const [enable, setEnable] = useState(false);
  const { data, isPending, refetch, isFetching } = useSuspenseQuery(
    paramQueryOptions(commentId, enable)
  );

  return (
    <div className="flex flex-col gap-2">
      <h3>Conditional Query</h3>
      <p>This is a conditional query example using the basic useQuery hook.</p>
      {isPending || isFetching ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <h1>conditional query</h1>
            <div className="flex flex-col gap-2 text-lg">
              {JSON.stringify(data)}
            </div>
          </div>
        </>
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-300 active:scale-95"
        >
          Refetch
        </button>
        <button
          onClick={() => setEnable(!enable)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-300 active:scale-95"
        >
          {enable ? "Disable" : "Enable"}
        </button>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 m-2 bg-white"
          value={commentId}
          onChange={(e) => setCommentId(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default ConditionalQuery;
