
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import { allClothes, categories } from "../../redux/actions";
import Filters from "../Filters/Filters";

const Home = () => {
  const dispatch = useDispatch()
  const allProduct = useSelector(state => state.allClothes)
  const category = useSelector(state => state.category)

  useEffect(() => {
    // dispatch(allClothes())
    // dispatch(categories())
  },[])

    return(
      
        <div>
          
          {category.map(categories => (
            <div key={categories._id}>
              {categories.name}
              <Slider allProduct={allProduct} category={categories.name} ></Slider>
            </div>
          ))}
        </div>
        
    );
}

export default Home