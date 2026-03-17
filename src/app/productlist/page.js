import Button from "./button-component";
import outside from '../styles/outside.module.css';
import custom from '@/custom-style/custom.module.css';
import { Poppins } from "next/font/google";
import Script from "next/script";
const fonts= Poppins({
    weight:"500",style:"normal",subsets:['latin']
})
const products=async()=>{
    let callProduct= await fetch("https://dummyjson.com/products");
    let result = await callProduct.json()
    return result;
}

export default async function ProductList(){
    let actualProduct= await products();
    // console.log(actualProduct)
    return (
        <div>
            <Script src="./custom.js" />
            <h3 className={outside.main}>Product List</h3>
            {actualProduct.products.length>0 && actualProduct.products.map((item,i)=>(
                <div key={i}>
                    <p className={custom.main}>Product Name: {item.title}</p>
                    <p className={fonts.className}>Product Desc: {item.description}</p>
                    <p>Product Stock: {item.stock}</p>
                    <p>Product SKU: {item.sku}</p>
                    <Button price={item.price}/>
                    <br/>
                </div>
                
                
            ))}
        </div>
    )
}

export function generateMetadata(props){
    return {
        title:"Product list page",
        description:"this is product pages"
    }
}