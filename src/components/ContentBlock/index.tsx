import React, { useMemo } from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from "../ProductCard"

type contentBlockProps = {
    products: any[]
}

const ContentBlock: React.FC<contentBlockProps> = (props: contentBlockProps) => {

    const { products } = props;

    const productListMemo = useMemo(() => (
        products && products.map((product: any) => (
            <Grid key={product.id} item lg={4} md={6} sm={6} xs={12}>
                <ProductCard
                    product={product} />
            </Grid>
        ))
    ), [products])

    return (
        <div>
            <Grid container>
                {productListMemo}
            </Grid>
        </div>
    )
}

export default ContentBlock;
