import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card mx-auto max-w-md p-8 text-center">
      <h1 className="text-4xl font-bold text-slate-300">404</h1>
      <p className="mt-2 text-slate-600">Page not found</p>
      <Link to="/" className="btn-primary mt-6 mx-auto">
        Go home
      </Link>
    </div>
  );
}
