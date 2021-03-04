import { PageHeaderWrapper } from '@ant-design/pro-layout'
import { Button, Card, DatePicker, Form, Row, Select } from 'antd'
import React from 'react'

const dataSource = ['Factory', 'Line T', 'Line U', 'Line W', 'Line BIB', 'Line X', 'Line Y', 'Line Z', 'Line Q'];

export default function Report() {
    return (
        <PageHeaderWrapper>
            <Card style={{ width: '100%' }}>
                <Row justify='space-around'>

                    <Form layout='inline' >
                        <Form.Item label={'Energy'}>
                            <Select style={{ width: '150px' }}>
                                {dataSource.map((d, i) => (<Select.Option value={i}>KPI {d}</Select.Option>))}
                            </Select>
                        </Form.Item>
                        <Form.Item label={'From'}>
                            <DatePicker style={{ width: '100%' }} format={'MM/DD/YYYY'} />
                        </Form.Item>
                        <Form.Item label={'To'}>
                            <DatePicker style={{ width: '100%' }} format={'MM/DD/YYYY'} />
                        </Form.Item>
                        <Button type={'primary'} href='/Format report excel.xlsx'>Export</Button>
                    </Form>
                </Row>

            </Card>
        </PageHeaderWrapper>
    )
}
