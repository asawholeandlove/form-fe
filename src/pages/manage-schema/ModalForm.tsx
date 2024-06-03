import { Button, Form, Input, Modal, ModalProps } from "antd";
import { useEffect, useState } from "react";
import schemaApis from "~/apis/schema.apis";
import { Schema } from "~/types/Schema.types";

interface Props extends ModalProps {
	record: Schema;
	refetch: () => void;
}

export default function ModalForm({ record, refetch, ...antdProps }: Props) {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const { open, onCancel } = antdProps;

	useEffect(() => {
		form.resetFields();
		form.setFieldsValue({
			...record,
			data: JSON.stringify(record?.data || {}, null, 2)
		});
	}, [form, record, open]);

	const handleFinish = async (values: any) => {
		try {
			setLoading(true);
			await schemaApis.save({
				id: record?.id,
				...values,
				data: JSON.parse(values.data || "{}")
			});
			refetch();
			form.resetFields();
			(onCancel as any)?.();
		} catch (error) {
			console.log("error :", error);
		}

		setLoading(false);
	};

	return (
		<Modal
			{...antdProps}
			title="Schema"
			footer={
				<Button type="primary" onClick={form.submit} loading={loading}>
					Lưu
				</Button>
			}
		>
			<Form form={form} layout="vertical" onFinish={handleFinish}>
				<Form.Item
					label="Tên"
					name="name"
					required
					rules={[
						{
							required: true
						}
					]}
				>
					<Input placeholder="Nhập tên" />
				</Form.Item>

				<Form.Item
					label="Json"
					name="data"
					required
					rules={[
						{
							required: true
						}
					]}
				>
					<Input.TextArea
						placeholder="Điền Json"
						autoSize={{
							minRows: 3
						}}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
}
