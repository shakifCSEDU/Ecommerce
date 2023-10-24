import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>Shop@{currentYear}</div>
  )
}

export default Footer