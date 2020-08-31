import { ArrowDownOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

import React from 'react';
import { ChartCard } from './Charts';
import { VisitDataType } from '../data.d';
// import Yuan from '../utils/Yuan';
// import preTreatment from '';


const topColResponsiveProps = {
  xs: 12,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 4,
  style: { marginBottom: 24 },
};

const IntroduceRow = ({ loading }: { loading: boolean; visitData: VisitDataType[] }) => (
  <Row gutter={8}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='Pre-Treatment'
        avatar={<img alt='' src='/line-area/pre-treatment.jpeg' />}
        loading={loading}
        total={() => <> <ArrowDownOutlined style={{ color: 'green' }} /> 5.9%</>}
        contentHeight={46}
      >

        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Actual</Col>
              <Col>95 L</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Expect</Col>
              <Col>23,33 L</Col>
            </Row>
          </Col>

        </Row>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='RO Room'
        avatar={<img alt='' src='/line-area/RO-Room.jpg' />}
        loading={loading}
        total={() => <> <ArrowDownOutlined style={{ color: 'green' }} /> 4.1%</>}
        contentHeight={46}
      >

        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Actual</Col>
              <Col>85 L</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Expect</Col>
              <Col>431 L</Col>
            </Row>
          </Col>

        </Row>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='RGB Line'
        avatar={<img alt='' src='/line-area/RGB-Line.jpg' />}
        loading={loading}
        total={() => <> <ArrowDownOutlined style={{ color: 'green' }} /> 3.1%</>}
        contentHeight={46}
      >

        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Actual</Col>
              <Col>622 L</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Expect</Col>
              <Col>9,065 L</Col>
            </Row>
          </Col>

        </Row>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>

      <ChartCard
        bordered={false}
        title='Can Line'
        avatar={<img alt='' src='/line-area/can-line.jpg' />}
        loading={loading}
        total={() => <> <ArrowDownOutlined style={{ color: 'green' }} /> 3.6%</>}
        contentHeight={46}
      >

        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Actual</Col>
              <Col>1,838 L</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Expect</Col>
              <Col>11,187 L</Col>
            </Row>
          </Col>

        </Row>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>

      <ChartCard
        bordered={false}
        title='PET Line'
        avatar={<img alt='' src='/line-area/pet-line.jpg' />}
        loading={loading}
        total={() => <> <ArrowDownOutlined style={{ color: 'green' }} /> 7.3%</>}
        contentHeight={46}
      >

        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Actual</Col>
              <Col>7.11 L</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Expect</Col>
              <Col>31 L</Col>
            </Row>
          </Col>

        </Row>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>

      <ChartCard
        bordered={false}
        title='AQUA Line'
        avatar={<img alt='' src='/line-area/Aqua-line.jpg' />}
        loading={loading}
        total={() => <> <ArrowDownOutlined style={{ color: 'green' }} /> 6.9%</>}
        contentHeight={46}
      >

        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Actual</Col>
              <Col>8,085 L</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify="space-between">
              <Col>Expect</Col>
              <Col>34,968 L</Col>
            </Row>
          </Col>

        </Row>
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
