/* eslint-disable react/jsx-curly-brace-presence */
import React, { useCallback, useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Col, DatePicker, Form, Input, Row, Space, Tabs, Typography } from 'antd';
import moment from 'moment';
import { history } from 'umi';

const lineList = [
  'utility1',
  'utility2',
  'utility3',
  'utility4',
  'utility5',
  'utility6',
  'utility7',
  'utility8',
  'utility9',
];

const dataSource = {
  utility1: {
    lineName: 'UTILITY 1 J01',
    imgSrc: '/line-elec/2. PEPSI DONG NAI UTILITY 01- J01 RV0-page-1.svg',
  },
  utility2: {
    lineName: 'UTILITY 1 J02',
    imgSrc: '/line-elec/3. PEPSI DONG NAI UTILITY 01_ J02 RV0-page-1.svg',
  },
  utility3: {
    lineName: 'UTILITY 1 J03',
    imgSrc: '/line-elec/4. PEPSI DONG NAI UTILITY 01_ J03 RV0-page-1.svg',
  },
  utility4: {
    lineName: 'UTILITY 1 J04',
    imgSrc: '/line-elec/5. PEPSI DONG NAI UTILITY 01_ J04 RV0-page-1.svg',
  },
  utility5: {
    lineName: 'UTILITY 1 J05',
    imgSrc: '/line-elec/6. PEPSI DONG NAI UTILITY 01_ J05 RV0-page-1.svg',
  },
  utility6: {
    lineName: 'UTILITY 2',
    imgSrc: '/line-elec/ULTILITY 2 RV0-page-1.svg',
  },
  utility7: {
    lineName: 'UTILITY 2 MSB1',
    imgSrc: '/line-elec/2. PEPSI DONG NAI ULTILITY 2 MSB1 RV0-page-1.svg',
  },
  utility8: {
    lineName: 'UTILITY 2 MSB2',
    imgSrc: '/line-elec/3. PEPSI DONG NAI ULTILITY 2 MSB2 RV0-page-1.svg',
  },
  utility9: {
    lineName: 'UTILITY 2 MSB4',
    imgSrc: '/line-elec/5. PEPSI DONG NAI ULTILITY 2 MSB4 RV0-page-1.svg',
  },
};

export default function ElectricLine(props: any) {
  const queryLine = props.location.query.line as string;
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [lineSelected, setLineSelected] = useState('utility1');
  const [currentTab, setCurrentTab] = useState('sld');

  useEffect(() => {
    if (lineSelected !== queryLine && lineList.includes(queryLine)) {
      setLineSelected(queryLine);
      setCurrentLineIdx(lineList.indexOf(queryLine));
    }
  }, []);

  const nextLine = useCallback(() => {
    setCurrentLineIdx((idx) => {
      const nextIdx = idx + 1;
      setLineSelected(lineList[nextIdx]);
      return nextIdx;
    });
  }, [setCurrentLineIdx, setLineSelected]);

  const preLine = useCallback(() => {
    setCurrentLineIdx((idx) => {
      const nextIdx = idx - 1;
      setLineSelected(lineList[nextIdx]);
      return nextIdx;
    });
  }, [setCurrentLineIdx, setLineSelected]);

  return (
    <PageHeaderWrapper
      breadcrumb={{
        routes: [
          { breadcrumbName: 'Home', path: '' },
          { breadcrumbName: 'Electric Line', path: '/line/water' },
        ],
      }}
      title={'Electric Line'}
    >
      <Row gutter={[16, 8]}>
        <Col span={24}>
          <Tabs
            activeKey={currentTab}
            type="card"
            centered
            onTabClick={(k) => {
              if (k === '1') history.push('/dashboard?energy=elec');
              if (k === '5') history.push('/analysis?line=elec');
              setCurrentTab(k);
            }}
          >
            <Tabs.TabPane tab="MainPage" key="1"></Tabs.TabPane>
            <Tabs.TabPane tab="SLD" key="sld"></Tabs.TabPane>
            <Tabs.TabPane tab="Power Quality" key="pq"></Tabs.TabPane>
            <Tabs.TabPane tab="System Architecture" key="sa"></Tabs.TabPane>
            <Tabs.TabPane tab="Analysis" key="5"></Tabs.TabPane>
          </Tabs>
        </Col>
        {currentTab === 'sld' && (
          <Col span={24}>
            <Row justify="space-between">
              <Col>
                <Button
                  onClick={() => {
                    preLine();
                  }}
                  disabled={currentLineIdx === 0}
                  type="link"
                  icon={<i style={{ fontSize: 55 }} className="far fa-arrow-alt-left" />}
                />
              </Col>
              <Col>
                <Typography.Title>{dataSource[lineSelected].lineName}</Typography.Title>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    nextLine();
                  }}
                  disabled={currentLineIdx === lineList.length - 1}
                  type="link"
                  icon={<i style={{ fontSize: 55 }} className="far fa-arrow-alt-right" />}
                />
              </Col>
            </Row>
            <img style={{ width: '100%' }} src={dataSource[lineSelected].imgSrc} alt="" />
          </Col>
        )}
        {currentTab === 'pq' && (
          <Col span={24}>
            <Row justify="space-around">
              <Row style={{ width: 950 }}>
                <Col span={11} style={{ paddingRight: 16 }}>
                  <Row>
                    <Col span={24}>
                      <Card title={null} style={{ width: 400 }}>
                        <Typography style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}>
                          Logged Events
                        </Typography>
                        <Space>
                          <Button size="large" icon={<i className="fal fa-file-search" />} />{' '}
                          Transient & Sag/Swell statistics CBEMA
                        </Space>
                        <Typography
                          style={{
                            textAlign: 'left',
                            fontSize: 14,
                            fontWeight: 600,
                            paddingTop: 16,
                          }}
                        >
                          Waveforms/sequence of events
                        </Typography>
                        <Space direction="vertical">
                          <Space>
                            <Button size="large" icon={<i className="fal fa-file-search" />} />{' '}
                            Sag/swell
                          </Space>
                          <Space>
                            <Button size="large" icon={<i className="fal fa-file-search" />} />{' '}
                            Transients
                          </Space>
                        </Space>
                      </Card>
                    </Col>
                    <Col span={24} style={{ paddingTop: 16 }}>
                      <Card title={null} style={{ width: 400 }}>
                        <Typography style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}>
                          Voltage Disturbances
                        </Typography>

                        <Form>
                          <Form.Item
                            label="Last Disturbance"
                            wrapperCol={{ span: 15 }}
                            labelCol={{ span: 9 }}
                          >
                            <DatePicker
                              style={{ width: '100%' }}
                              format="M/DD/YYYY h:m:s.sss A"
                              value={moment('2/14/2021 6:18:12.472 PM', 'M/DD/YYYY h:m:s.sss A')}
                            />
                          </Form.Item>
                          <Typography
                            style={{
                              textAlign: 'left',
                              fontSize: 14,
                              fontWeight: 600,
                              paddingTop: 16,
                            }}
                          >
                            Disturbances count
                          </Typography>
                          <Form.Item
                            label="Sag/swell"
                            wrapperCol={{ span: 15 }}
                            labelCol={{ span: 9 }}
                          >
                            <Input style={{ width: '100%' }} value="257" />
                          </Form.Item>
                          <Form.Item
                            label="Transients"
                            wrapperCol={{ span: 15 }}
                            labelCol={{ span: 9 }}
                          >
                            <Input style={{ width: '100%' }} value="51" />
                          </Form.Item>
                        </Form>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col span={11}>
                  <Card style={{ height: '100%' }}>
                    <Typography style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}>
                      Harmonics Measurements
                    </Typography>
                    <Typography
                      style={{ textAlign: 'left', fontSize: 14, fontWeight: 600, marginTop: 32 }}
                    >
                      Harmonics Measurements
                    </Typography>
                    <Row gutter={[32, 0]}>
                      <Col span={12}>
                        <Form>
                          <Form.Item label="V1(ab)">
                            <Input value="1.0 %" />
                          </Form.Item>
                          <Form.Item label="V1(ca)">
                            <Input value="0.9 %" />
                          </Form.Item>
                          <Form.Item label="V1(bc)">
                            <Input value="0.9 %" />
                          </Form.Item>
                        </Form>
                      </Col>
                      <Col span={12}>
                        <Form>
                          <Form.Item label="I1">
                            <Input value="9.0 %" />
                          </Form.Item>
                          <Form.Item label="I2">
                            <Input value="9.5 %" />
                          </Form.Item>
                          <Form.Item label="I3">
                            <Input value="8.7 %" />
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>
                    <Space>
                      <Typography
                        style={{
                          textAlign: 'left',
                          fontSize: 14,
                          fontWeight: 600,
                          paddingRight: 21,
                        }}
                      >
                        Harmonics Log
                      </Typography>
                      <Button size="large" icon={<i className="fal fa-file-search" />} />
                    </Space>
                    <Space style={{ marginTop: 16, width: '100%' }}>
                      <Typography style={{ textAlign: 'left', fontSize: 14, fontWeight: 600 }}>
                        Harmonics Details
                      </Typography>
                      <Button size="large" icon={<i className="fal fa-chart-bar" />} />
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Row>
          </Col>
        )}
        {currentTab === 'sa' && (
          <Col span={24}>
            <img
              style={{ width: '100%' }}
              src="/Electricity Control Architecture-page-1.svg"
              alt=""
            />
          </Col>
        )}
      </Row>
    </PageHeaderWrapper>
  );
}
