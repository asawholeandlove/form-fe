import apiUrls from "../global/api.urls";
import { Schema } from "../types/Schema.types";
import axiosConfig, { get } from "./axiosConfig";

const schemaApis = {
	getAll() {
		return get<Schema[]>(apiUrls.schemas);
	},

	getById(id: number) {
		return get<Schema>(`${apiUrls.schemas}/${id}`);
	},

	getDetail(id: number) {
		return get<Schema>(`${apiUrls.schemas}/${id}`);
	},

	delete(id: number) {
		return axiosConfig.delete(`${apiUrls.schemas}/${id}`);
	},

	create(schema: Schema) {
		return axiosConfig.post(apiUrls.schemas, schema);
	},

	update(id: number, schema: Schema) {
		return axiosConfig.put(`${apiUrls.schemas}/${id}`, schema);
	}
};

export default schemaApis;
