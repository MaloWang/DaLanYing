import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { HomeOutlined, AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import 'antd/dist/reset.css'
import '../styles/app.less'

const { Header, Content, Footer } = Layout

export default function MainLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeKey = () => {
    const path = location.pathname
    if (path.startsWith('/services')) return 'services'
    if (path.startsWith('/profile')) return 'profile'
    if (path.startsWith('/help')) return 'help'
    return 'home'
  }

  return (
    <Layout className="h5-wrap">
      <Header className="h5-header">
        <div className="title">大蓝营</div>
      </Header>

      <Content className="h5-content">
        <Outlet />
      </Content>

      <Footer className="h5-footer">
        <Menu mode="horizontal" selectable={false} className="footer-menu" selectedKeys={[activeKey()]}
          onClick={({ key }) => {
            if (key === 'home') navigate('/')
            else navigate(`/${key}`)
          }}>
          <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="services" icon={<AppstoreOutlined />}>Services</Menu.Item>
          <Menu.Item key="profile" icon={<UserOutlined />}>Profile</Menu.Item>
          <Menu.Item key="help" icon={<SettingOutlined />}>Help</Menu.Item>
        </Menu>
      </Footer>
    </Layout>
  )
}
