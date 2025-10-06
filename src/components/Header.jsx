import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="с-container">
        <nav>
          <a href="/" className="logo">
            <img 
            src="/img/hero/logo.png"
            srcSet='/img/hero/logo@2x.png 2x'
             alt="Body Shape" />
          </a>
          <ul>
            <li><a href="#trainers">Инструкторы</a></li>
            <li><a href="#sections">Секции</a></li>
            <li><a href="#news">Новости</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header