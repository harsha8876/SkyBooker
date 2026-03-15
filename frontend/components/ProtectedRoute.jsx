import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-slate-400">
        Loading...
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;