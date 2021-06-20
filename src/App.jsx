import React from 'react'
import ProductCard from './components/ProductCard/ProductCard';
import ProductFilters from './components/ProductFilters/ProductFilters';
import Header from './components/Header/Header';
import "./App.css";
function App() {
    const productList = [
        {
            id:1,
            srcImg:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg",
            title:"cami maxi dress in polka dot",
            price:"$29.9"
       },
       {
            id:2,
            srcImg:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress2.jpg",
            title:"Midi sundress with ruched front",
            price:"$18.9"
       },
       {
            id:3,
            srcImg:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress3.jpg",
            title:"Midi dress in pink ditsy floral",
            price:"$14.9"
       },
       {
            id:4,
            srcImg:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress4.jpg",
            title:"cami maxi dress in polka dot",
            price:"$25.9"
       },
       {
            id:5,
            srcImg:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
            title:"Frill mini dress in yellow polka dot",
            price:"$10.9"
       },
       {
            id:6,
            srcImg:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress6.jpg",
            title:"Midi tea dress in blue and red spot",
            price:"$49.9"
       }
    ]
    return (
        <div>
           <Header />
            <main>
                       
            <div className={"left-shop"}>
                 <section className={"section-filterCard"}>
                      <ProductFilters/>
                </section>
                 <section className={"section-products"}>
                    <div className={"product-row1"}>
                            {
                                productList.map((product) =>(
                                    <div key={product.id} className={"product-item"}>
                                        <ProductCard 
                                            srcImg={product.srcImg}
                                            title={product.title}
                                            price={product.price}
                                        />
                                    </div>
                                ))
                            }
                    </div>
                 </section>
                 </div>
                {/* <div className="right-shop">
                    <section>
                        <p>You have 1 in the Cart</p>
                    </section>
                </div> */}
            </main>
        </div>
    )
}

export default App
