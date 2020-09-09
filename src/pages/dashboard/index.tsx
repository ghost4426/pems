/* eslint-disable react/jsx-curly-brace-presence */
import { Col, Row, Radio, Card, Typography } from 'antd';
import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import moment from 'moment';
import { connect, Dispatch } from 'umi';

import PageLoading from './components/PageLoading';
import { getTimeDistance } from './utils/utils';
import { AnalysisData } from './data.d';
import styles from './style.less';
import { Pie } from './components/Charts';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

interface AnalysisProps {
  dashboardAndanalysis: AnalysisData;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface AnalysisState {
  salesType: 'all' | 'online' | 'stores';
  currentTabKey: string;
  rangePickerValue: RangePickerValue;
}

class Analysis extends Component<AnalysisProps, AnalysisState> {
  state: AnalysisState = {
    rangePickerValue: getTimeDistance('year'),
  };

  reqRef: number = 0;

  timeoutId: number = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'dashboardAndanalysis/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndanalysis/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = () => {};

  handleTabChange = () => {};

  handleRangePickerChange = (rangePickerValue: RangePickerValue) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });

    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  selectDate = (type: 'today' | 'week' | 'month' | 'year') => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });

    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  isActive = (type: 'today' | 'week' | 'month' | 'year') => {
    const { rangePickerValue } = this.state;
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as moment.Moment, 'day') &&
      rangePickerValue[1].isSame(value[1] as moment.Moment, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  render() {
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
                onChange={() => null}
                defaultValue="d"
              >
                <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="a">
                  <i className="fas fa-bolt" />
                </Radio.Button>
                <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="b">
                  <i className="fas fa-fire" />
                </Radio.Button>
                <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="c">
                  <i className="fas fa-wind" />
                </Radio.Button>
                <Radio.Button style={{ width: '25%', textAlign: 'center' }} value="d">
                  <i className="fas fa-faucet" />
                </Radio.Button>
              </Radio.Group>
            </Col>
          </Row>

          <Suspense fallback={<PageLoading />}>
            <IntroduceRow  visitData={[]} loading={false} />
          </Suspense>
          <Suspense fallback={null}>
            <Row justify={'end'} gutter={[16,0]}>
              <Col span={12}>
                <Card bodyStyle={{ padding: 0 }}>
                  <Col span={24}>
                    <Row>
                      <Col span={12}>
                        <Row align={'middle'} justify={'center'} style={{ padding: 20 }}>
                          <Col span={24} style={{ textAlign: 'center' }}>
                            <Typography.Title level={4}>Pepsico Quang Nam Plant:</Typography.Title>
                          </Col>
                          <Col span={24} style={{ textAlign: 'center' }}>
                            Water KPI
                          </Col>
                          <Col span={24} style={{ textAlign: 'center' }}>
                            {' '}
                            <Pie
                              animate={false}
                              percent={100}
                              title={''}
                              total="2.2 L/L"
                              height={128}
                              lineWidth={2}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col span={12}>
                        <img
                          alt=""
                          style={{ width: '100%', height: '100%' }}
                          src={'/pepsico-quang-nam.jpg'}
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
}

export default connect()(Analysis);
