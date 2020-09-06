/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Card, Row, Col, Form, DatePicker, Select, Button } from 'antd';
import BrushLineChart from './BrushLineChart';

export default function Historian() {
  return (
    <Row gutter={[8, 8]}>
      <Col span={6}>
        <Card title={'Query'}>
          <Form layout="vertical">
            <Form.Item label={'From'}>
              <DatePicker style={{ width: 200 }} format={'MM/DD/YYYY'} />
            </Form.Item>
            <Form.Item label={'To'}>
              <DatePicker style={{ width: 200 }} format={'MM/DD/YYYY'} />
            </Form.Item>
            <Form.Item label={'Energy'}>
              <Select defaultValue="2" style={{ width: 200 }}>
                <Select.Option value="1">Electricity</Select.Option>
                <Select.Option value="2">Water</Select.Option>
                <Select.Option value="3">Air</Select.Option>
                <Select.Option value="4">Stream</Select.Option>
                <Select.Option value="5">C02</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={'Meters'}>
              <Select defaultValue={['1', '2', '3']} style={{ width: 200 }} mode="multiple">
                <Select.Option value="1">STM01</Select.Option>
                <Select.Option value="2">STM02</Select.Option>
                <Select.Option value="3">STM03</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={'Value'}>
              <Select defaultValue="1" style={{ width: 200 }}>
                <Select.Option value="1">Mass Flow</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          <Button type={'primary'} style={{ marginBottom: 8, width: 200 }}>
            Add
          </Button>{' '}
          <br />
          <Button type={'primary'} style={{ paddingBottom: 8, width: 200 }}>
            Clear
          </Button>
        </Card>
      </Col>
      <Col span={18}>
        <Card title={'Trends'}>
          <BrushLineChart />
        </Card>
      </Col>
    </Row>
  );
}
