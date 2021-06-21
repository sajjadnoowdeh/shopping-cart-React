import {useState,useEffect} from 'react';
import "./App.css";
import React from 'react'
import ProductCard from './components/ProductCard/ProductCard';
import ProductFilters from './components/ProductFilters/ProductFilters';
import Header from './components/Header/Header';
import {productList} from './data/data';

function App() {
     const [filters,setFilters]  = useState({price:null,size:null})
     const [filteredProductList,setFilteredProductList] = useState(productList);
     useEffect(()=>{
        if (filters.size) {
            setFilteredProductList(productList.filter((item)=>item.size === filters.size))
        }else{
         
            setFilteredProductList(productList)
        }
     },[filters.size])
     useEffect(()=>{
        if (filters.price === "-1") {
            setFilteredProductList(filteredProductList.sort((a,b)=> b.price - a.price))
        }else if(filters.price === "1"){
         
            setFilteredProductList(filteredProductList.sort((a,b)=> a.price - b.price))
        }else{
            setFilteredProductList(filteredProductList.sort((a,b)=> a.id - b.id))
        }
     },[filters.price])
    return (
        <div>
           <Header />
            <main>
                       
            <div className={"left-shop"}>
                 <section className={"section-filterCard"}>
                      <ProductFilters filters={filters} setFilters={setFilters} resultCount={filteredProductList.length}/>
                </section>
                 <section className={"section-products"}>
                    <div className={"product-row1"}>
                            {
                                filteredProductList.map((product) =>(
                                    <div key={product.id} className={"product-item"}>
                                        <ProductCard 
                                            srcImg={product.srcImg}
                                            title={product.title}
                                            price={product.price}
                                            onClick={()=> {}}
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
