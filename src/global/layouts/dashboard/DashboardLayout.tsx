import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import RefetchAll from "../../../tools/RefetchAll";

export default function DashboardLayout() {
	return (
		<div>
			<Header />
			<Sidebar />
			{/* Content */}
			<div
				className="ml-[260px] mt-[65px] rounded-lg bg-gray-50 p-5"
				style={{ minHeight: "calc(100vh - 65px)" }}
			>
				<RefetchAll />
				<Outlet />
			</div>
		</div>
	);
}
