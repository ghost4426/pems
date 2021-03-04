import React from 'react';
import { Row, Col, Card, Progress, Tag, Typography, Space } from 'antd';
import styled from 'styled-components';
import { CheckCircleOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { MiniArea, Pie } from '../dashboard/components/Charts';
import AreaChart from './AreaChart';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const ProgressStyle = styled(Progress)`
  .ant-progress-outer {
    .ant-progress-inner {
      .ant-progress-bg {
        height: 20px !important;
      }
    }
  }
`;

export default function SummaryAndReport() {
  return (
    <PageHeaderWrapper>
      <Row gutter={[16, 0]}>
        <Col md={12} xs={24}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Card title="Best Performers">
                <Row gutter={[0, 8]}>
                  <Col span={24}>
                    <Row>
                      <Col span={5}>
                        <CheckCircleOutlined style={{ color: '' }} /> RGB Line
                      </Col>
                      <Col span={19}>
                        <ProgressStyle
                          strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                          }}
                          percent={90}
                          status="active"
                          format={() => (
                            <Tag color={'#87d068'}>
                              <b>- 1%</b>
                            </Tag>
                          )}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Col span={5}>
                        <CheckCircleOutlined style={{ color: '' }} /> AQUA Line
                      </Col>
                      <Col span={19}>
                        <ProgressStyle
                          strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                          }}
                          percent={80}
                          status="active"
                          format={() => (
                            <Tag color={'#87d068'}>
                              <b>- 1%</b>
                            </Tag>
                          )}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Col span={5}>
                        <CheckCircleOutlined style={{ color: '' }} /> PET Line
                      </Col>
                      <Col span={19}>
                        <ProgressStyle
                          strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                          }}
                          percent={70}
                          status="active"
                          format={() => (
                            <Tag color={'#87d068'}>
                              <b>- 1%</b>
                            </Tag>
                          )}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Card title="Location Overview">
                <Row gutter={[8, 8]}>
                  <Col span={24}>
                    <div>
                      <b>Dong Nai Plant</b>
                    </div>
                    <div>Electricity (kWh) - 4 Weeks</div>
                  </Col>
                  <Col span={24}>
                    <AreaChart />
                  </Col>
                  <Col span={24}>
                    <Row gutter={[8, 0]}>
                      <Col span="12">
                        <Card>
                          <Row justify={'center'}>
                            <Col>
                              <span>Total For Location</span>
                            </Col>
                            <Col span={24} style={{ textAlign: 'center' }}>
                              <span style={{ fontSize: 45 }}>
                                {' '}
                                <b>
                                  <ArrowUpOutlined style={{ color: 'red' }} /> 0.9 %
                                </b>
                              </span>
                            </Col>
                            <Col>On Previous Period</Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col span="12">
                        {' '}
                        <Card>
                          <Row justify={'center'}>
                            <Col>
                              <span>Latest</span>
                            </Col>
                            <Col span={24} style={{ textAlign: 'center' }}>
                              <Progress percent={30} showInfo={false} />
                              <span style={{ fontSize: 31, textAlign: 'center' }}>
                                {' '}
                                <b>1801</b>
                              </span>
                            </Col>
                            <Col>kWh</Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={12} xs={24}>
          <Card title="All Location Totals">
            {/* <Typography.Title level={3}>All Location Totals</Typography.Title> */}
            <Row gutter={[8, 8]}>
              <Col span={8}>
                <Card bodyStyle={{ padding: 8 }}>
                  <Row justify={'center'}>
                    <Col>
                      <span>Total Electricity</span>
                    </Col>
                    <Col span={24} style={{ marginTop: 100 }}>
                      <MiniArea
                        color="#40a9ff"
                        data={[
                          { x: '2020-09-11', y: 50 },
                          { x: '2020-09-12', y: 7 },
                          { x: '2020-09-13', y: 45 },
                          { x: '2020-09-14', y: 30 },
                          { x: '2020-09-15', y: 60 },
                        ]}
                      />
                    </Col>
                    <Col>
                      <span style={{ fontSize: 18 }}>
                        <b>2,297,774</b>{' '}
                      </span>
                      <span style={{ fontSize: 11 }}>
                        <b>kWh</b>{' '}
                      </span>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={8}>
                <Card bodyStyle={{ padding: 8 }}>
                  <Row justify={'center'}>
                    <Col>
                      <span>Total Water</span>
                    </Col>
                    <Col span={24} style={{ marginTop: 100 }}>
                      {/* <ChartCard
                                            bordered={false}
                                            loading={false}
                                            title={
                                                'Visits'
                                            }

                                            contentHeight={46}
                                        > */}
                      <MiniArea
                        color="#40a9ff"
                        data={[
                          { x: '2020-09-11', y: 50 },
                          { x: '2020-09-12', y: 7 },
                          { x: '2020-09-13', y: 45 },
                          { x: '2020-09-14', y: 30 },
                          { x: '2020-09-15', y: 60 },
                        ]}
                      />
                      {/* </ChartCard>k */}
                    </Col>
                    <Col>
                      <span style={{ fontSize: 18 }}>
                        <b>16,503</b>{' '}
                      </span>
                      <span style={{ fontSize: 11 }}>
                        <b>L</b>{' '}
                      </span>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={8}>
                <Card bodyStyle={{ padding: 8 }}>
                  <Row justify={'center'}>
                    <Col>
                      <span>Total Steam</span>
                    </Col>
                    <Col span={24} style={{ marginTop: 100 }}>
                      {/* <ChartCard
                                            bordered={false}
                                            loading={false}
                                            title={
                                                'Visits'
                                            }

                                            contentHeight={46}
                                        > */}
                      <MiniArea
                        color="#40a9ff"
                        data={[
                          { x: '2020-09-11', y: 50 },
                          { x: '2020-09-12', y: 7 },
                          { x: '2020-09-13', y: 45 },
                          { x: '2020-09-14', y: 30 },
                          { x: '2020-09-15', y: 60 },
                        ]}
                      />
                      {/* </ChartCard>k */}
                    </Col>
                    <Col>
                      <span style={{ fontSize: 18 }}>
                        <b>2,297,774</b>{' '}
                      </span>
                      <span style={{ fontSize: 11 }}>
                        <b>ton</b>{' '}
                      </span>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Progress
                    type="circle"
                    status="exception"
                    percent={100}
                    strokeColor={''}
                    format={() => (
                      <div>
                        <div style={{ fontSize: 15 }}>
                          <i className="fas fa-bolt" />
                        </div>
                        <div>
                          <span style={{ fontSize: 30 }}>
                            <b>0.8 </b>
                          </span>
                          <span style={{ fontSize: 18 }}>%</span>
                        </div>
                        <div style={{ fontSize: 15 }}>Increase</div>
                      </div>
                    )}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Progress
                    type="circle"
                    status="success"
                    percent={100}
                    strokeColor={''}
                    format={() => (
                      <div>
                        <div style={{ fontSize: 15 }}>
                          <i className="fas fa-tint" />
                        </div>
                        <div>
                          <span style={{ fontSize: 30 }}>
                            <b>0.0 </b>
                          </span>
                          <span style={{ fontSize: 18 }}>%</span>
                        </div>
                        <div style={{ fontSize: 15 }}>Saving</div>
                      </div>
                    )}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Progress
                    type="circle"
                    status="success"
                    percent={100}
                    strokeColor={''}
                    format={() => (
                      <div>
                        <div style={{ fontSize: 15 }}>
                          <i className="fas fa-fire" />
                        </div>
                        <div>
                          <span style={{ fontSize: 30 }}>
                            <b>0.8 </b>
                          </span>
                          <span style={{ fontSize: 18 }}>%</span>
                        </div>
                        <div style={{ fontSize: 15 }}>Increase</div>
                      </div>
                    )}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <Space direction='vertical'>
                    <Typography style={{ width: '100%', fontSize: 11 }}>Reduce Your Carbon FootPrint</Typography>
                    <Progress
                      style={{ display: 'flex', justifyContent: 'center' }}
                      type="circle"
                      status="success"
                      percent={100}
                      strokeColor={''}
                      format={() => (
                        <div>
                          <div
                            style={{
                              height: 20,
                              backgroundImage: 'url(/carbon-footprint.png)',
                              backgroundSize: '20px',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                            }}
                          />
                          <div>
                            <span style={{ fontSize: 30 }}>
                              <b>0.1</b>
                            </span>
                            <span style={{ fontSize: 18 }}>%</span>
                          </div>
                          <div style={{ fontSize: 15 }}>Release</div>
                        </div>
                      )}
                    />
                  </Space>

                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
}
