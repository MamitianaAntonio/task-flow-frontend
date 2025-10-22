import toast from "react-hot-toast";
import axiosClient from "../api/axios.ts";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface loginData {
  email: string;
  password: string;
}

// call register api
export const signUp = async (data: SignUpData) => {
  try {
    const response = await axiosClient.post("/api/users/register", data);

    if (response.status === 201) {
      toast.success(`User created successfully`);
      return { success: true, status: response.status };
    } else if (response.status === 500) {
      toast.error("Internal server error.");
      return { success: false, status: response.status };
    } else {
      toast.error("Unexpected error.");
      return { success: false, status: response.status };
    }
  } catch (error) {
    toast.error("Netword error");
    return { success: false, status: 0 };
  }
};

// call login api
export const login = async (data: loginData) => {
  try {
    const response = await axiosClient.post("/api/users/login", data);

    if (response.status === 200) {
      toast.success("User logged in successfully.");
      return { success: true, status: response.status };
    }
  } catch (error : any) {
    const status = error.response?.status;

    if (status === 404) {
      toast.error("User not found");
    } else if (status === 401) {
      toast.error("Email or password is invalid");
    } else if (status === 500) {
      toast.error("Internal Server Error.");
    } else {
      toast.error("Unexpected error.");
    }

    return { success: false, status };
  }
};
