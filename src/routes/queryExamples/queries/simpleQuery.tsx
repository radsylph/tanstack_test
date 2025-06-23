import { useQuery } from "@tanstack/react-query";

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

function SimpleQuery() {
  const { data, isPending, refetch, isFetching } = useQuery({
    queryKey: ["todos"], //query key: es usado para hacer refetching y caching data, y tambien es el identificador de la query
    queryFn: getTodos, // funcion que se ejecuta cuando se llama la query con el query key, aqui es donde se hace la peticion a la api
  });

  return (
    <div className="flex flex-col gap-2">
      <h3>Simple Query</h3>
      <p>This is a simple query example using the basic useQuery hook.</p>
      {isPending || isFetching ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <h1>normal query</h1>
            <div className="flex flex-col gap-2 text-lg">
              {JSON.stringify(data?.slice(0, 5))}
            </div>
          </div>
          <div>
            <h1>infinite query</h1>
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
      </div>
    </div>
  );
}

export default SimpleQuery;
