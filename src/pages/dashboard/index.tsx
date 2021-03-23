/* eslint-disable react/jsx-curly-brace-presence */
import { Col, Row, Radio, Card, Typography, Space } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';
import PageLoading from './components/PageLoading';
import { Pie } from './components/Charts';

const ElectricLineRow = React.lazy(() => import('./components/ElectricLineRow'));
const WaterLineRow = React.lazy(() => import('./components/WaterLineRow'));
const SteamLineRow = React.lazy(() => import('./components/SteamLineRow'));

function Analysis(props: any) {
  const queryLine = props.location.query.energy as string;

  const [energyType, setEnergyType] = useState('water');

  useEffect(() => {
    if (energyType !== queryLine && !!queryLine) {
      setEnergyType(queryLine);
    }
  }, []);

  return (
    <GridContent>
      <React.Fragment>
        <Row align="middle" justify="space-between" gutter={[16, 16]}>
          <Col span={10}>
            <Radio.Group
              style={{ width: '100%' }}
              size={'large'}
              buttonStyle={'solid'}
              onChange={() => null}
              defaultValue="b"
            >
              <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="a">
                24h
              </Radio.Button>
              <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="b">
                7d
              </Radio.Button>
              <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="c">
                30d
              </Radio.Button>
              <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="d">
                1y
              </Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={6}>
            <Radio.Group
              style={{ width: '100%' }}
              size={'large'}
              buttonStyle={'solid'}
              onChange={() => null}
              defaultValue="a"
            >
              <Radio.Button style={{ width: '50%', textAlign: 'center' }} value="a">
                Best
              </Radio.Button>
              <Radio.Button style={{ width: '50%', textAlign: 'center' }} value="b">
                Worst
              </Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={8}>
            <Radio.Group
              style={{ width: '100%' }}
              size={'large'}
              buttonStyle={'solid'}
              onChange={(e) => {
                setEnergyType(e.target.value);
              }}
              value={energyType}
            >
              <Radio.Button style={{ width: '20%', textAlign: 'center' }} value="water">
                <i className="fas fas fa-tint" />
              </Radio.Button>
              <Radio.Button style={{ width: '20%', textAlign: 'center' }} value="elec">
                <i className="fas fas fa-bolt" />
              </Radio.Button>
              <Radio.Button style={{ width: '20%', textAlign: 'center' }} value="steam">
                <i className="fas fa-heat" />
              </Radio.Button>
              <Radio.Button style={{ width: '20%', textAlign: 'center' }} value="air">
                <i className="fas fa-wind" />
              </Radio.Button>
              <Radio.Button style={{ width: '20%', textAlign: 'center' }} value="co2">
                <i className="fas fa-spinner" />
              </Radio.Button>
            </Radio.Group>
          </Col>
        </Row>

        <Suspense fallback={<PageLoading />}>
          {energyType === 'elec' && <ElectricLineRow visitData={[]} loading={false} />}
          {energyType !== 'elec' && energyType !== 'steam' && (
            <WaterLineRow visitData={[]} loading={false} />
          )}
          {energyType === 'steam' && <SteamLineRow visitData={[]} loading={false} />}
        </Suspense>
        <Suspense fallback={null}>
          <Row justify={'end'} gutter={[16, 0]}>
            <Col span={12}>
              <Card bodyStyle={{ padding: 0 }}>
                <Col span={24}>
                  <Row>
                    <Col span={12}>
                      <Row align={'middle'} justify={'center'} style={{ padding: 20 }}>
                        <Col span={24} style={{ textAlign: 'center' }}>
                          <Typography.Title level={4}>Pepsico Dong Nai Plant:</Typography.Title>
                        </Col>
                        <Col span={24} style={{ textAlign: 'center' }}>
                          {`${energyType === 'elec' ? 'Electricity' : 'Water'} KPI`}
                        </Col>
                        <Col span={24} style={{ textAlign: 'center' }}>
                          {' '}
                          <Pie
                            animate={false}
                            percent={100}
                            title={''}
                            total={
                              <Space
                                size="small"
                                direction="vertical"
                                style={{ fontSize: 24, lineHeight: '17px' }}
                              >
                                <span>
                                  {energyType === 'elec' || energyType === 'steam' ? 12 : 2.2}
                                </span>
                                <span style={{ fontSize: 16 }}>
                                  {energyType === 'elec' || energyType === 'steam'
                                    ? 'Kwh/8oz'
                                    : 'L/L'}
                                </span>
                              </Space>
                            }
                            height={132}
                            lineWidth={2}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <img
                        alt=""
                        style={{ width: '100%', height: '100%' }}
                        src={'/pepsico-dong-nai.jpg'}
                      />
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Col>
          </Row>
        </Suspense>
      </React.Fragment>
    </GridContent>
  );
}

export default connect()(Analysis);
