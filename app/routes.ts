import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), layout("routes/layout.tsx", [{ file: "routes/error.tsx", path: "home/error" }])] satisfies RouteConfig;
