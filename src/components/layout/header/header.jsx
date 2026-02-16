import React from 'react'
import './Header.css'

const Header = () => (
  <div className='header'>
    <a href='/' target='_self' rel='noopener' className='header__menu-button'>
      natescorp.github.io &gt; bash-gen
    </a>
    <a href='/' target='_self' rel='noopener' className='header__title'>
      Home
    </a>
    <a href='/bash-gen' target='_self' rel='noopener' className='header__link'>
      Bash Gen
    </a>
    <a href='/slk-r170' target='_self' rel='noopener' className='header__link'>
      SLK R170
    </a>
  </div>
)

export default Header
