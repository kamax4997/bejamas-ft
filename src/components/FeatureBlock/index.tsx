import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { setCart } from "../../redux/slices/dashboard";
import { RootState } from '../../redux/store';
import 'react-lazy-load-image-component/src/effects/blur.css';


type FeatureBlockProps = {
    product: any
}

const FeatureBlock: React.FC<FeatureBlockProps> = (props: FeatureBlockProps) => {

    const { product } = props;
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state.dashboard);

    const recommenImages = useMemo(() => (
        product.details.recommendations.map((recommend: any) => (
            <div key={recommend.src} className="rocommend-img">
                <div className="rocommend-img-content">
                    <LazyLoadImage src={recommend.src} effect="blur" alt="recommend product" />
                </div>
            </div>
        ))
    ), [product])

    const addCart = useCallback(() => {
        let temp : any[] = cart;
        if (temp && product) {
            const exist = temp.find((p: any) => p.id === product.id )
            if (!exist) {
                temp = Object.assign([], temp);
                temp.push(product);
            }
        }
        localStorage.setItem("cart", JSON.stringify(temp));
        dispatch(setCart(temp));
    }, [product, dispatch, cart])

    return (
        <div className="feature-block">
            <div className="d-flex-center justify-between">
                <h3 className="feature-block-title">{product.name}</h3>
                <button type="button" onClick={() => addCart()}
                    className="feature-add-card-btn">ADD TO CART</button>
            </div>
            <div className="feature-product-img" >
                <div className="feature-prodcut-img-content">
                    <LazyLoadImage src={product.image.src} effect="blur" alt="feature" />
                </div>
                <div className="feature-product-img-title">
                    Photo of the day
                </div>
            </div>
            <button type="button" onClick={() => addCart()}
                className="mobile-add-cart-btn feature-add-card-btn">
                ADD TO CART
            </button>

            <Grid container>
                <Grid item md={8} xs={12} className="feature-product-content">
                    <h4 className="feature-product-title">About the {product.name}</h4>
                    <h4 className="feature-product-category">{product.category}</h4>
                    <p className="feature-product-description">{product.details.description}</p>
                </Grid>
                <Grid item md={4} xs={12} className="feature-product-details">
                    <div>
                        <h4 className="feature-product-title">People also buy</h4>
                        <div className="d-flex-center feature-product-detail-imgs">
                            {recommenImages}
                        </div>
                        <div className="feature-product-details-text">
                            <h4 className="feature-product-details-title">Details</h4>
                            <p className="feature-product-details-size">
                                <b>Dimmentions: </b>
                                {
                                    `${product.details.dimmentions.width} 
                                     * 
                                    ${product.details.dimmentions.height} pixel`
                                }

                            </p>
                            <p className="feature-product-details-size">
                                <b>Size: </b>{product.details.size} mb
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )

}

export default FeatureBlock
