import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Card } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const ITEMS = [
  { id: 'government', title: 'Government Services', sub: 'Citizen Service Isign Reglications', icon: '💼', path: '/detail/government' },
  { id: 'citizen', title: 'Citizen Services', sub: 'Servicion proloustices', icon: '📅', path: '/services' },
  { id: 'business', title: 'Business Registration', sub: '', icon: '📝', path: '/detail/business' },
  { id: 'tax', title: 'Tax Payments', sub: '', icon: '💰', path: '/detail/tax' },
  { id: 'license', title: 'License Applications', sub: '', icon: '📄', path: '/detail/license' },
  { id: 'records', title: 'Public Records', sub: '', icon: '📚', path: '/detail/records' }
]

function highlightText(text = '', query = '') {
  if (!query) return text
  const lower = text.toLowerCase()
  const q = query.toLowerCase()
  const idx = lower.indexOf(q)
  if (idx === -1) return text
  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + q.length)
  const after = text.slice(idx + q.length)
  return (
    <>
      {before}
      <span className="highlight">{match}</span>
      {after}
    </>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ITEMS
    return ITEMS.filter(item => item.title.toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <div className="search">
        <Input
          placeholder="Search service"
          prefix={<SearchOutlined />}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onPressEnter={() => {
            if (filtered.length > 0) navigate(filtered[0].path)
          }}
          allowClear
        />
      </div>

      <div className="cards">
        <Card className="large-card">
          <div className="card-grid">
            {filtered.length === 0 && (
              <div className="card-empty">未找到匹配项</div>
            )}

            {filtered.map(item => (
              <div
                key={item.id}
                className={`card-item ${item.sub ? '' : 'small'}`}
                onClick={() => navigate(item.path)}
              >
                <div className="icon">{item.icon}</div>
                <div className="label">{highlightText(item.title, query)}</div>
                {item.sub && <div className="sub">{highlightText(item.sub, query)}</div>}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
}

