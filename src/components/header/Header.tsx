import SearchIcon from '@material-ui/icons/Search'
import School from '@material-ui/icons/School'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import './Header.css'
import Search from '../common/Search'

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <School className="header__logoIcon" />
        <h4>Gandal Coding</h4>
      </div>

      <div className="header__search">
        <Search className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Abdoulaye</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingCart />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
