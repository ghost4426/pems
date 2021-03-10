/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import { history } from 'umi';

export default function SteamLine(props: any) {
  const [currentTab, setCurrentTab] = useState('sa');

  return (
    // <PageHeaderWrapper
    //   breadcrumb={{
    //     routes: [
    //       { breadcrumbName: 'Home', path: '' },
    //       { breadcrumbName: 'Electric Line', path: '/line/water' },
    //     ],
    //   }}
    //   title={'Electric Line'}
    // >
    <Row gutter={[16, 8]}>
      <Col span={24}>
        <Tabs
          activeKey={currentTab}
          type="card"
          centered
          onTabClick={(k) => {
            if (k === '1') history.push('/dashboard?energy=steam');
            if (k === '5') history.push('/analysis?line=steam');
            setCurrentTab(k);
          }}
        >
          <Tabs.TabPane tab="MainPage" key="1"></Tabs.TabPane>
          <Tabs.TabPane tab="System Architecture" key="sa"></Tabs.TabPane>
          <Tabs.TabPane tab="Analysis" key="5"></Tabs.TabPane>
        </Tabs>
      </Col>
      {currentTab === 'sa' && (
        <Col span={24}>
          <img style={{ width: '100%' }} src="/line-steam/steam_architecture.png" alt="" />
        </Col>
      )}
    </Row>
    // </PageHeaderWrapper>
  );
}
