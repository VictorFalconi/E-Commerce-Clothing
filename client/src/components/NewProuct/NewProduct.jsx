import { useForm } from "../../hooks/useForm";
import Cloudinary from "../Cloudinary/Cloudinary";
import styles from "./NewProduct.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
  return (
    <div>
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
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
      <Cloudinary></Cloudinary>
    </div>
  );
};

export default NewProduct;
