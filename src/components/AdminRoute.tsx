import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { api } from "@/lib/api";

export default function AdminRoute() {
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    api.me().then((d) => setUser(d.user)).catch(() => setUser(null));
  }, []);

  if (user === undefined) return null;
  if (!user) return <Navigate to="/login?next=/admin" replace />;
  if (user.role !== "ADMIN") return <Navigate to="/" replace />;
  return <Outlet />;
}
