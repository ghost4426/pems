import React from 'react';
import { Modal, Form, Input, Button, Select, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface CreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    onCancel();
  };

  return (
    <Modal
      destroyOnClose
      title="Create Line"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '84',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="fullName"
          label="Line Name"
          rules={[
            {
              required: true,
              message: 'Please input line name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lineImage"
          label="Line Image"
          rules={[
            {
              required: true,
              message: 'Please upload line map!',
            },
          ]}
        >
          <Upload accept={'.jpg, .jpeg'}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>{' '}
          &nbsp;
          <Button onClick={() => onCancel()}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateForm;
