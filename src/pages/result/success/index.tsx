import { DingdingOutlined } from '@ant-design/icons';
import { Button, Card, Steps, Result, Descriptions } from 'antd';
import { FormattedMessage, formatMessage } from 'umi';
import React, { Fragment } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import styles from './index.less';

const { Step } = Steps;
const desc1 = (
  <div className={styles.title}>
    <div
      style={{
        margin: '8px 0 4px',
      }}
    >
      Qu Lili
      <DingdingOutlined
        style={{
          marginLeft: 8,
          color: '#00A0E9',
        }}
      />
    </div>
    <div>2016-12-12 12:32</div>
  </div>
);
const desc2 = (
  <div
    style={{
      fontSize: 12,
    }}
    className={styles.title}
  >
    <div
      style={{
        margin: '8px 0 4px',
      }}
    >
      Zhou Maomao
      <a href="">
        <DingdingOutlined
          style={{
            color: '#00A0E9',
            marginLeft: 8,
          }}
        />
        Urge
      </a>
    </div>
  </div>
);
const content = (
  <>
    <Descriptions title="Project Name">
      <Descriptions.Item label="Project ID">23421</Descriptions.Item>
      <Descriptions.Item label="Principal">Qu Lili</Descriptions.Item>
      <Descriptions.Item label="Effective time">2016-12-12 ~ 2017-12-12</Descriptions.Item>
    </Descriptions>
    <br />
    <Steps progressDot current={1}>
      <Step
        title={
          <span
            style={{
              fontSize: 14,
            }}
          >
            Create project
          </span>
        }
        description={desc1}
      />
      <Step
        title={
          <span
            style={{
              fontSize: 14,
            }}
          >
            Departmental preliminary review
          </span>
        }
        description={desc2}
      />
      <Step
        title={
          <span
            style={{
              fontSize: 14,
            }}
          >
            Financial review
          </span>
        }
      />
      <Step
        title={
          <span
            style={{
              fontSize: 14,
            }}
          >
            Finish
          </span>
        }
      />
    </Steps>
  </>
);
const extra = (
  <Fragment>
    <Button type="primary">Back List</Button>
    <Button>View Project</Button>
    <Button>Print</Button>
  </Fragment>
);
export default () => (
  <GridContent>
    <Card bordered={false}>
      <Result
        status="success"
        title="Submission Success"
        subTitle="The submission results page is used to feed back the results of a series of operational tasks. If it is a simple operation, use the Message global prompt feedback. This text area can show a simple supplementary explanation. If there is a similar requirement for displaying “documents”, the following gray area can present more complicated content."
        extra={extra}
        style={{
          marginBottom: 16,
        }}
      >
        {content}
      </Result>
    </Card>
  </GridContent>
);
