import ProductCard, {ProductButtons, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            products.map(product=> (
              <ProductCard 
                key={product.id} 
                product={product} 
                className="text-white bg-dark"
                onChange={(e)=>onProductCountChange(e)}
                value={shoppingCart[product.id]?.count || 0}
              >
                <ProductImage className="custom-image" style={{
                  boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
                }}/>
                <ProductTitle className="text-bold"/>
                <ProductButtons className="custom-buttons"/>
              </ProductCard>
            ))
          }
        </div>

        <div className="shopping-cart">
          {
            //Object.entries(shoppingCart).map(([key, product])=>())
            shoppingCart && Object.values(shoppingCart).map(product=> (
              <ProductCard 
                key={product.id}
                product={product} 
                className="text-white bg-dark"
                style={{width: '100px'}}
                onChange={onProductCountChange}
                value = {product.count}
              >
              <ProductImage className="custom-image" style={{
                boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
              }}/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
            ))
          }
        </div>
    </div>
  )
}
