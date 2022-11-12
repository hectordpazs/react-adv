import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface ImageProps{
    img?: string;
    className?: string;
    style?: React.CSSProperties
}

export const ProductImage = ({img, className, style}:ImageProps)=>{

    const {product} = useContext(ProductContext)

    let imgToShow: string;

    if(img){
        imgToShow = img
    }else if(product.img){
        imgToShow = product.img
    }else{
        imgToShow = noImage
    }

    return(
        <img 
            className={`${styles.productImg} ${className}`} 
            style={style}
            src={imgToShow}   
            alt="Coffee Mug" 
        />
    )
}