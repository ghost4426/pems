import { FormattedMessage, formatMessage } from 'umi';
import { AlipayOutlined, DingdingOutlined, TaobaoOutlined } from '@ant-design/icons';
import { List } from 'antd';
import React, { Component, Fragment } from 'react';

class BindingView extends Component {
  getData = () => [
    {
      title: 'Binding Taobao',
      description: 'Currently unbound Taobao account',
      actions: [<a key="Bind">Bind</a>],
      avatar: <TaobaoOutlined className="taobao" />,
    },
    {
      title: 'Binding Alipay',
      description: 'Currently unbound Alipay account',
      actions: [<a key="Bind">Bind</a>],
      avatar: <AlipayOutlined className="alipay" />,
    },
    {
      title: 'Binding DingTalk',
      description: 'Currently unbound DingTalk account',
      actions: [<a key="Bind">Bind</a>],
      avatar: <DingdingOutlined className="dingding" />,
    },
  ];

  render() {
    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={(item) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta
                avatar={item.avatar}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default BindingView;
