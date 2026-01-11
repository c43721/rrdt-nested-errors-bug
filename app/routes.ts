import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("error", "routes/error.tsx"), layout("routes/layout.tsx", [{ file: "routes/error-nested.tsx", path: "home/error" }])] satisfies RouteConfig;
