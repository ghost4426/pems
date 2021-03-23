/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Modal, Form, Input, Button, Select, DatePicker, Switch } from 'antd';
import moment from 'moment';
import { TableListItem } from '../data';

interface CreateFormProps {
  initValue: TableListItem;
  modalVisible: boolean;
  onSubmit: (fields: TableListItem) => void;
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

const UpdateForm: React.FC<CreateFormProps> = (props) => {
  const { modalVisible, initValue, onSubmit, onCancel } = props;
  console.log('🚀 ~ file: UpdateForm.tsx ~ line 48 ~ initValue', initValue);

  const [form] = Form.useForm();

  return (
    <Modal
      destroyOnClose
      title="Update User"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onSubmit}
        initialValues={{
          prefix: '84',
          name: initValue.name,
          email: initValue.email,
          phoneNo: initValue.phoneNo,
          role: initValue.role,
          dob: initValue.dob,
          isActive: initValue.isActive,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
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
          <DatePicker format={'MM/DD/YYYY'} />
        </Form.Item>

        <Form.Item
          name="role"
          label="Role"
          rules={[
            {
              required: true,
              message: 'Please select Role!',
            },
          ]}
        >
          <Select>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="manager">Manager</Select.Option>
            <Select.Option value="operator">Operator</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="isActive" label="Status" valuePropName="checked">
          <Switch unCheckedChildren={'Inactive'} checkedChildren={'Active'} />
        </Form.Item>

        <Form.Item
          name="phoneNo"
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
          </Button>{' '}
          &nbsp;
          <Button onClick={() => onCancel()}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateForm;
