import { List, Switch } from 'antd';
import React, { Component, Fragment } from 'react';
import { formatMessage } from 'umi';

type Unpacked<T> = T extends (infer U)[] ? U : T;

class NotificationView extends Component {
  getData = () => {
    const Action = <Switch checkedChildren="Open" unCheckedChildren="Close" defaultChecked />;
    return [
      {
        title: 'Account Password',
        description: 'Messages from other users will be notified in the form of a station letter',
        actions: [Action],
      },
      {
        title: 'System Messages',
        description: 'System messages will be notified in the form of a station letter',
        actions: [Action],
      },
      {
        title: 'To-do Notification',
        description: 'The to-do list will be notified in the form of a letter from the station',
        actions: [Action],
      },
    ];
  };

  render() {
    const data = this.getData();
    return (
      <Fragment>
        <List<Unpacked<typeof data>>
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default NotificationView;
