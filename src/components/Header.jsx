import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    </header>
  )
}

export default Header
