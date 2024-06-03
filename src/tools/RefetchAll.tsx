import { useQueryClient } from "@tanstack/react-query";
import { Button } from "antd";

export default function RefetchAll() {
	const queryClient = useQueryClient();

	const invalidateAllQueries = () => {
		queryClient.invalidateQueries();
	};

	return (
		<Button
			onClick={invalidateAllQueries}
			className="fixed right-3 top-[18%] z-10"
		>
			Fetch
		</Button>
	);
}
