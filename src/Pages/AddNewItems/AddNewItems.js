import React from 'react';
import { useForm } from "react-hook-form";
const AddNewItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        const url = `http://localhost:5000/products`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Welcome and add a new product</h1>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input style={{ border: "1px solid black" }} className='mb-2' placeholder='Product Name' {...register("firstName", { required: true, maxLength: 20 })} />

                <textarea style={{ border: "1px solid black" }} className='mb-2' placeholder='Description'  {...register("description")} />
                <input style={{ border: "1px solid black" }} className='mb-2' type="text" placeholder='photoURL'  {...register("image")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='bg-primary w-50 mx-auto p-2 rounded text-white' type="submit" value="Add new Product" />
            </form>
        </div>
    );
};

export default AddNewItems;