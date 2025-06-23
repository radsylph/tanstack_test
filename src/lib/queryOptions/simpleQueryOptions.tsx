import { queryOptions } from "@tanstack/react-query";

export default function simpleQueryOptions() {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};
