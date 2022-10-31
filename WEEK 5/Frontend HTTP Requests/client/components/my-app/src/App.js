import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Recyclables from './components/Recyclables';
import AddItemForm from './components/AddItemForm';

function App() {
  const [recycle, setRecycle] = useState([]);

  const getItems = () => {
    axios.get('/recycledItems')
  .then(res => setRecycle(res.data))
  .catch(err => console.log(err))
  }

  const addItem = (newitem) => {
    axios.post('/recycledItems', newitem)
      .then(res => {
        setRecycle(prevItems => [...prevItems, res.data])
      })
      .catch(err => console.log(err))
  };

  const deleteItem = (itemId) => {
    axios.delete(`/recycledItems/${itemId}`)
    .then(res => {
      setRecycle(prevItems => prevItems.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    axios.put(`/recycledItems/${itemId}`, updates)
    .then(res => {
      setRecycle(prevItems => [...prevItems].map(item => {
        return(item._id === itemId ? res.data : item)}))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems();
  }, []);

  const recycleList = recycle.map(items => 
    <Recyclables 
    {...items} 
    deleteItem={deleteItem} 
    editItem={editItem}
    // addItem={addItem} 
    key={Recyclables.id}/>)

  return (
    <div className="App">
      <AddItemForm 
      submit={addItem}  
      btnText='Add Item' />
      {recycleList}
    </div>
  );
}

export default App;
