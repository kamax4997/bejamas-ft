import React, { useMemo, useCallback } from 'react';
import { ShoppingCart, X } from 'react-feather'
import { Popper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { clearCart } from "../../redux/slices/dashboard";
import { RootState } from '../../redux/store';
import logo from '../../assets/images/icons/bejamas.png';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.dashboard);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const cartContentMemo = useMemo(() => (
    (cart.length > 0) ? <div>
      {
        cart.map((p: any) => (
          <div key={p.id} className="d-flex-center justify-between cart-product-item">
            <div>
              <h4 className="cart-product-title">{p.name}</h4>
              <p className="cart-product-price">$ {p.price}</p>
            </div>
            <div className="cart-product-img">
              <div className="cart-product-img-content">
                <LazyLoadImage src={p.image.src} effect="blur" alt="cart product" />
              </div>
            </div>
          </div>
        ))
      }
    </div> : <div className="cart-empty">
      Cart Empty
    </div>
  ), [cart])

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch])

  return (
    <div>
      <header className="header d-flex-center justify-between">
        <div className="header__menu d-flex-center">
          <LazyLoadImage className="header__logo" effect="blur" src={logo} alt="logo" />

        </div>
        <div className="header__action d-flex-center cart-btn">
          <ShoppingCart size={28} onClick={handleClick} />
          {cart.length > 0 && <div className="cart-count-num">{cart.length}</div>}
        </div>

      </header>

      <header className="mobile-header justify-between">
        <LazyLoadImage 
          className="mobile-header__logo img-logo" 
          effect="blur" 
          src={logo} 
          alt="logo" />
        <div className="cart-btn">
          <ShoppingCart size={28} onClick={handleClick} />
          {cart.length > 0 && <div className="cart-count-num">{cart.length}</div>}
        </div>

      </header>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
        <div className="cart-block">
          <div className="cart-close">
            <X onClick={() => setOpen(false)} />
          </div>
          <div className="cart-content">
            {cartContentMemo}
            <hr />
            <button onClick={() => handleClearCart()}
              type="button" className="cart-clear-btn">CLEAR</button>
          </div>
        </div>
      </Popper>
    </div>
  )
}


export default Header;
