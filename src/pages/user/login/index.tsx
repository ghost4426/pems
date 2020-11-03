import { Alert, Checkbox, Col, Row } from 'antd';
import React, { useState } from 'react';
import { Dispatch, AnyAction, connect, history } from 'umi';
import { StateType } from './model';
import styles from './style.less';
import LoginFrom from './components/Login';

const { Tab, UserName, Password, Submit } = LoginFrom;
interface LoginProps {
  dispatch: Dispatch<AnyAction>;
  userAndlogin: StateType;
  submitting?: boolean;
}

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC<LoginProps> = (props) => {
  const { userAndlogin = {}, submitting } = props;
  const { status, type: loginType } = userAndlogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');

  const handleSubmit = () => {
    history.push('/');
  };
  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <div style={{ marginTop: 80 }}>
          <Row justify={'center'} gutter={[0, 16]}>
            <Col style={{ fontSize: 18, color: '#ffff', fontWeight: 500 }}>User Login Page</Col>
          </Row>
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="An error has occur" />
          )}

          <UserName
            name="userName"
            placeholder="Username: admin or user"
            rules={[
              {
                required: true,
                message: 'Username is required!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="Password: ant.design"
            rules={[
              {
                required: true,
                message: 'Password is required!',
              },
            ]}
          />
        </div>
        {/* <div>
          <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
            Remember Me
          </Checkbox>
        </div> */}
        <Submit loading={submitting}>Login</Submit>
      </LoginFrom>
    </div>
  );
};

export default connect(
  ({
    userAndlogin,
    loading,
  }: {
    userAndlogin: StateType;
    loading: {
      effects: {
        [key: string]: boolean;
      };
    };
  }) => ({
    userAndlogin,
    submitting: loading.effects['userAndlogin/login'],
  }),
)(Login);
