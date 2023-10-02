import React, { useEffect, useState } from 'react'
import './Subcategories.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
function Subcategories({data,fction1}) {
  const [refreshCount, setRefreshCount] = useState(0);
const Navigate=useNavigate()


  return (
 <Link onClick={fction1.onClick} style={{textDecoration:'none'}} to={'/view/'+data.sid}>

      <div className=''style={{marginTop:"2rem"}} >
      <div class="card" style={{width: "18rem",display:'flex'}}>
      <img src="https://i.postimg.cc/pVwwzvm4/PFF-Unrec-3000-CB577063325.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">{data.sname}</h5>
      <p> </p>
      <div className="category-btn" >
            <Link to={'/addproduct/'+data.sid}><button className="btn-classifi">Add Products</button></Link>
       <Link to={'/addsubcategory/'+data.sid}> <button className="btn-classifi">Add Subcategories</button></Link>
   
            </div>
      </div>
    </div></div>
 </Link>
  )
}

export default Subcategories