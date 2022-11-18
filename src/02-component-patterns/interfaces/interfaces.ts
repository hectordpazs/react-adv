import { ButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { ImageProps } from "../components/ProductImage";
import { TitleProperties } from "../components/ProductTitle";

export interface Product{
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    (Props: ProductCardProps) : JSX.Element,
    Title: (Props:TitleProperties) => JSX.Element,
    Image: (Props:ImageProps) => JSX.Element,
    Buttons: (Props:ButtonsProps) => JSX.Element,
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number
}