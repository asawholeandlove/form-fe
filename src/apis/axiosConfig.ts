// create axios and export
import axios, { AxiosError } from "axios";

const axiosConfig = axios.create({
	baseURL: "https://localhost:8080/api",
	headers: {
		"Content-Type": "application/json"
	}
});

axiosConfig.interceptors.response.use(
	(response) => {
		// Handle successful responses
		return response;
	},
	(error: AxiosError) => {
		// Handle errors
		return Promise.reject(error.response?.data);
	}
);

export default axiosConfig;
