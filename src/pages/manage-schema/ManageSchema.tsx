import { useQuery } from "@tanstack/react-query";
import { Button, Modal, Space, Table } from "antd";
import schemaApis from "../../apis/schema.apis";
import {
	DeleteOutlined,
	EditOutlined,
	GlobalOutlined
} from "@ant-design/icons";
import { useState } from "react";
import ModalForm from "./ModalForm";
import { Schema } from "~/types/Schema.types";
import { useRefetch } from "~/hooks/query/useRefetch";

export default function ManageSchema() {
	const { data } = useQuery({
		queryKey: ["schemas"],
		queryFn: () => schemaApis.getAll()
	});

	const refetch = useRefetch(["schemas"]);

	const [openModal, setOpenModal] = useState(false);
	const [record, setRecord] = useState<Schema>({} as any);

	return (
		<div>
			<div className="mb-5">
				<Space>
					<Button
						type="primary"
						onClick={() => {
							setRecord({} as any);
							setOpenModal(true);
						}}
					>
						Tạo Schema
					</Button>

					<a href="https://surveyjs.io/create-free-survey" target="_blank">
						<Button type="primary" ghost>
							Generate Json tool
						</Button>
					</a>
				</Space>
			</div>
			<Table
				className="shadow-sm [&_th.ant-table-cell.ant-table-cell]:bg-white"
				dataSource={data}
				size="small"
				rowKey={"id"}
				columns={[
					{
						dataIndex: "id",
						title: "Id",
						width: 60
					},
					{
						dataIndex: "name",
						title: "Tên"
					},
					{
						dataIndex: "actions",
						title: "Hành động",
						width: 150,
						render: (_, record) => {
							return (
								<div className="flex gap-2">
									<a href={`/form/${record.id}`} target="_blank">
										<Button type="primary" ghost icon={<GlobalOutlined />} />
									</a>

									<Button
										type="primary"
										ghost
										icon={<EditOutlined />}
										onClick={() => {
											setRecord(record);
											setOpenModal(true);
										}}
									/>
									<Button
										danger
										ghost
										onClick={async () => {
											await schemaApis.delete(record.id);
											refetch();
										}}
										icon={<DeleteOutlined />}
									/>
								</div>
							);
						}
					}
				]}
				pagination={false}
			/>

			<ModalForm
				open={openModal}
				refetch={refetch}
				onCancel={() => setOpenModal(false)}
				record={record}
			/>
		</div>
	);
}
