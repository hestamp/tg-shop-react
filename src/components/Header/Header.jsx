import React from 'react'

import './Header.css'
import { useTelegram } from '../../hooks/useTelegram'
import { Link } from 'react-router-dom'
const Header = () => {
  const { user, onClose } = useTelegram()

  return (
    <div className={'header'}>
      <>
        <Link className="link" to={'/form'}>
          Main
        </Link>
        <Link className="link" to={'/'}>
          Form
        </Link>
      </>
      <span className={'username'}>{user?.username}</span>
    </div>
  )
}

export default Header
