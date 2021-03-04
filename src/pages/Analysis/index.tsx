/* eslint-disable react/jsx-curly-brace-presence */
import React, { useCallback, useEffect, useState } from 'react';
import { Card, Row, Col, Button, DatePicker, Select } from 'antd';
import { connect } from 'umi';
import LineChart from './LineChart';
import { Pie } from '../dashboard/components/Charts';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import BarChart from './BarChart';

const waterLine = [
  {
    key: 'wt1',
    value: 'RO WT 1',
    kpi: 2.2,
    actual: 2.1,
    saving: 0.1,
  },
  {
    key: 'wt2',
    value: 'RO WT 2',
    kpi: 2.3,
    actual: 2.1,
    saving: 0.2,
  },
  {
    key: 't',
    value: 'Line T',
    kpi: 2.2,
    actual: 2.2,
    saving: 0.0,
  },
  {
    key: 'u',
    value: 'Line U',
    kpi: 2.3,
    actual: 2.2,
    saving: 0.1,
  },
  {
    key: 'x',
    value: 'Line X',
    kpi: 2.4,
    actual: 2.0,
    saving: 0.4,
  },
];
const elecLine = [
  {
    key: 't',
    value: 'Line T',
    kpi: 6.2,
    actual: 6.0,
    saving: 0.2,
  },
  {
    key: 'u',
    value: 'Line U',
    kpi: 6.6,
    actual: 6.4,
    saving: 0.2,
  },
  {
    key: 'x',
    value: 'Line X',
    kpi: 6.8,
    actual: 6.8,
    saving: 0,
  },
];
const steamLine = [
  {
    key: 't',
    value: 'Line T',
    kpi: 13.5,
    actual: 13.4,
    saving: 0.1,
  },
  {
    key: 'u',
    value: 'Line U',
    kpi: 13.2,
    actual: 13.2,
    saving: 0,
  },
  {
    key: 'x',
    value: 'Line X',
    kpi: 12.9,
    actual: 12.8,
    saving: 0.1,
  },
];

function Analysis(props: any) {
  const queryLine = props.location.query.line as string;
  const [energyType, setEnergyType] = useState('water');
  const [selectedLine, setSelectedLine] = useState('t');
  const [chartType, setChartType] = useState('1');

  useEffect(() => {
    if (energyType !== queryLine && !!queryLine) {
      setEnergyType(queryLine);
    }
  }, []);

  const getLineName = useCallback(() => {
    if (energyType === 'water') return waterLine.filter((w) => w.key === selectedLine)[0];

    if (energyType === 'elec') return elecLine.filter((w) => w.key === selectedLine)[0];

    if (energyType === 'steam') return steamLine.filter((w) => w.key === selectedLine)[0];

    return null;
  }, [selectedLine, energyType]);

  const getDS = () => {
    const currentLine = getLineName();
    const dataSource = [];
    for (let index = 0; index < 10; index += 1) {
      dataSource.push(
        {
          month: `8-${3 + index}-2020`,
          city: 'KPI',
          temperature: (currentLine?.kpi ?? 0) - +Math.random().toFixed(2),
        },
        {
          month: `8-${3 + index}-2020`,
          city: 'Actual',
          temperature: (currentLine?.actual ?? 0) - +Math.random().toFixed(2),
        },
      );
    }
    return dataSource;
  };

  return (
    <PageHeaderWrapper>
      <Card>
        <Row gutter={[0, 16]}>
          <Col style={{ marginRight: 8 }}>
            {'Select Energy Type:   '}
            <Select
              value={energyType}
              onSelect={(value) => {
                setEnergyType(value);
                setSelectedLine('');
              }}
              style={{ width: 200, paddingLeft: 8 }}
            >
              <Select.Option value="water">Water</Select.Option>
              <Select.Option value="elec">Electric</Select.Option>
              <Select.Option value="steam">Steam</Select.Option>
              <Select.Option value="air">Air</Select.Option>
              <Select.Option value="co2">CO2</Select.Option>
            </Select>
          </Col>
          <Col>
            {'Select Chart Type:   '}
            <Select
              value={chartType}
              onSelect={(value) => {
                setChartType(value);
              }}
              style={{ width: 200, paddingLeft: 8 }}
            >
              <Select.Option value="1">Line Chart</Select.Option>
              <Select.Option value="3">Bar Chart</Select.Option>
            </Select>
          </Col>
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
                <Select
                  value={selectedLine}
                  onSelect={(value) => {
                    setSelectedLine(value);
                  }}
                  style={{ width: 200, paddingLeft: 8 }}
                >
                  {energyType === 'water' &&
                    waterLine.map((w) => <Select.Option value={w.key}>{w.value}</Select.Option>)}
                  {energyType === 'elec' &&
                    elecLine.map((w) => <Select.Option value={w.key}>{w.value}</Select.Option>)}
                  {energyType === 'steam' &&
                    steamLine.map((w) => <Select.Option value={w.key}>{w.value}</Select.Option>)}
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row align={'middle'}>
              <Col span={12}>
                {chartType === '1' && <LineChart data={getDS()} />}
                {chartType === '3' && <BarChart data={getDS()} />}
                {chartType === '4' && <LineChart data={getDS()} />}
              </Col>
              <Col span={12}>
                {!!selectedLine && (
                  <Row justify={'center'} align={'middle'}>
                    <Col span={12}>
                      <div style={{ width: '100%', textAlign: 'center' }}>
                        {' '}
                        {getLineName()?.value} KPI
                      </div>
                      <Pie
                        animate={false}
                        percent={100}
                        title={''}
                        total={`${getLineName()?.kpi} ${
                          energyType === 'water' ? 'L/L' : 'Kwh/8oz'
                        } `}
                        height={200}
                        lineWidth={2}
                      />
                    </Col>
                    <Col span={12}>
                      <div style={{ width: '100%', textAlign: 'center' }}>
                        {' '}
                        {getLineName()?.value} Actual
                      </div>
                      <Pie
                        animate={false}
                        percent={100}
                        title={''}
                        total={`${getLineName()?.actual} ${
                          energyType === 'water' ? 'L/L' : 'Kwh/8oz'
                        } `}
                        height={200}
                        lineWidth={2}
                        color={'#60d080'}
                      />
                    </Col>
                    <Col span={12}>
                      <div style={{ width: '100%', textAlign: 'center' }}> Saving</div>
                      <Pie
                        animate={false}
                        percent={100}
                        title={''}
                        total={`${getLineName()?.saving} %`}
                        height={200}
                        lineWidth={2}
                        color={'#60d080'}
                      />
                    </Col>
                  </Row>
                )}{' '}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>
  );
}

export default connect()(Analysis);
