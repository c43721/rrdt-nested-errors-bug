import type { Route } from "./+types/error";

export function loader() {
  const value = Math.random();

  if (value > .5) {
    throw new Error("Ah oops!");
  }

  return { dang: "Ok" };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  return <SharedComponent message={`From the component: ${loaderData.dang}`} />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <SharedComponent message={`From the error boundary: ${(error as any).message}`} />;
}

function SharedComponent({ message }: { message: string }) {
  return <div>{message}</div>
}
