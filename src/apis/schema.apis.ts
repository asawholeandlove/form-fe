import { Schema } from "../types/Schema.types";
import axiosConfig from "./axiosConfig";

const schemaApis = {
	getAll() {
		return axiosConfig.get<Schema[]>(apiUrls.schemas);
	}
};

export default schemaApis;
