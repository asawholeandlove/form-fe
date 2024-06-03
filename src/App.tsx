import { Model, SurveyModel } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { demoJson } from "./jsons";
import { Button, Card } from "antd";
import { useQuery } from "@tanstack/react-query";
import schemaApis from "./apis/schema.apis";

function App() {
	// const survey = new Model(demoJson);

	const { data } = useQuery({
		queryKey: ["schemas"],
		queryFn: () => schemaApis.getAll()
	});
	console.log("data :", data);

	// const handleFinish = (sender: SurveyModel) => {
	// 	const results = sender.data;
	// 	console.log("results :", results);
	// };

	// survey.onComplete.add(handleFinish);

	return (
		<>
			<div className="mb-2 text-center">
				<Button>Hello nè</Button>
			</div>

			{/* <Survey model={survey} /> */}
		</>
	);
}

export default App;
