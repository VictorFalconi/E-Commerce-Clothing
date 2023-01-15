import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProductFromDataBase } from "../../redux/actions";


const ClothingEdit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const product = useSelector((state) => state.clothesDetail);
  console.log(product._id)

  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const data = {
    name: input.name ? input.name : product.name,
    description: input.description ? input.description : product.description
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProductFromDataBase(product._id, data))
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder={product.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="description"
          value={input.description}
          placeholder={product.description}
          onChange={handleChange}
        />
        <button>Actualizar Informacion</button>
      </form>
    </div>
  );
};

export default ClothingEdit;
