import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("lookbook", "routes/lookbook.tsx"),
  route("boutique", "routes/boutique.tsx"),
] satisfies RouteConfig;
