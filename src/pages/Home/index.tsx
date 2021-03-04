/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect, history } from 'umi';
import { Card, Dropdown, Button, Menu, Row, Col } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=wt1`)}
      >
        RO-WWT1 System
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=wt2`)}
      >
        RO-WWT2 System
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=t`)}
      >
        Line T
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=u`)}
      >
        Line CAN CF-HF6000 (Line U)
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=w`)}
      >
        Line W
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=bib`)}
      >
        Line BIB
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=z`)}
      >
        Line Z
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=q`)}
      >
        Line Q
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/rgb-line?line=y`)}
      >
        Line Y
      </a>
    </Menu.Item>
  </Menu>
);

const electricityMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/electric-line`)}
      >
        Utility 1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/line/electric-line`)}
      >
        Utility 2
      </a>
    </Menu.Item>
  </Menu>
);

class Home extends Component {
  reqRef: number = 0;

  timeoutId: number = 0;

  render() {
    return (
      <GridContent>
        <React.Fragment>
          <div
            style={{
              backgroundImage: `url('${'/wall-paper-2.jpg'}')`,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              height: '90vh',
            }}
          >
            <Row style={{ width: '100%', paddingTop: 128 }} justify={'center'} align={'middle'}>
              <Col>
                <Card bodyStyle={{ backgroundColor: '#054467' }}>
                  <Dropdown overlay={menu}>
                    <Button size={'large'} onClick={() => history.push(`/`)}>
                      <i className="fas fa-tint" style={{ paddingRight: 8 }} /> Water
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={electricityMenu}>
                    <Button size={'large'}>
                      <i className="fas fa-bolt" style={{ paddingRight: 8 }} /> Electricity
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button size={'large'}>
                      <i className="fas fa-wind" style={{ paddingRight: 8 }} /> Air
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button size={'large'}>
                      <i className="fas fa-fire" style={{ paddingRight: 8 }} />
                      Steam
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button size={'large'}>
                      <i className="fas fa-spinner" style={{ paddingRight: 8 }} />
                      CO2
                    </Button>
                  </Dropdown>
                </Card>
              </Col>
            </Row>
          </div>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect()(Home);
