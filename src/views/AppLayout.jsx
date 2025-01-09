import { Layout, Menu, theme, Button } from 'antd'
import { BlockOutlined, PoundOutlined, SendOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Jazzicon from "react-jazzicon";

import RouterView from '../router';
import { useContext, useEffect, useState } from 'react';
import { routes } from '../router/routes';
import { VotingContext } from '../context/Voter'
// import avatar3 from '../assets/images/avatar3.png'
import utils from '../assets/utils';


function LayoutApp() {
  // const { location } = window;
  const location = useLocation()
  const [current, setCurrent] = useState('')
  const { Header, Content, Footer } = Layout
  const menuList = [
    {
      label: (<Link to={{ pathname: '/staking' }}>Staking</Link>),
      key: 'staking',
      icon: <BlockOutlined />
    }, {
      label: (<Link to={{ pathname: '/discretestaking' }}>DiscreteStaking</Link>),
      key: 'discretestaking',
      icon: <PoundOutlined />
    },
    {
      label: (<Link to={{ pathname: '/voting' }}>Voting</Link>),
      key: 'voting',
      icon: <SendOutlined />,
      children: [
        {
          label: <Link to={{ pathname: '/voting/register' }}>Register</Link>,
          key: 'register',
          icon: <SendOutlined />,
        },
        {
          label: <Link to={{ pathname: '/voting/voters' }}>VoterList</Link>,
          key: 'voters',
          icon: <SendOutlined />,
        },
      ],
    }
  ]
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //contract handle
  const { connectWallet, currentAccount, checkIfWalletIsConnected } = useContext(VotingContext)
  let [walletConnected, setWalletConnected] = useState(false)

  //路有变化，重新渲染选中的页面菜单
  useEffect(() => {
    let routeMatch = routes.some((item) => {
      return item.path === location.pathname;
    })
    let pathname = location.pathname.replace('/', '')
    if (routeMatch && current !== pathname) {
      setCurrent(pathname)
    }
  }, [location])//eslint-disable-line

  //页面加载完毕，检查是否已连接钱包
  useEffect(() => {
    (async () => {
      let isConnected = await checkIfWalletIsConnected();
      setWalletConnected(isConnected)
    })()
  }, [])//eslint-disable-line

  const onClick = (e) => {
    console.log(e)
    setCurrent(e.key);
  };

  const handleConnect = async () => {
    await connectWallet()
    let isConnected = await checkIfWalletIsConnected();
    setWalletConnected(isConnected)
  }

  return (
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
        {walletConnected ?
          <div className="connected-wallet">
            <Jazzicon
              diameter={20}
              seed={parseInt(currentAccount.slice(2, 10), 16)}
            />
            {/* <img src={true ? avatar3 : ''} alt="" className='connected-wallet-img' /> */}
            <span className='connected-wallet-content'>{utils.textEllipsisMiddle(currentAccount)}</span>
          </div> :
          <Button onClick={handleConnect} >Connect</Button>
        }

      </Header>
      <Content
        style={{
          background: '#eee',
        }}
      >
        <div
          style={{
            display: "flex",
            background: colorBgContainer,
            height: 530,
            padding: 24,
            minWidth: 1200
            // borderRadius: borderRadiusLG,
          }}
        >
          <RouterView />
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
  );
}

export default LayoutApp;
