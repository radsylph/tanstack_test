import { createFileRoute } from "@tanstack/react-router";
import { SimpleQuery, ParamQuery, ConditionalQuery } from "./queries";

export const Route = createFileRoute("/queryExamples/Examples")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h3>Examples</h3>
      <p>This page contains examples of how to use the query hook.</p>
      <SimpleQuery />
      <hr />
      <ParamQuery />
      <hr />
      <ConditionalQuery />
    </div>
  );
}
