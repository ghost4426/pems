import { ArrowDownOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

import React from 'react';
import { ChartCard } from './Charts';
import { VisitDataType } from '../data';
import { history } from 'umi';
// import Yuan from '../utils/Yuan';
// import preTreatment from '';

const topColResponsiveProps = {
  xs: 12,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 6,
  xxl: 4,
  style: { marginBottom: 24 },
};

const dataSource1 = [
  {
    title: 'RO WT1',
    imgSrc: '/line-area/RO-Room.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'RO WT2',
    imgSrc: '/line-area/RO-Room.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Line T (AQUA 600 Sidel)',
    imgSrc: '/line-area/Aqua-line.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Line U (CAN 600 Sidel)',
    imgSrc: '/line-area/can-line.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Line W (PET 600-KSH)',
    imgSrc: '/line-area/pet-line.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Line X (PET-CSD 800 Krones)',
    imgSrc: '/line-area/pet-line.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Line Y (PET-HF600-Krones)',
    imgSrc: '/line-area/pet-line.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Linez (RGB 600 Linker)',
    imgSrc: '/line-area/RGB-Line.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Line Q (AQUA 800 Krones)',
    imgSrc: '/line-area/Aqua-line.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
  {
    title: 'Line BIB',
    imgSrc: '/line-area/RO-Room.jpg',
    total: '5.9',
    actual: 95,
    expect: 23.3,
  },
];

const WaterLineRow = ({ loading }: { loading: boolean; visitData: VisitDataType[] }) => (
  <Row gutter={16}>
    {dataSource1.map((ds) => (
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title={ds.title}
          avatar={<img alt="" src={ds.imgSrc} />}
          loading={loading}
          total={() => (
            <>
              {' '}
              <ArrowDownOutlined style={{ color: 'green' }} /> {ds.total}%
            </>
          )}
          contentHeight={46}
          onClick={() => history.push(`/line/rgb-line`)}
        >
          <Row>
            <Col span={24}>
              <Row justify="space-between">
                <Col>Actual</Col>
                <Col>{ds.actual} L</Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="space-between">
                <Col>Expect</Col>
                <Col>{ds.expect} L</Col>
              </Row>
            </Col>
          </Row>
        </ChartCard>
      </Col>
    ))}
  </Row>
);

export default WaterLineRow;
