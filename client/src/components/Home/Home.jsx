
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import { allClothes, categories } from "../../redux/actions";
import Filters from "../Filters/Filters";

const Home = () => {
   const dispatch = useDispatch()
  const allProduct = useSelector(state => state.allClothes)
  const allCategory = allProduct.map((p)=> p.category)
  const category = allCategory.filter((item,index)=>{
    return allCategory.indexOf(item) === index;
  })


  useEffect(() => {
    dispatch(allClothes())
  },[])

    return(
      
        <div>
          
          {category.map((categories, idx) => (
            <div key={idx}>
              {categories}
              <Slider allProduct={allProduct} category={categories} ></Slider>
            </div>
          ))}
        </div>
        
    );
}

export default Home
