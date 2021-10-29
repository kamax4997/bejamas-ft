import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { setCart } from "../../redux/slices/dashboard";
import { RootState } from '../../redux/store';
import 'react-lazy-load-image-component/src/effects/blur.css';

type ProductCardProps = {
    product: any
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {

    const { product } = props;
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state.dashboard);

    const addCart = useCallback(() => {
        let temp: any[] = cart;
        if (temp && product) {
            const exist = temp.find((p: any) => p.id === product.id)
            if (!exist) {
                temp = Object.assign([], temp);
                temp.push(product);
            }
        }
        localStorage.setItem("cart", JSON.stringify(temp));
        dispatch(setCart(temp));
    }, [product, dispatch, cart])

    return (
        <div className="product-card">
            <div className="product-image">
                <div className="product-image-content">
                    <LazyLoadImage src={product.image.src} effect="blur" alt="product" />
                </div>
                {product.bestseller && <div className="best-seller-badge">Best Seller</div>}
                <button onClick={() => addCart()}
                    className="add-to-cart-btn" type="button">ADD TO CART</button>
            </div>
            <p className="product-category">{product.category}</p>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">${product.price}</p>
        </div>
    )
}

export default ProductCard