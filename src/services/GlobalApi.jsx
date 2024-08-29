import axios from "axios";

const key = "2b1f99c01d5c42fbb6526778c7cb5e51";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGeneraList = () => {
  return axiosInstance.get(`/genres?key=` + key);
};
const getAllgames = () => {
  return axiosInstance.get(`/games?key=` + key);
};

export default {
  getGeneraList,
  getAllgames,
};
