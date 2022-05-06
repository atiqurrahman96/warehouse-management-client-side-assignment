import React from 'react';
import { useForm } from "react-hook-form";


const AddNewItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto'>
            <h1>Welcome and add a new product</h1>
            <form>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ border: '1px solid black' }} className='mb-2' placeholder='name' {...register("firstName", { required: true, maxLength: 20 })} />
                    <textarea style={{ border: '1px solid black' }} className='mb-2' placeholder='description' {...register("description")} />
                    <input style={{ border: '1px solid black' }} className='mb-2' placeholder='photo Url' {...register("photo")} />

                    <input className='bg-primary w-25 mx-auto p-2 rounded' type="submit" value="submit" />
                </form>
            </form>


        </div>
    );
};

export default AddNewItems;