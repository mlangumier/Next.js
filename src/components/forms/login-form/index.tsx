"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { ILoginForm } from "@/src/models/user";
import { ERoutingPath } from "@/src/routes/routes";
import UserService from "@/src/services/user/user-services";
import { setAuthData } from "@/src/store/auth-slice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import { Card } from "../../card/card";
import { defaultValues, validationSchema } from "./form-setup";

export const LoginForm = () => {
  const dispatch = useDispatch();
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
    mutationFn: async (data: ILoginForm) => UserService.instance.login(data),
    onSuccess: ({ user, accessToken, refreshToken }) => {
      dispatch(setAuthData({ user, accessToken, refreshToken }));

      router.push(ERoutingPath.USER);
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
      <h1 className="text-2xl py-4 text-center uppercase">Login</h1>
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
