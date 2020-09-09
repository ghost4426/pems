/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Card, Col, Row, Table, Tag, Typography } from 'antd'

export default function LineInspector() {
    return (
        <PageHeaderWrapper breadcrumb={{ routes: [{ breadcrumbName: 'Home', path: '' }, { breadcrumbName: 'RGB Line', path: '/line/rgb-line' }] }} title={'RGB Line'} >
            <Row gutter={[16, 8]}>
                <Col md={12} xs={24}>
                    <Typography.Title level={3}>Line Overview</Typography.Title>
                    <Row gutter={[0, 8]} justify={'end'}>
                        <Col    >
                            <Table size={'small'} pagination={{ hideOnSinglePage: true }} bordered dataSource={[{ expected: 2.2, amount: 2300 }]} columns={[{ title: 'KPI Expected (L/L)', dataIndex: 'expected', align: 'center', width: 120 }, { title: 'RGB Line Total Amount (L)    ', dataIndex: 'amount', align: 'center', width: 150 },]} />
                        </Col>
                        <Col span={24}>
                            <Card bodyStyle={{ padding: 0 }}>
                                <img alt='' src='/line-avatar/RGB_Line.png' style={{ width: '100%' }} />
                                {/* <div style={{width:'100%', textAlign: 'center', fontWeight:'bold'}}>RBG Line Map</div> */}
                            </Card>
                        </Col>
                    </Row>

                </Col>
                <Col md={12} xs={24}>
                    <Typography.Title level={3}>Meter Detail</Typography.Title>
                    <Row gutter={[16, 16]}>
                        <Col md={12} xs={24}>
                            <Card bodyStyle={{ padding: 0 }}>
                                <Row  >
                                    <Col span={24} style={{ textAlign: 'center', paddingTop: 8 }}>
                                        <img alt='' src='/line-avatar/Meter.jpg' style={{ width: '45%' }} />
                                    </Col>
                                    <Col span={24} style={{ textAlign: 'center' }} ><Tag style={{ width: '100%', fontSize: 15 }} color={'#87d068'}><b>F10</b></Tag> </Col>
                                    <Col span={24} style={{ padding: 16 }}>
                                        <Row justify={'space-between'}>
                                            <Col><b>Volume Flow:</b></Col>
                                            <Col><b>344.223 L/h</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Volume Flow:</b></Col>
                                            <Col><b>344.223 L/h</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Totalizer:</b></Col>
                                            <Col><b>2396 L</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Set Point:</b></Col>
                                            <Col style={{ color: 'red' }}><b>3000 L</b></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={12} xs={24}>
                            <Card bodyStyle={{ padding: 0 }}>
                                <Row  >
                                    <Col span={24} style={{ textAlign: 'center', paddingTop: 8 }}>
                                        <img alt='' src='/line-avatar/Meter.jpg' style={{ width: '45%' }} />
                                    </Col>
                                    <Col span={24} style={{ textAlign: 'center' }} ><Tag style={{ width: '100%', fontSize: 15 }} color={'#87d068'}><b>F15</b></Tag> </Col>
                                    <Col span={24} style={{ padding: 16 }}>
                                        <Row justify={'space-between'}>
                                            <Col><b>Volume Flow:</b></Col>
                                            <Col><b>344.223 L/h</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Volume Flow:</b></Col>
                                            <Col><b>344.223 L/h</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Totalizer:</b></Col>
                                            <Col><b>2396 L</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Set Point:</b></Col>
                                            <Col style={{ color: 'red' }}><b>3000 L</b></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={12} xs={24}>
                            <Card bodyStyle={{ padding: 0 }}>
                                <Row  >
                                    <Col span={24} style={{ textAlign: 'center', paddingTop: 8 }}>
                                        <img alt='' src='/line-avatar/Meter.jpg' style={{ width: '45%' }} />
                                    </Col>
                                    <Col span={24} style={{ textAlign: 'center' }} ><Tag style={{ width: '100%', fontSize: 15 }} color={'#87d068'}><b>M12</b></Tag> </Col>
                                    <Col span={24} style={{ padding: 16 }}>
                                        <Row justify={'space-between'}>
                                            <Col><b>Volume Flow:</b></Col>
                                            <Col><b>344.223 L/h</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Volume Flow:</b></Col>
                                            <Col><b>344.223 L/h</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Totalizer:</b></Col>
                                            <Col><b>2396 L</b></Col>
                                        </Row>
                                        <Row justify={'space-between'}>
                                            <Col><b>Set Point:</b></Col>
                                            <Col style={{ color: 'red' }}><b>3000 L</b></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </PageHeaderWrapper>
    )
}
