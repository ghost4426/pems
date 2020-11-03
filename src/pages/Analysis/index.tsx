/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Card, Row, Col, Button, DatePicker, Select } from 'antd';
import { connect } from 'umi';
import LineChart from './LineChart';
import { Pie } from '../dashboard/components/Charts';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

function Analysis() {
  return (
    <PageHeaderWrapper>
      <Card>
        <Row gutter={[0, 16]}>
          <Col style={{ marginRight: 8 }}>
            {'Select Energy Type:   '}
            <Select defaultValue="1" style={{ width: 200, paddingLeft: 8 }}>
              <Select.Option value="1">Water</Select.Option>
              <Select.Option value="2">Electric</Select.Option>
              <Select.Option value="3">Steam</Select.Option>
              <Select.Option value="4">Air</Select.Option>
              <Select.Option value="5">CO2</Select.Option>
              <Select.Option value="6">Nitrogen</Select.Option>
            </Select>
          </Col>
          <Col>
            {'Select Chart Type:   '}
            <Select defaultValue="1" style={{ width: 200, paddingLeft: 8 }}>
              <Select.Option value="1">Line Chart</Select.Option>
              <Select.Option value="2">Pie Chart</Select.Option>
              <Select.Option value="3">Bar Chart</Select.Option>
              <Select.Option value="4">Area Chart</Select.Option>
            </Select>
          </Col>
          <Col span={24}>
            <Row justify={'space-between'}>
              <Col>
                <Row gutter={[8, 8]}>
                  <Col>
                    <Button type={'primary'}>This Week </Button>
                  </Col>
                  <Col>
                    <Button type={'primary'}> Last Week </Button>
                  </Col>
                  <Col>
                    <Button type={'primary'}> This Month </Button>
                  </Col>
                  <Col>
                    <Button type={'primary'}> Last Month</Button>
                  </Col>
                  <Col>
                    Or: <DatePicker />
                  </Col>
                </Row>
              </Col>
              <Col>
                {'Select Line:   '}
                <Select defaultValue="5" style={{ width: 200, paddingLeft: 8 }}>
                  <Select.Option value="1">RO-WWT1 System</Select.Option>
                  <Select.Option value="2">RO-WWT2 System</Select.Option>
                  <Select.Option value="3">Line CAN CF-HF6000 (Line U)</Select.Option>
                  <Select.Option value="4">Line W</Select.Option>
                  <Select.Option value="5">Line BIB</Select.Option>
                  <Select.Option value="6">Line Z</Select.Option>
                  <Select.Option value="7">Line Y</Select.Option>
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row align={'middle'}>
              <Col span={12}>
                <LineChart />
              </Col>
              <Col span={12}>
                <Row justify={'center'} align={'middle'}>
                  <Col span={12}>
                    <div style={{ width: '100%', textAlign: 'center' }}> AQUA Line KPI</div>
                    <Pie
                      animate={false}
                      percent={100}
                      title={''}
                      total="2.2 L/L"
                      height={200}
                      lineWidth={2}
                    />
                  </Col>
                  <Col span={12}>
                    <div style={{ width: '100%', textAlign: 'center' }}> AQUA Line Actual</div>
                    <Pie
                      animate={false}
                      percent={100}
                      title={''}
                      total="2.1 L/L"
                      height={200}
                      lineWidth={2}
                      color={'#60d080'}
                    />
                  </Col>
                  <Col span={12}>
                    <div style={{ width: '100%', textAlign: 'center' }}> Saving</div>
                    <Pie
                      animate={false}
                      percent={100}
                      title={''}
                      total="0.1 %"
                      height={200}
                      lineWidth={2}
                      color={'#60d080'}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>
  );
}

export default connect()(Analysis);
