import React from "react";
import { useParams } from "react-router-dom";
import schemaApis from "../../apis/schema.apis";
import { useQuery } from "@tanstack/react-query";
import { Model, SurveyModel } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

export default function Form() {
	const id = Number(useParams()?.id);

	const { data } = useQuery({
		queryKey: ["schemas"],
		queryFn: () => schemaApis.getById(id)
	});

	const survey = new Model(data?.data);

	const handleFinish = (sender: SurveyModel) => {
		const results = sender.data;
		console.log("results :", results);
	};

	survey.onComplete.add(handleFinish);

	return <Survey model={survey} />;
}
