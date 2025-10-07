import { navLinks } from "../../../constants"

const Header = () => {
  return (
    <header>
      <div className="container mx-auto max-w-6xl sm:px-4 px-2">
        <nav>
          <a href="/" className="logo">
            <img
              src="/img/hero/logo.png"
              srcSet='/img/hero/logo@2x.png 2x'
              alt="Body Shape" />
          </a>
          <ul>
            {navLinks.map(({ id, title }) => (<li key={id}><a href={`#${id}`}>{title}</a></li>))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header