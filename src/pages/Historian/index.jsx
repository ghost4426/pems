/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Card, Row, Col, Form, DatePicker, Select, Button } from 'antd';
import BrushLineChart from './BrushLineChart';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default function Historian() {
  return (
    <PageHeaderWrapper >
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Card title={'Query'}>
            <Form layout="vertical">
              <Form.Item label={'From'}>
                <DatePicker style={{ width: '100%' }} format={'MM/DD/YYYY'} />
              </Form.Item>
              <Form.Item label={'To'}>
                <DatePicker style={{ width: '100%' }} format={'MM/DD/YYYY'} />
              </Form.Item>
              <Form.Item label={'Energy'}>
                <Select defaultValue="1" style={{ width: '100%' }}>
                  <Select.Option value="1">Water</Select.Option>
                  <Select.Option value="2">Electric</Select.Option>
                  <Select.Option value="3">Steam</Select.Option>
                  <Select.Option value="4">Air</Select.Option>
                  <Select.Option value="5">CO2</Select.Option>
                  <Select.Option value="6">Nitrogen</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label={'Meters'}>
                <Select defaultValue={['1', '2', '3']} style={{ width: '100%' }} mode="multiple">
                  <Select.Option value="1">STM01</Select.Option>
                  <Select.Option value="2">STM02</Select.Option>
                  <Select.Option value="3">STM03</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label={'Value'}>
                <Select defaultValue="1" style={{ width: '100%' }}>
                  <Select.Option value="1">Totalizer</Select.Option>
                  <Select.Option value="2">Flowrate</Select.Option>
                  <Select.Option value="3">Power</Select.Option>
                </Select>
              </Form.Item>
            </Form>
            <Button type={'primary'} style={{ marginBottom: 8, width: '100%' }}>
              Add
          </Button>{' '}
            <br />
            <Button type={'primary'} style={{ paddingBottom: 8, width: '100%' }}>
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
    </PageHeaderWrapper>
  );
}
