/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect,history } from 'umi';
import { Card, Dropdown, Button, Menu, Row, Col } from 'antd';


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>   history.push(`/line/rgb-line`)}>
                Main water map
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>   history.push(`/line/rgb-line`)}>
                Pre-treatment Water
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>   history.push(`/line/rgb-line`)}>
                RO Room
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>   history.push(`/line/rgb-line`)}>
                Line CAN
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>   history.push(`/line/rgb-line`)}>
                Line Aqua
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>   history.push(`/line/rgb-line`)}>
               Line PET
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={() =>   history.push(`/line/rgb-line`)}>
            Line RGB
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
                    <div style={{backgroundImage: `url('${'/wall-paper.jpg'}')`, width: '100%', backgroundSize: 'cover', height: '90vh' }}>
                    <Row style={{width: '100%',paddingTop: 128}} justify={'center'} align={'middle'}>
                        <Col>
                            <Card bodyStyle={{backgroundColor: '#054467'}}>
                                <Dropdown overlay={menu}  >
                                    <Button size={'large'} ><i className="fas fa-bolt" style={{paddingRight: 8}} />  Electricity</Button>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <Button  size={'large'} onClick={() =>  history.push(`/`)} ><i className="fas fa-tint" style={{paddingRight: 8}} /> Water</Button>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <Button  size={'large'}><i className="fas fa-wind" style={{paddingRight: 8}} /> Air</Button>
                                </Dropdown>
                                <Dropdown overlay={menu} >
                                    <Button  size={'large'}><i className="fas fa-fire" style={{paddingRight: 8}} />Stream</Button>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <Button  size={'large'}><i className="fas fa-spinner" style={{paddingRight: 8}} />CO2</Button>
                                </Dropdown> 
                            </Card>
                        </Col>
                    </Row>
                    </div>
                </React.Fragment>
            </GridContent >
        );
    }
}

export default connect(

)(Home);
