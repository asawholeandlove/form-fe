import { CarOutlined, FormOutlined } from "@ant-design/icons";

export default function Header() {
	return (
		<div className="fixed left-0 right-0 top-0 flex h-[65px] items-center border-b border-gray-300 bg-white px-10">
			<div className="flex items-center gap-2">
				<FormOutlined className="relative top-[2px] text-[40px] text-blue-500" />
				<div>
					<h1 className="text-2xl font-bold">Survey App</h1>
					<p className="text-sm text-gray-500">Phỏng vấn ứng viên</p>
				</div>
			</div>
		</div>
	);
}
