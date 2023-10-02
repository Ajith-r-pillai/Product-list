import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories({data}) {
  return (
    <>
    <Link style={{textDecoration:'none'}} to={'/view/'+data.cid}>
      <div className="categories-main">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://i.postimg.cc/44BsPfd2/Solar-pc-3000x1200-CB577106624.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{data.cname}</h5>
            <p></p>
            <div className="category-btn" >
            <Link to={'/addproduct/'+data.cid}><button className="btn-classifi">Add Products</button></Link>
       <Link to={'/addsubcategory/'+data.cid}> <button className="btn-classifi">Add Subcategories</button></Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

export default Categories;
