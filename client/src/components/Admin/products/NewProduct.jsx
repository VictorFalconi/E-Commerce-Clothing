import Cloudinary from "../../../components/Cloudinary/Cloudinary";
import styles from "./NewProduct.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { useForm } from "../../../hooks/useForm";


const initialForm = {
  name: "",
  description: "",
  category: "",
  model:"",
  season:"",
  brand: "",
  price: "",
  active: true,
  image: [],
  stock:{},
};




const NewProduct = () => {

const talles = ['S','M','L','8','9','10']
const stck = [1,2,3,4,5,6,7,8,9,10];
const [stock, setStock]=useState({})
const [talleSelected, setTalleSelected]=useState('')
const [cantidad, setCantidad]=useState('');

  const image = useSelector((state) => state.imageCloudinary);
  const { form, errors, loading, handleChange, handleBlur, handleSubmit, agregarAStock } = useForm(initialForm);
  useEffect(() => {
    form.image = image;
  }, [image]);

  const handleTalle=(e)=>{
    setTalleSelected(e.target.value)
}
const handleCantidad=(e)=>{
    setCantidad(parseInt(e.target.value))
}


  return (
    <div className={styles.containerform}>
      <div className={styles.form}>
        <h2 className={styles.title}>New Product</h2>
        <form className={styles.forminput} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            autoComplete="none"
            placeholder="Product name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Product description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.description}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.category}
            required
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.brand}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.price}
            min={0}
            required
          />
          <label>Enable/Disable</label>
          <select
           
            className={styles.status}
            name="active"
            placeholder="Enable/Disable"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.active}
            required
          >
            <option name="true" value="true">
              Enable
            </option>
            <option name="false" value="false">
              Disable
            </option>
          </select>  
          <div>
              <select name="sele" onChange={(e)=>handleTalle(e)}>
                <option>Seleccione talle</option>
                {talles.map(e => {
                  return (
                    <option name={e} key={e} value={e}>{e}</option>
                  )
                })}
              </select>
              <select name="cant" onChange={(c)=>handleCantidad(c)}>
                <option>Seleccione cantidad</option>
                {stck.map(c => {
                  return (
                    <option name={c} key={c} value={c}>{c}</option>
                  )
                })}
              </select>
              <button onClick={(e)=>agregarAStock(e,talleSelected, cantidad)}>Agregar</button>
          </div>     
          <button className={styles.button} disabled={loading}>
            {loading ? "Creando Producto Espere" : "Create"}
          </button>
        </form>
        <div className={styles.cloudinary}>
          <Cloudinary></Cloudinary>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;