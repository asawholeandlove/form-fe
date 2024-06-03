import { Model, SurveyModel } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { demoJson } from "./jsons";
import { Button, Card } from "antd";
import { useQuery } from "@tanstack/react-query";
import schemaApis from "./apis/schema.apis";
import axios from "axios";
import SchemaSelect from "./components/SchemaSelect";
import { useGetCache } from "./hooks/query/useGetCache";
import { Schema } from "./types/Schema.types";
import { useState } from "react";

function App() {
	const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

	const data = useGetCache(["schemas"]) as Schema[] | undefined;

	const survey = new Model(data?.find((item) => item.id === selectedId)?.data);

	return (
		<>
			<div className="mb-2 text-center">
				<SchemaSelect
					value={selectedId}
					onChange={setSelectedId}
					className="min-w-[200px]"
					placeholder="Select schema"
					allowClear
				/>
			</div>

			<Survey model={survey} />
		</>
	);
}

export default App;
