import { toast } from "react-toastify";
import axiosClient, { ResponseType } from "./axiosClient";

export const GetUser = async (username: string, password: string) => {
  let access_token = "";

  try {
    const data: ResponseType = await axiosClient.post("/auth/login", {
      username,
      password,
    });

    console.log(data);

    if (data.error !== null) {
      toast.error(data.error.message);
    } else {
      access_token = data.result.accessToken;
    }
  } catch (error: any) {
    console.log(error.message);
  }

  return access_token;
};

export const RegisterApi = async (
  username: string,
  name: string,
  password: string,
  phone: string,
  email: string
) => {
  let message = null;

  try {
    const { result }: ResponseType = await axiosClient.post("/auth/register", {
      username,
      name,
      password,
      phone,
      email,
    });

    message = result;
  } catch (error: any) {
    console.log(error.message);
  }

  return message;
};
