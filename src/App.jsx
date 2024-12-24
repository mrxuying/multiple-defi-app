import { Layout, Menu, theme, Button, Result } from 'antd'
import { BlockOutlined, PoundOutlined, SendOutlined } from '@ant-design/icons';
import { HashRouter, Link } from 'react-router-dom'
import { KeepAliveProvider } from 'keepalive-react-component';

import RouterView from './router';
import ErrorBoundary from './components/ErrorBoundary';
import { useState } from 'react';


function App() {
  const [current, setCurrent] = useState('staking')
  const { Header, Content, Footer } = Layout
  const menuList = [
    { label: (<Link to={{ pathname: '/staking' }}>Staking</Link>), key: 'staking', icon: <BlockOutlined /> },
    { label: (<Link to={{ pathname: '/discretestaking' }}>DiscreteStaking</Link>), key: 'discretestaking', icon: <PoundOutlined /> },
    { label: (<Link to={{ pathname: '/voting' }}>Voting</Link>), key: 'voting', icon: <SendOutlined /> },
  ]

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <HashRouter>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="ux-logo" >Mutiple Defi UX</div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={menuList}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
          <Button>Connect</Button>
        </Header>
        <Content
          style={{
            background: '#eee',
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              minHeight: 530,
              padding: 24,
              // borderRadius: borderRadiusLG,
            }}
          >
            <ErrorBoundary fallback={<Result
              status="500"
              title="500"
              subTitle="Sorry, something went wrong."
              extra={<Button type="primary">Back Home</Button>}
            />}>

              <KeepAliveProvider>
                <RouterView />
              </KeepAliveProvider>

            </ErrorBoundary>

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Mutiple Defi UX Design ©{new Date().getFullYear()} Created by Ethan
        </Footer>
      </Layout>
    </HashRouter >
  );
}

export default App;
