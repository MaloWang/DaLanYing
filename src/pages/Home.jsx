import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Card } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="search">
        <Input placeholder="Search service" prefix={<SearchOutlined />} />
      </div>

      <div className="cards">
        <Card className="large-card">
          <div className="card-grid">
            <div className="card-item" onClick={() => navigate('/detail/government')}>
              <div className="icon">💼</div>
              <div className="label">Government Services</div>
              <div className="sub">Citizen Service Isign Reglications</div>
            </div>
            <div className="card-item" onClick={() => navigate('/services')}>
              <div className="icon">📅</div>
              <div className="label">Citizen Services</div>
              <div className="sub">Servicion proloustices</div>
            </div>
            <div className="card-item small" onClick={() => navigate('/detail/business')}>Business Registration</div>
            <div className="card-item small" onClick={() => navigate('/detail/tax')}>Tax Payments</div>
            <div className="card-item small" onClick={() => navigate('/detail/license')}>License Applications</div>
            <div className="card-item small" onClick={() => navigate('/detail/records')}>Public Records</div>
          </div>
        </Card>
      </div>
    </>
  )
}
