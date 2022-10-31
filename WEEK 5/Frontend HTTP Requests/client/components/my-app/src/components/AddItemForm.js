import { useState } from 'react';

function AddItemForm({submit, btnText, item, description, pricePerUnit, _id}){
    const initInputs = {item: item || '', description: description || '', pricePerUnit: pricePerUnit || ''}
    const [inputs, setInputs] = useState(initInputs);

    const handleChange = (e) => {
        const {name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit( inputs, _id )
        setInputs(initInputs)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='item'
                value={inputs.item}
                onChange={handleChange}
                placeholder='Item'/>
            <input
                type='text'
                name='description'
                value={inputs.description}
                onChange={handleChange}
                placeholder='Description' />
            <input
                type='text'
                name='pricePerUnit'
                value={inputs.pricePerUnit}
                onChange={handleChange}
                placeholder='Price per unit'/>
            <button className='add-btn' >
                {btnText}
            </button>

        </form>
    )
}

export default AddItemForm;