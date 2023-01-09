import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import { allClothes, categories } from "../../redux/actions";

const Home = () => {
  // const dispatch = useDispatch()
  const allProduct = useSelector(state => state.allClothes)
  const category = useSelector(state => state.category)
  // console.log(allProduct, 'allProduct')

  useEffect(() => {
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
