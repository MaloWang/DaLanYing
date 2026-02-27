import React from 'react'
import { SearchOutlined, HomeOutlined, AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { Input, Card, Layout, Menu } from 'antd'
import 'antd/dist/reset.css'
import './styles/app.less'

const { Header, Content, Footer } = Layout

export default function App() {
  return (
    <Layout className="h5-wrap">
      <Header className="h5-header">
        <div className="title">H5 Homepage<br/>Sisign Protfrole</div>
      </Header>
      <Content className="h5-content">
        <div className="search">
          <Input placeholder="Search service" prefix={<SearchOutlined />} />
        </div>

        <div className="cards">
          <Card className="large-card">
            <div className="card-grid">
              <div className="card-item">
                <div className="icon">💼</div>
                <div className="label">Government Services</div>
                <div className="sub">Citizen Service Isign Reglications</div>
              </div>
              <div className="card-item">
                <div className="icon">📅</div>
                <div className="label">Citizen Services</div>
                <div className="sub">Servicion proloustices</div>
              </div>
              <div className="card-item small">Business Registration</div>
              <div className="card-item small">Tax Payments</div>
              <div className="card-item small">License Applications</div>
              <div className="card-item small">Public Records</div>
            </div>
          </Card>
        </div>
      </Content>

      <Footer className="h5-footer">
        <Menu mode="horizontal" selectable={false} className="footer-menu">
          <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="services" icon={<AppstoreOutlined />}>Services</Menu.Item>
          <Menu.Item key="profile" icon={<UserOutlined />}>Profile</Menu.Item>
          <Menu.Item key="help" icon={<SettingOutlined />}>Help</Menu.Item>
        </Menu>
      </Footer>
    </Layout>
  )
}
