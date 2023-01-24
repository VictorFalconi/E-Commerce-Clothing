import Cloudinary from "../../../components/Cloudinary/Cloudinary";
import styles from "./NewProduct.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "../../../hooks/useForm";

const initialForm = {
  name: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  active: true,
  image: [],
};

const NewProduct = () => {
  const image = useSelector((state) => state.imageCloudinary);
  const { form, errors, loading, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm);
  useEffect(() => {
    form.image = image;
  }, [image]);

  console.log(form, "formulario");

  return (
    <div className={styles.containerform}>
      <div className={styles.form}>
        <h2 className={styles.title}>New Product</h2>
        <form className={styles.forminput} onSubmit={handleSubmit}>
          <input
            className={`${styles.input} ${styles.inputname}`}
            type="text"
            name="name"
            autoComplete="none"
            placeholder="Nombre del Producto"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
            required
          />
          <input
            className={`${styles.input} ${styles.inputdescription}`}
            type="text"
            name="description"
            placeholder="Description del producto"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.description}
            required
          />
          <input
            className={styles.input}
            type="text"
            name="category"
            placeholder="Categoria"
            onChange={handleChange}
            onblur={handleBlur}
            value={form.category}
            required
          />
          <input
            className={styles.input}
            type="text"
            name="brand"
            placeholder="Brand"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.brand}
            required
          />

          <input
            className={styles.input}
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.price}
            required
          />

          <select 
            className={styles.status}
            name="active"
            placeholder="Enable/Disable"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.brand}
            required
          >
            <option>
              {String(form.active)}
            </option>
            <option name="true" value="true">
              Enable
            </option>
            <option name="false" value="false">
              Disable
            </option>
          </select>

          <button className={styles.button} disabled={loading}>
            {loading ? "Creando Producto Espere" : "Crear Producto"}
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