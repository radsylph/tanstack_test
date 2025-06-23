import { queryOptions } from "@tanstack/react-query";

export default function paramQueryOptions(
  commentId: number,
  enableOption: boolean
) {
  return queryOptions({
    queryKey: ["getComment", commentId],
    queryFn: () => getComment(commentId),
    enabled: enableOption ? enableOption : true,
  });
}

const getComment = async (commentId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?id=${commentId}`
  );
  return response.json();
};
