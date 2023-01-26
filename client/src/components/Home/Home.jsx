import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import {
  allClothes,
  categories,
  filter,
  orderBy,
  allUsers,
  filterFav,
  getRate,
} from "../../redux/actions";
// import Filters from "../Filters/Filters";
import ProductCards from "../ProductCards/ProductCards";
import styles from "./Home.module.css";
import Footer from "../Footer/Footer";
import Dropdown from "../Dropdown/Dropdown";
import nike from "../../icons/Nike-Logo.png";
import adidas from "../../icons/Adidas-Logo.png";
import gucci from "../../icons/gucci-logo.png";
import allBrands from "../../icons/all-brands.png";
import HomeFeedback from "../Admin/Feedback/HomeFeedback";
import SliderFeedBack from "../SliderFeedback/SliderFeedBack";
import IconsMove from "../Iconsmove/IconsMove";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffashionista.com%2F.image%2Ft_share%2FMTQwNTQyNzk1MDcxODkwNjY0%2Fsqgettyimages-469721122jpg.jpg&f=1&nofb=1&ipt=edbfb7e2ea12c375ceb258bec1653bd775d520eac004b0060318ca33d1eb39de&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F3840%2F1*iRVEpsN6_VvA-waRTiYvlQ.jpeg&f=1&nofb=1&ipt=9e2d1c3d59c4f231c0448ece30bfc6d621ab1faaf1aa960b9f22915953035c54&ipo=images",
  "https://en.unesco.org/sites/default/files/styles/img_688x358/public/courier/photos/cou_01_22_idea_ethical_fashion_web_0.jpg?itok=4KhTCGs5",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F521a8bb9e4b09bd519e05275%2F522cd3c0e4b0c7d816d59f0b%2F522cd3c0e4b0c7d816d59f19%2F1378669707689%2F%3Fformat%3D1000w&f=1&nofb=1&ipt=1260c5a6f364c912e210eaa7bea63fa5a975f53c3189e817e5c17e5de2e32a59&ipo=images",
];

const images2 = [
  "https://www.theitalianreve.com/wp-content/uploads/2021/10/image-15.png",
  "https://ychef.files.bbci.co.uk/624x351/p0bydktf.jpg",
  "https://www.theitalianreve.com/wp-content/uploads/2021/10/1-VblHKxm0TzNDPpOscKlRjg.jpeg",
];

const images3 = [
  "https://video-images.vice.com/test-uploads/articles/5ea0270ebbfcd300973b75eb/lede/1587554228383-download.jpeg?crop=1xw%3A0.8997xh%3B0xw%2C0.0053xh&resize=650%3A*&output-quality=50",
  "https://www.harpersbazaararabia.com/cloud/2021/09/08/DarinHacem-min.png",
  "https://pub.mdpi-res.com/sustainability/sustainability-06-06236/article_deploy/html/images/sustainability-06-06236-g001-1024.png?1424778743",
];

const Home = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.allClothes);
  const rate = useSelector((state) => state.rate_us);
  const filteredProduct = useSelector((state) => state.productsFiltered);
  const allCategory = allProduct.map((p) => p.category);
  const azOrder = useSelector((state) => state.azOrder);
  const catFilter = useSelector((state) => state.catFilter);
  const sizeFilter = useSelector((state) => state.sizeFilter);
  const brandFilter = useSelector((state) => state.brandFilter);
  const favFilter = useSelector((state) => state.favFilter);
  const allClothesState = useSelector((state) => state.allClothes);
  const category = allCategory.filter((item, index) => {
    return allCategory.indexOf(item) === index;
  });

  useEffect(() => {
    dispatch(allClothes());
    dispatch(getRate());
    dispatch(orderBy(azOrder));
    dispatch(filter(catFilter));
    dispatch(filter(sizeFilter));
    dispatch(filter(brandFilter));
    dispatch(filterFav(favFilter));
    dispatch(allUsers());
  }, []);

  useEffect(() => {
    dispatch(orderBy(azOrder));
    dispatch(filter(catFilter));
    dispatch(filter(sizeFilter));
    dispatch(filter(brandFilter));
    dispatch(filterFav(favFilter));
  }, [azOrder, catFilter, sizeFilter, brandFilter, favFilter.value]);

  return (
    <div
      className={styles.home}
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <div className={styles.containerSlider}>
        <Slider images={images}></Slider>
        <Slider images={images2}></Slider>
        <Slider images={images3}></Slider>
      </div>
      <div style={{ width: "100%", margin: "20px 0" }}>
        <div className="flex flex-wrap justify-center gap-3">
          <img
            src={allBrands}
            alt="all brands"
            style={{ maxWidth: "300px", maxHeight: "100px", cursor: "pointer" }}
            onClick={(_) => {
              dispatch({ type: "brandFilter", payload: "" });
            }}
          />
          <img
            src={nike}
            alt="nike"
            style={{ maxWidth: "300px", maxHeight: "100px", cursor: "pointer" }}
            onClick={(_) => {
              dispatch({ type: "brandFilter", payload: "Nike" });
            }}
          />
          <img
            src={adidas}
            alt="adidas"
            style={{ maxWidth: "300px", maxHeight: "100px", cursor: "pointer" }}
            onClick={(_) => {
              dispatch({ type: "brandFilter", payload: "Adidas" });
            }}
          />
          <img
            src={gucci}
            alt="gucci"
            style={{ maxWidth: "300px", maxHeight: "100px", cursor: "pointer" }}
            onClick={(_) => {
              dispatch({ type: "brandFilter", payload: "Gucci" });
            }}
          />
        </div>
      </div>
      <ProductCards products={filteredProduct} />
      <div className={styles.containerFeedBack}>
        <div>
          <p className={styles.mensajeFeedBack}>
            Some comments from our thousands of satisfied customers
          </p>
          <SliderFeedBack images={rate}></SliderFeedBack>
        </div>
        <div>
          <IconsMove></IconsMove>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
