/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect, history } from 'umi';
import { Card, Dropdown, Button, Menu, Row, Col } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        RO-WWT1 System
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        RO-WWT2 System
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        Line T
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        Line CAN CF-HF6000 (Line U)
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        Line W
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        Line BIB
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        Line Z
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
        Line Q
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={() => history.push(`/dashboard`)}>
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
        onClick={() => history.push(`/dashboard?energy=elec`)}
      >
        Utility 1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=elec`)}
      >
        Utility 2
      </a>
    </Menu.Item>
  </Menu>
);

const steamMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        RO-WWT1 System
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        RO-WWT2 System
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        Line T
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        Line CAN CF-HF6000 (Line U)
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        Line W
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        Line BIB
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        Line Z
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        Line Q
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => history.push(`/dashboard?energy=steam`)}
      >
        Line Y
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
                  <Dropdown overlay={steamMenu}>
                    <Button size={'large'}>
                      <i className="fas fa-heat" style={{ paddingRight: 8 }} />
                      Steam
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu}>
                    <Button size={'large'}>
                      <i className="fas fa-wind" style={{ paddingRight: 8 }} /> Air
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
