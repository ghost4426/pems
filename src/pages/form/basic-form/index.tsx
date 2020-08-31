import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, Dispatch } from 'umi';
import React, { FC } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
interface BasicFormProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

const BasicForm: FC<BasicFormProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
      md: {
        span: 10,
      },
    },
  };
  const submitFormLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 10,
        offset: 7,
      },
    },
  };

  const onFinish = (values: { [key: string]: any }) => {
    const { dispatch } = props;
    dispatch({
      type: 'formAndbasicForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = () => {};

  const onValuesChange = (changedValues: { [key: string]: any }) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageHeaderWrapper content="Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.">
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          form={form}
          name="basic"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please enter a title',
              },
            ]}
          >
            <Input placeholder="Give the target a name" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Start and end date"
            name="date"
            rules={[
              {
                required: true,
                message: 'Please select the start and end date',
              },
            ]}
          >
            <RangePicker
              style={{
                width: '100%',
              }}
              placeholder={['Start date', 'End date']}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Goal description"
            name="goal"
            rules={[
              {
                required: true,
                message: 'Please enter a description of the goal',
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder="Please enter your work goals"
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Metrics"
            name="standard"
            rules={[
              {
                required: true,
                message: 'Please enter a metric',
              },
            ]}
          >
            <TextArea
              style={{
                minHeight: 32,
              }}
              placeholder="Please enter a metric"
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                Client
                <em className={styles.optional}>
                  (optional)
                  <Tooltip title="Target service object">
                    <InfoCircleOutlined
                      style={{
                        marginRight: 4,
                      }}
                    />
                  </Tooltip>
                </em>
              </span>
            }
            name="client"
          >
            <Input placeholder="Please describe your customer service, internal customers directly @ Name / job number" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                Inviting critics
                <em className={styles.optional}>(optional)</em>
              </span>
            }
            name="invites"
          >
            <Input placeholder="Please direct @ Name / job number, you can invite up to 5 people" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                Weight
                <em className={styles.optional}>(optional)</em>
              </span>
            }
            name="weight"
          >
            <InputNumber placeholder="Please enter weight" min={0} max={100} />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Target disclosure"
            help="Customers and invitees are shared by default"
            name="publicType"
          >
            <div>
              <Radio.Group>
                <Radio value="1">Public</Radio>
                <Radio value="2">Partially public</Radio>
                <Radio value="3">Private</Radio>
              </Radio.Group>
              <FormItem
                style={{
                  marginBottom: 0,
                }}
                name="publicUsers"
              >
                <Select
                  mode="multiple"
                  placeholder="Open to"
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">Colleague A</Option>
                  <Option value="2">Colleague B</Option>
                  <Option value="3">Colleague C</Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem
            {...submitFormLayout}
            style={{
              marginTop: 32,
            }}
          >
            <Button type="primary" htmlType="submit" loading={submitting}>
              Submit
            </Button>
            <Button
              style={{
                marginLeft: 8,
              }}
            >
              Save
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['formAndbasicForm/submitRegularForm'],
}))(BasicForm);
