import React, { useEffect, useState } from "react";
import "./Productview.css";
import Header from "./Header";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Subcategories from "./Subcategories";
import axios from "axios";
import { useParams } from "react-router-dom";

function Productview() {
  const [allSubcategory,setAllSubcategory]=useState([]);
  const [allProducts,setAllProducts]=useState([]);
  const [allcategory, setAllcategory] = useState([]);
const Params=useParams()

 
 
 const fetchData = async () => {
  const result = await axios.get("http://localhost:8000/getaCategory/"+Params.id);
  setAllcategory(result.data.category);

};
console.log(allcategory);

const fetchsubcategory=async()=> {
    const result = await axios.get("http://localhost:8000/getallSubCategory/"+Params.id);
    setAllSubcategory(result.data.subcategory);
 
}
const fetchAllproducts=async()=> {
  const result = await axios.get("http://localhost:8000/getallProducts/"+Params.id);
  setAllProducts(result.data.products);

}
  console.log(allProducts);

  
  useEffect(()=>{
    fetchData()
    fetchsubcategory()
    fetchAllproducts()
   
  },[])
 
  
    
  return (
    <div className="productview-main">
      <Header />
      <div>
   
        <h2>Category({allProducts.length})</h2>
    
      </div>
      <div>
      {
allcategory.map((item, index)=>( 
        <Categories data={item}/>
        ))}
      </div>
      <div>
        <h2>Subcategories</h2>
      </div>
      <div className='pcard'>
{
allSubcategory.map((item, index)=>( 
<Subcategories fction1={fetchsubcategory} data={item}/>
))}
</div>
      <div>
        <h2>Products</h2>
      </div>
      <div className='pcard'>
{
allProducts.map((item, index)=>(  
<ProductCard data={item}/>
))}
</div>
    </div>
  );
}

export default Productview;
