import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, validationSchema } from "./form-setup";
import { useRouter } from "next/router";
import { ERoutingPath } from "../layout/routes";
import { ILoginForm } from "@/models/user";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/user-services";
import { useContext } from "react";
import AuthContext from "@/context/auth-provider";
import { Card } from "../generic/card";

export const LoginForm = () => {
  const { setAuth } = useContext<any>(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const {
    mutate: mutationLogin,
    isLoading,
    isError,
    error: loginError,
  } = useMutation({
    mutationFn: async (data: ILoginForm) => login(data),
    onSuccess: ({ user, accessToken, refreshToken }) => {
      setAuth({ user, accessToken, refreshToken });

      router.push(ERoutingPath.USERS);
    },
    onError: (error: Error) => {
      console.log("Login error:", error);
    },
  });

  const onSubmit = (data: ILoginForm) => {
    mutationLogin(data);
  };

  return (
    <Card>
      <h1 className="text-2xl py-4 text-center">LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="border-2 border-blue-300 rounded-md p-2 mt-2"
          />
          {errors.username ? (
            <p className="text-red-500 text-sm ml-2">
              {errors.username.message as string}
            </p>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="border-2 border-blue-300 rounded-md p-2 mt-2"
          />
          {errors.password ? (
            <p className="text-red-500 text-sm ml-2">
              {errors.password.message as string}
            </p>
          ) : null}
        </div>

        {isError && (
          <p className="text-red-500 text-sm ml-2">{loginError?.message}</p>
        )}

        <div className="py-4 flex">
          <button
            type="submit"
            className="flex-grow bg-blue-500 shadow-md hover:bg-blue-700 hover:shadow-lg text-white rounded-md py-2 px-4 "
          >
            {isLoading ? "..." : "Login"}
          </button>
        </div>
      </form>
    </Card>
  );
};
