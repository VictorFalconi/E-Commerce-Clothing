import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import paginated from "../Paginated/paginated";
import Slider from "../Slider/Slider";

const Home = () => {
    // const { clothes } = useSelector((state) => state);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [clothesPerPage] = useState(9);
    // var lastClothes = currentPage * clothesPerPage;
    // var firstClothes = lastClothes - clothesPerPage;
    // var currentClothes = clothes.slice(firstClothes, lastClothes);
    // const paginated = (pageNumber) => {
    //   setCurrentPage(pageNumber);
    // };
    // useEffect(() => {
    //     setCurrentPage(1);
    //     lastClothes = currentPage * clothesPerPage;
    //     firstClothes = lastClothes - clothesPerPage;
    //     currentClothes = clothes.slice(firstClothes, lastClothes);
    //   }, [clothes]);

    return(
        <div>
            <Slider></Slider>
            <Slider></Slider>
            <Slider></Slider>

              {/* <Paginado
            clothesPerPage={clothesPerPage}
            clothes1={clothes.length}
            paginated={paginated}
            page={currentPage}
          /> */}
        </div>
    )
}

export default Home