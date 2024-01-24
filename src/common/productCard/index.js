import { Typography } from "@mui/material";
import React from "react";
import styles from "./productCard.module.css"

const ProductCard = (props)=>{
    const {productDetails}=props;
    const {preview,name,price}=productDetails;

    return(
        <div className={styles.productWrapper}>
            <img src={preview} alt={name} className={styles.productImg}/>
            <Typography variant="body1" className={styles.productTitle}>{name}</Typography>
            <Typography variant="body1" fontWeight={600} className={styles.productPrice}>Price {price}</Typography>
        </div>
    )
}

export default ProductCard