/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';

class Blank extends Component {
  reqRef: number = 0;

  timeoutId: number = 0;

  render() {
    return (
      <GridContent>
        <React.Fragment></React.Fragment>
      </GridContent>
    );
  }
}

export default connect()(Blank);
