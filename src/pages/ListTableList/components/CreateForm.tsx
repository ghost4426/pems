import React from 'react';
import { Modal, Form, Input, Button, Select, DatePicker } from 'antd';


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

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Select.Option value="84">+84</Select.Option>
      <Select.Option value="1">+1</Select.Option>
    </Select>
  </Form.Item>
);

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, onCancel } = props;

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };


  return (
    <Modal
      destroyOnClose
      title="Create User"
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
          label="Full name"
          rules={[
            {
              required: true,
              message: 'Please input full name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date Of Birth"
          rules={[

            {
              required: true,
              message: 'Please input Date of birth!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>


        <Form.Item
          name="role"
          label="Role"
          rules={[

            {
              required: true,
              message: 'Please select role!',
            },
          ]}
        >
          <Select >
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="manager">Manager</Select.Option>
            <Select.Option value="operator">Operator</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm password!',
            },
            ({ getFieldValue }) => ({
              validator(value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
        </Button> &nbsp;
        <Button onClick={() => onCancel()}>
            Cancel
        </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateForm;
