import { LoginForm } from "@/src/components/login-form";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <LoginForm />
    </div>
  );
};

export default Login;
