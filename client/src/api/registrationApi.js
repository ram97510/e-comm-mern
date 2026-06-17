import axiosInstance from "./axiosInstance";

export const createRegistration = async (data) => {
  const response = await axiosInstance.post(
    "/register",
    data
  );

  return response.data;
};

export const getRegistrations = async () => {
  const response = await axiosInstance.get(
    "/register"
  );

  return response.data;
};