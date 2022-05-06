
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';


const UpdateItems = () => {
    const { id } = useParams();
    const [updateItem, setUpdateItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
    }, [])
        .then(res => res.json())
        .then(data => setUpdateItem(data))
    const navigate = useNavigate();
    const update = () => {
        navigate('/update')
    }
    return (
        <div>
            <h1>update your item:{updateItem.name}</h1>
            <Button onClick={update}>Proceed to Update</Button>

        </div>
    );
};

export default UpdateItems;