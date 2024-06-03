// create axios and export
import axios, { AxiosError } from "axios";

const axiosConfig = axios.create({
	baseURL: "http://localhost:8080/api",
	headers: {
		"Content-Type": "application/json"
	}
});

axiosConfig.interceptors.response.use(
	(response) => {
		// Handle successful responses
		return response?.data;
	},
	(error: AxiosError) => {
		// Handle errors
		return Promise.reject(error.response?.data);
	}
);

export async function get<T>(url: string) {
	const response = (await axiosConfig.get<T>(url)) as unknown as Promise<T>;
	return response;
}

export default axiosConfig;
