import React, { Component } from 'react';
import { List } from 'antd';

type Unpacked<T> = T extends (infer U)[] ? U : T;
const passwordStrength = {
  strong: <span className="strong">Strong</span>,
  medium: <span className="medium">Medium</span>,
  weak: <span className="weak">Weak Weak</span>,
};

class SecurityView extends Component {
  getData = () => [
    {
      title: 'Account Password',
      description: (
        <>
          Current password strength:
          {passwordStrength.strong}
        </>
      ),
      actions: [<a key="Modify">Modify</a>],
    },
    {
      title: 'Security Phone',
      description: `${'Bound phone：'}：138****8293`,
      actions: [<a key="Modify">Modify</a>],
    },
    {
      title: 'Security Question',
      description:
        'The security question is not set, and the security policy can effectively protect the account security',
      actions: [<a key="Set">Set</a>],
    },
    {
      title: 'Backup Email',
      description: `${'Bound Email：'}：ant***sign.com`,
      actions: [<a key="Modify">Modify</a>],
    },
    {
      title: 'MFA Device',
      description: 'Unbound MFA device, after binding, can be confirmed twice',
      actions: [<a key="bind">Bind</a>],
    },
  ];

  render() {
    const data = this.getData();
    return (
      <>
        <List<Unpacked<typeof data>>
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default SecurityView;
