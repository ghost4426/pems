/* eslint-disable react/jsx-curly-brace-presence */
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, Col, DatePicker, Form, Input, Row, Space, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

const dataSource = [
  {
    meter: 'Process Water - WT1 - CIP KHS',
    totalFlow: 8.568,
    lossFlow: 98,
  },
  {
    meter: 'Process Water - WT1 - Sugar Dissolver 1',
    totalFlow: 8.568,
    lossFlow: 98,
  },
  {
    meter: 'Process Water - WT1 - Sugar Dissolver 2',
    totalFlow: 82.636,
    lossFlow: 25,
  },
  {
    meter: 'Process Water - WT1 - Batchmix 2',
    totalFlow: 5.236,
    lossFlow: 40,
  },
  {
    meter: 'Process Water - WT1 - Batchmix 1',
    totalFlow: 8.936,
    lossFlow: 174,
  },
];

const eventDs = [
  {
    event: 'From 6:00 - 8:00 8/11/2020 Lưu lượng sử dụng CIP phân bổ',
    x: 50,
    y: 30,
    z: 20,
  },
  {
    event: 'From 6:00 - 18:00 10/11/2020 Lưu lượng sử dụng CIP phân bổ',
    x: 30,
    y: 50,
    z: 20,
  },
  {
    event: 'From 6:00 - 8:00 20/11/2020 Lưu lượng sử dụng CIP phân bổ',
    x: 40,
    y: 40,
    z: 20,
  },
  {
    event: 'From 5:00 - 9:00 8/11/2020 Lưu lượng sử dụng CIP phân bổ',
    x: 10,
    y: 10,
    z: 80,
  },
  {
    event: 'From 8:00 - 10:00 8/11/2020 Lưu lượng sử dụng CIP phân bổ',
    x: 30,
    y: 30,
    z: 40,
  },
];

export default function FlowMeterSetting() {
  const [mode, setMode] = useState('view');
  return (
    <PageHeaderWrapper>
      <Card>
        {mode === 'view' && (
          <Table
            rowKey="meter"
            dataSource={dataSource}
            columns={[
              {
                title: 'Meter',
                dataIndex: 'meter',
                key: 'meter',
              },
              {
                title: 'Total Flow (m3)',
                dataIndex: 'totalFlow',
                key: 'totalFlow',
                width: 200,
                align: 'center',
              },
              {
                title: 'Loss Flow (m3)',
                dataIndex: 'lossFlow',
                key: 'lossFlow',
                width: 200,
                align: 'center',
              },
              {
                title: '',
                dataIndex: 'line',
                key: 'name',
                width: 150,
                render: () => {
                  return (
                    <Button
                      onClick={() => {
                        setMode('edit');
                      }}
                      type="link"
                    >
                      Click Here To Edit
                    </Button>
                  );
                },
              },
            ]}
          />
        )}
        {mode === 'edit' && (
          <Row justify={'space-between'}>
            <Col style={{ marginRight: 16 }}>
              <Form layout="vertical" style={{ width: 400 }}>
                <Form.Item label={'From'}>
                  <DatePicker
                    style={{ width: '100%' }}
                    value={moment('6:00 8/11/2020', 'h:mm D/M/YYYY')}
                    format={'h:mm D/M/YYYY'}
                  />
                </Form.Item>
                <Form.Item label={'To'}>
                  <DatePicker
                    style={{ width: '100%' }}
                    value={moment('8:00 8/11/2020', 'h:mm D/M/YYYY')}
                    format={'h:mm D/M/YYYY'}
                  />
                </Form.Item>
                <Form.Item label={'Comment'}>
                  <Input value={'Lưu lượng sử dụng CIP phân bổ'} />
                </Form.Item>
                <Form.Item label={'Ratio (%)'}>
                  <Input value={'50:30:20'} />
                </Form.Item>
                <Space style={{ float: 'right' }}>
                  <Button type={'primary'}>Add</Button>
                  <Button
                    type={'primary'}
                    onClick={() => {
                      setMode('view');
                    }}
                  >
                    Back
                  </Button>
                </Space>
              </Form>
            </Col>
            <Col span={16}>
              <Table
                style={{ width: '100%' }}
                dataSource={eventDs}
                columns={[
                  {
                    title: 'Event',
                    dataIndex: 'event',
                    key: 'event',
                  },
                  {
                    title: 'Line X (%)',
                    dataIndex: 'x',
                    key: 'x',
                  },
                  {
                    title: 'Line Y (%)',
                    dataIndex: 'y',
                    key: 'y',
                  },
                  {
                    title: 'Line Z (%)',
                    dataIndex: 'z',
                    key: 'z',
                  },
                ]}
              />
            </Col>
          </Row>
        )}
      </Card>
    </PageHeaderWrapper>
  );
}
