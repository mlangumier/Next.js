import { ILoginForm } from "@/models/auth";
import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup
    .string()
    .required("Please enter your username")
    .min(3, "Username too short"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(3, "Password too short"),
});

export const defaultValues: ILoginForm = {
  username: "",
  password: "",
};
