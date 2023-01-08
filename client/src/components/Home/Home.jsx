import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import { allClothes, categories } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  const allProduct = useSelector(state => state.allCloshes)
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
    )
}

export default Home