/* eslint-disable react/jsx-curly-brace-presence */
import React, { useCallback, useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Col, Row, Table, Tabs, Tag, Typography } from 'antd';

const lineList = ['factory', 'wt1', 'wt2', 't', 'u', 'w', 'x', 'y', 'z', 'q', 'bib']

const dataSource = {
  factory: {
    key: 'factory',
    lineName: 'Factory',
    mapImgSrc: '/line-map/factory.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [{
      name: 'F01',
      volumeFlow: '344.223',
      totalizer: 2396,
      setPoint: 3000,
    },
    {
      name: 'F45',
      volumeFlow: '344.223',
      totalizer: 2396,
      setPoint: 3000,
    }]

  },
  wt1: {
    key: 'factory',
    lineName: 'RO-WT1',
    mapImgSrc: '/line-map/wt1.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F04',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F06',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F07',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  },
  wt2: {
    key: 'factory',
    lineName: 'RO-WT2',
    mapImgSrc: '/line-map/wt2.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F26',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F27',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F28',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  },
  t: {
    key: 'factory',
    lineName: 'LINE T (AQUA 600 SIDEL)',
    mapImgSrc: '/line-map/t.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F17',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F18',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F19',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F20',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }, u: {
    key: 'factory',
    lineName: 'LINE U (CAN 600 SIDEL)',
    mapImgSrc: '/line-map/u.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'F09',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F16',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F21',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F22',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F23',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F47A',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F47B',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }, w: {
    key: 'factory',
    lineName: 'LINE W (PET 600-KHS)',
    mapImgSrc: '/line-map/w.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F26',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F27',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F28',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }, x: {
    key: 'factory',
    lineName: 'LINE X (PET-CSD 800 KRONES)',
    mapImgSrc: '/line-map/x.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F26',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F27',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F28',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }, y: {
    key: 'factory',
    lineName: 'LINE Y (PET-HF600-KRONES)',
    mapImgSrc: '/line-map/y.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F26',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F27',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F28',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }, z: {
    key: 'factory',
    lineName: 'LINE Z (RGB 600 LINKER)',
    mapImgSrc: '/line-map/z.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F26',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F27',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F28',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }, q: {
    key: 'factory',
    lineName: 'LINE Q (AQUA 800 KRONES)',
    mapImgSrc: '/line-map/q.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F26',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F27',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F28',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }, bib: {
    key: 'factory',
    lineName: 'Line BIB',
    mapImgSrc: '/line-map/bib.png',
    kpiExpected: 2.2,
    totalAmount: 2300,
    meters: [
      {
        name: 'Main',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F26',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F27',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      },
      {
        name: 'F28',
        volumeFlow: '344.223',
        totalizer: 2396,
        setPoint: 3000,
      }]
  }
}

export default function LineInspector(props: any) {

  const queryLine = props.location.query.line as string;
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [lineSelected, setLineSelected] = useState('factory');


  useEffect(() => {
    if (lineSelected !== queryLine && lineList.includes(queryLine)) {
      setLineSelected(queryLine);
      setCurrentLineIdx(lineList.indexOf(queryLine))
    }
  }, [])

  const nextLine = useCallback(
    () => {
      setCurrentLineIdx((idx) => {
        const nextIdx = idx + 1;
        setLineSelected(lineList[nextIdx]);
        return nextIdx;
      });
    },
    [setCurrentLineIdx, setLineSelected],
  )

  const preLine = useCallback(
    () => {
      setCurrentLineIdx((idx) => {
        const nextIdx = idx - 1;
        setLineSelected(lineList[nextIdx]);
        return nextIdx;
      });
    },
    [setCurrentLineIdx, setLineSelected],
  )

  return (
    <PageHeaderWrapper
      breadcrumb={{
        routes: [
          { breadcrumbName: 'Home', path: '' },
          { breadcrumbName: 'Water', path: '/line/water' },
        ],
      }}
      title={'Water'}
    >
      <Row gutter={[16, 8]}>
        <Col span={24}>

          <Row justify="space-between">
            <Col>
              <Button onClick={() => { preLine() }} disabled={currentLineIdx === 0} type='link' icon={<i style={{ fontSize: 55 }} className="far fa-arrow-alt-left" />} />
            </Col>
            <Col>
              <Typography.Title>{dataSource[lineSelected].lineName}</Typography.Title>
            </Col>
            <Col>
              <Button onClick={() => { nextLine() }} disabled={currentLineIdx === (lineList.length - 1)} type='link' icon={<i style={{ fontSize: 55 }} className="far fa-arrow-alt-right" />} />
            </Col>
          </Row>
        </Col>
        <Col md={12} xs={24}>
          <Typography.Title level={3}>Line Overview</Typography.Title>
          <Row gutter={[0, 8]} justify={'end'}>
            <Col>
              <Table
                size={'small'}
                pagination={{ hideOnSinglePage: true }}
                bordered
                dataSource={[{ expected: dataSource[lineSelected].kpiExpected, amount: dataSource[lineSelected].totalAmount }]}
                columns={[
                  {
                    title: 'KPI Expected (L/L)',
                    dataIndex: 'expected',
                    align: 'center',
                    width: 120,
                  },
                  {
                    title: 'RGB Line Total Amount (L)    ',
                    dataIndex: 'amount',
                    align: 'center',
                    width: 150,
                  },
                ]}
              />
            </Col>
            <Col span={24}>
              <Card bodyStyle={{ padding: 0 }}>
                <img alt="" src={dataSource[lineSelected].mapImgSrc} style={{ width: '100%' }} />
                {/* <div style={{width:'100%', textAlign: 'center', fontWeight:'bold'}}>RBG Line Map</div> */}
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={12} xs={24}>
          <Typography.Title level={3}>Meter Detail</Typography.Title>
          <Row gutter={[16, 16]}>
            {dataSource[lineSelected].meters.map((item: any) =>
            (<Col md={12} xs={24}>
              <Card bodyStyle={{ padding: 0 }}>
                <Row>
                  <Col span={24} style={{ textAlign: 'center', paddingTop: 8 }}>
                    <img alt="" src="/line-avatar/Meter.jpg" style={{ width: '45%' }} />
                  </Col>
                  <Col span={24} style={{ textAlign: 'center' }}>
                    <Tag style={{ width: '100%', fontSize: 15 }} color={'#87d068'}>
                      <b>{item.name}</b>
                    </Tag>
                  </Col>
                  <Col span={24} style={{ padding: 16 }}>
                    <Row justify={'space-between'}>
                      <Col>
                        <b>Volume Flow:</b>
                      </Col>
                      <Col>
                        <b>{item.volumeFlow} L/h</b>
                      </Col>
                    </Row>
                    <Row justify={'space-between'}>
                      <Col>
                        <b>Totalizer:</b>
                      </Col>
                      <Col>
                        <b>{item.totalizer} L</b>
                      </Col>
                    </Row>
                    <Row justify={'space-between'}>
                      <Col>
                        <b>Set Point:</b>
                      </Col>
                      <Col style={{ color: 'red' }}>
                        <b>{item.setPoint} L</b>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
}
