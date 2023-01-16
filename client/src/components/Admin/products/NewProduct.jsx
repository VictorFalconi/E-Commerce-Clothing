import Cloudinary from "../../../components/Cloudinary/Cloudinary";
import styles from "./NewProduct.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useForm } from "../../../hooks/useForm";

const initialForm = {
  name: "",
  description: "",
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
        <h2 className={styles.title}>NeW Product</h2>
        <form className={styles.forminput} onSubmit={handleSubmit}>
          <input
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
            type="text"
            name="description"
            placeholder="Description del producto"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.description}
            required
          />

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