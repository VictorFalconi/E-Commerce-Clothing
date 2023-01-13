
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import { allClothes, categories, filter, orderBy } from "../../redux/actions";
import Filters from "../Filters/Filters";
import ProductCards from "../ProductCards/ProductCards";

const Home = () => {
   const dispatch = useDispatch()
  const allProduct = useSelector(state => state.allClothes);
  const filteredProduct = useSelector(state => state.productsFiltered);
  const allCategory = allProduct.map((p)=> p.category);
  const azOrder = useSelector(state => state.azOrder);
  const catFilter = useSelector(state => state.catFilter);
  const sizeFilter = useSelector(state => state.sizeFilter);
  const allClothesState = useSelector(state => state.allClothes);
  const category = allCategory.filter((item,index)=>{
    return allCategory.indexOf(item) === index;
  });


  useEffect(() => {
    if(!allClothesState.length) dispatch(allClothes());
    dispatch(orderBy(azOrder));
    dispatch(filter(catFilter));
    dispatch(filter(sizeFilter));
  },[]);

    return(
      
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
          <ProductCards products={filteredProduct}/>
          {/* {category.map((categories, idx) => (
            <div key={idx}>
              {categories}
              <Slider allProduct={filteredProduct} category={categories}/>
            </div>
          ))} */}
        </div>
        
    );
}

export default Home
