import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex justify-center py-10">
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/register"
        fallbackRedirectUrl="/search"
      />
    </div>
  );
}

export default Login;