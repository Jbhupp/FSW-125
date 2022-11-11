import { useState } from 'react';
import AddItemForm from "./AddItemForm";

function Recyclables({item, description, pricePerUnit, _id, deleteItem, editItem}){
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="items">
            { !editToggle ?
            <>
                <h1>Item: {item} </h1>
                <p>Description: {description} </p>
                <p>Price per unti: {pricePerUnit} </p>
                <button 
                    onClick={() => deleteItem(_id)} 
                    className='del-btn'>
                    Delete
                </button>
                <button 
                    onClick={() => setEditToggle(prevToggle => !prevToggle)} 
                    className='edit-btn'>
                    Edit
                </button>
            </>
                :
            <>
                < AddItemForm 
                    item={item}
                    description={description}
                    pricePerUnit={pricePerUnit}
                    btnText='Submit Edit'
                    _id={_id}
                    submit={editItem} />
                    <button className='close-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
            </>
                
            }
            
        </div>
    )
}
export default Recyclables;