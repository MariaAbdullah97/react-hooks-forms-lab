import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [chooseCat,setChooseCat]=useState('Produce');
  const[item,setItem]=useState("");


  function handlechooseCatogory(event){
    setChooseCat(event.target.value);
  }

  function handleItems(event){
    setItem(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name:item,
      category:chooseCat,
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItems} value={item} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handlechooseCatogory} value={chooseCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
