import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Row, Select, DatePicker, Button, Form, Table, Input } from 'antd';
import moment from 'moment';
import React, { useMemo, useState } from 'react';

const dataSource = [
  {
    line: 'Line T',
  },
  {
    line: 'Line U',
  },
  {
    line: 'Line BIB',
  },
  {
    line: 'Line X',
  },
  {
    line: 'Line Z',
  },
  {
    line: 'Line Q',
  },
  {
    line: 'Line Y',
  },
  {
    line: 'Line W',
  },
  {
    line: 'RO WT1',
  },
  {
    line: 'RO WT2',
  },
];

export default function KPISetting() {
  const [energy, setEnergy] = useState('Water');
  const [time, setTime] = useState(moment('2021/01/01', 'YYYY/MM/DD'));

  const array = [0, 1, 2, 3, 4, 5, 6, 7];

  const getColumn = useMemo(
    () => ({
      title: 'Plan (Liter)',
      key: 'name',
      children: array.map((_, i) => ({
        title: moment(time).add(i, 'days').format('YYYY/MM/DD'),
        dataIndex: '30',
        key: i,
        render: () => {
          return <Input type="number" />;
        },
      })),
    }),
    [time, array],
  );
  return (
    // <PageHeaderWrapper>
    <Card style={{ width: '100%' }}>
      <Row justify="space-between">
        <Form layout="inline">
          <Form.Item label={'Energy'}>
            <Select
              value={energy}
              onSelect={(value) => {
                setEnergy(value);
              }}
              style={{ width: '150px' }}
            >
              <Select.Option value="Water">Water</Select.Option>
              <Select.Option value="Electric">Electric</Select.Option>
              <Select.Option value="Steam">Steam</Select.Option>
              <Select.Option value="Air">Air</Select.Option>
              <Select.Option value="CO2">CO2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Time">
            <DatePicker
              value={time}
              onChange={(value) => {
                setTime(value ?? moment());
              }}
              style={{ width: '100%' }}
              format={'MM/DD/YYYY'}
            />
          </Form.Item>
        </Form>
        <Button type="primary">Save Setting</Button>
      </Row>
      <Table
        style={{ marginTop: 32 }}
        dataSource={dataSource}
        pagination={{ hideOnSinglePage: true }}
        columns={[
          {
            title: 'Line',
            dataIndex: 'line',
            key: 'name',
            width: 150,
            render: (value) => {
              return <b>{value}</b>;
            },
          },
          {
            title: `${energy} KPI`,
            dataIndex: 'kpi',
            key: 'name',
            render: () => {
              return <Input type="number" />;
            },
          },
          getColumn,
        ]}
      />
    </Card>
    // </PageHeaderWrapper>
  );
}
