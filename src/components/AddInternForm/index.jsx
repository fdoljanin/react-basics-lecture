import { useState } from "react";
import "./style.css";

const initialState = {
  intern: {
    id: "",
    name: "",
    city: "",
  },
};

const AddInternForm = ({ addIntern }) => {
  const [intern, setIntern] = useState(initialState.intern);

  const inputHandler = (e) => {
    setIntern((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addIntern({ ...intern });
    setIntern(initialState.intern);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="id">Id interna:</label>
      <input
        placeholder="Id"
        name="id"
        value={intern.id}
        onChange={inputHandler}
      />
      <label htmlFor="name">Ime:</label>
      <input
        placeholder="Id"
        name="name"
        value={intern.name}
        onChange={inputHandler}
      />
      <label htmlFor="city">Grad:</label>
      <input
        placeholder="Id"
        name="city"
        value={intern.city}
        onChange={inputHandler}
      />
      <input type="submit" />
    </form>
  );
};

export default AddInternForm;
