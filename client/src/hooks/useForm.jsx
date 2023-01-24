import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/actions";
import { useNavigate } from "react-router";

export const useForm = (initialForm) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    // setErrors(validateForm(form));
  };

  const agregarAStock = (e,t,c) =>{
    e.preventDefault()
    setForm({
      ...form,
      stock: Object.defineProperty(form.stock,t,{value: c, enumerable: true, writable: true})
    })
}

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(createProduct(form))
    setForm(initialForm)
    navigate('/')
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    agregarAStock,
  };
};
