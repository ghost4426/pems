/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Card, Row, Col, Button, DatePicker, Select } from 'antd';
import { connect } from 'umi';
import LineChart from './LineChart';
import { Pie } from '../dashboard/components/Charts';

function Analysis() {
  return (
    <Card>
      <Row>
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
                <Select.Option value="1">Ro Room</Select.Option>
                <Select.Option value="2">RGB Line</Select.Option>
                <Select.Option value="3">PET Line</Select.Option>
                <Select.Option value="4">CAN Line</Select.Option>
                <Select.Option value="5">AQUA Line</Select.Option>
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
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default connect()(Analysis);
