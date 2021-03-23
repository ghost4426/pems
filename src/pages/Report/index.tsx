import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Card, DatePicker, Form, Radio, Row, Select } from 'antd';
import React, { useCallback } from 'react';
import { useState } from 'react';

const dataSource = [
  { value: 'Factory', key: 'factory' },
  { value: 'Line T', key: 't' },
  { value: 'Line U', key: 'u' },
  { value: 'Line W', key: 'w' },
  { value: 'Line BIB', key: 'bib' },
  { value: 'Line X', key: 'x' },
  { value: 'Line Y', key: 'y' },
  { value: 'Line Z', key: 'z' },
  { value: 'Line Q', key: 'q' },
];

const energyDataSource = [
  { value: 'Water', key: 'water' },
  { value: 'Electricity', key: 'electric' },
  { value: 'Steam', key: 'steam' },
  { value: 'Air', key: 'air' },
  { value: 'CO2', key: 'co2' },
];

export default function Report() {
  const [form] = Form.useForm();

  const [reportLink, setReportLink] = useState<string>();

  const onExportReport = useCallback(() => {
    const energy = form.getFieldValue('energy');
    const line = form.getFieldValue('line');

    if (!line || !energy) return;

    if (energy === 'electric') {
      if (line === 'factory') {
        setReportLink('/report/electric_factory.xlsx');
        return;
      } else {
        setReportLink('/report/electric_do.xlsx');
        return;
      }
    }

    if (energy === 'water') {
      if (line === 'factory') {
        setReportLink('/report/water_factory.xlsx');
        return;
      } else {
        setReportLink(`/report/water_line_${line}.xlsx`);
        return;
      }
    }

    setReportLink('/Format report excel.xlsx');
    return;
  }, [form]);

  return (
    // <PageHeaderWrapper>
    <Card style={{ width: '100%' }}>
      <Row justify="space-around">
        <Form form={form} layout="vertical">
          <Form.Item name="energy" label={'Select Energy'}>
            <Select
              style={{ width: '100%' }}
              onSelect={() => {
                onExportReport();
              }}
            >
              {energyDataSource.map((d, i) => (
                <Select.Option key={d.key} value={d.key}>
                  {d.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="line" label={'Select Line'}>
            <Select
              style={{ width: '100%' }}
              onSelect={() => {
                onExportReport();
              }}
            >
              {dataSource.map((d, i) => (
                <Select.Option key={d.key} value={d.key}>
                  KPI {d.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label={'From'}>
            <DatePicker style={{ width: '100%' }} format={'MM/DD/YYYY'} />
          </Form.Item>
          <Form.Item label={'To'}>
            <DatePicker style={{ width: '100%' }} format={'MM/DD/YYYY'} />
          </Form.Item>
          <Form.Item>
            <Radio.Group
              options={['Daily', 'Weakly', 'Monthly']}
              optionType="button"
              buttonStyle="solid"
              defaultValue="Daily"
            />
          </Form.Item>
          <Button
            style={{ float: 'right' }}
            disabled={!reportLink}
            type={'primary'}
            href={reportLink}
          >
            Export
          </Button>
        </Form>
      </Row>
    </Card>
    // </PageHeaderWrapper>
  );
}
