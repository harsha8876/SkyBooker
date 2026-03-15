import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-3 text-4xl font-bold">404</h1>
      <p className="mb-6 text-slate-400">Page not found.</p>
      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;