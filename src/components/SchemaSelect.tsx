import { useQuery } from "@tanstack/react-query";
import { Select, SelectProps } from "antd";
import schemaApis from "../apis/schema.apis";

export default function SchemaSelect(props: SelectProps) {
	const { data } = useQuery({
		queryKey: ["schemas"],
		queryFn: () => schemaApis.getAll()
	});

	return (
		<Select
			options={data?.map(({ name, id }) => ({
				label: name,
				value: id
			}))}
			{...props}
		/>
	);
}
