import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./pages/form/Form.tsx";
import DashboardLayout from "./global/layouts/dashboard/DashboardLayout.tsx";
import ManageSchema from "./pages/manage-schema/ManageSchema.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				path: "/",
				element: <ManageSchema />
			}
		]
	},
	{
		path: "/form/:id",
		element: <Form />
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
