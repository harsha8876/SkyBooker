import { SignUp } from "@clerk/clerk-react";

function Register() {
  return (
    <div className="flex justify-center py-10">
      <SignUp
        path="/register"
        routing="path"
        signInUrl="/login"
        fallbackRedirectUrl="/search"
      />
    </div>
  );
}

export default Register;