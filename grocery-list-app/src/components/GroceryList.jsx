import React from 'react';
import AddItemModal from "./AddItemModal";

const GroceryList = () => {
  return (
    <>
      <div>Grocery List</div>
      <button>Add item</button>
      <AddItemModal />
    </>
  );
}

export default GroceryList;