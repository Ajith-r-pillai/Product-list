import React from 'react'
import './ProductCard.css'

function ProductCard({data}) {

  return (
    <div style={{marginBottom:'4rem',marginTop:'2rem'}}>  
  
  <div style={{width:'20rem',height:'6rem'}} class="row g-0">
    <div style={{width:'10rem',height:'6rem'}} class="col-md-4">
      <img style={{width:'100%',height:'100%'}}src="https://i.postimg.cc/44BsPfd2/Solar-pc-3000x1200-CB577106624.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div style={{width:'10rem',height:'6rem'}}  class="col-md-8">
      <div style={{display:'flex',flexDirection:'column',alignItems:''}} class="card-body">
        <h5 class="card-title">{data.pname}</h5>
        <p class="card-text">{data.pprice}₹</p>
       
      </div>
    </div>
  </div>
</div>
 
  )
}

export default ProductCard