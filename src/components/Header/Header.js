import React from 'react';
import './Header.css';
import Logo from './alogo.png';
// import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = ()=>{
    if(user){
      signOut(auth)
      .then(()=> console.log('Signed Out'))
      .catch((err)=> console.log(err.message))
    }
  }

  return (
      <div className='header'>
        <Link to='/'>
          <img src={Logo} alt="" className='header__logo' />
        </Link>

        {/* Project Console: https://console.firebase.google.com/project/react--clone-b2e1c/overview  
          Hosting URL: https://react--clone-b2e1c.web.app */}

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className='header__searchIcon' />
        </div>

        <div className="header__nav">
          <Link to={!user && '/login'}>
            <div onClick={handleAuth} className="header__option">
              <span className="header__optionLineOne">Hello {!user ? 'Guest': user.email}</span>
          
              <span className="header__optionLineTwo">{ user ? 'Sign Out': 'Sign In'}</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to='/checkout'>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>


      </div>
  )
}

export default Header