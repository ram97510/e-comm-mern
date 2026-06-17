import axiosInstance from "./axiosInstance";

export const signup = async (data) => {
  const response = await axiosInstance.post(
    "/auth/signup",
    data
  );

  return response.data;
};

export const signin = async (data) => {
  const response = await axiosInstance.post(
    "/auth/signin",
    data
  );

  return response.data;
};