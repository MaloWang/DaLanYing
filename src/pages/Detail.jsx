import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { id } = useParams()
  return (
    <div className="page-placeholder">
      <h2>Detail: {id}</h2>
      <p>这里是 {id} 的占位页面，用于后续功能开发。</p>
    </div>
  )
}
