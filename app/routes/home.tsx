import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "RRDT Bug Repro" },
    { name: "description", content: "This is a reproduction of a devtools bug" },
  ];
}

export default function Home() {
  return <Welcome />;
}
