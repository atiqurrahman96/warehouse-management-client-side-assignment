import './UpdateItems.css'
import { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const UpdateItems = () => {
    const { id } = useParams();
    const [updateItem, setUpdateItem] = useState({});

    useEffect(() => {
        fetch(`https://hidden-fortress-61093.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setUpdateItem(data))
    }, [])


    return (
        <div className='mx-auto w-50'>
            <Card className='card-container'>
                <Card.Img variant="top" className='w-50 mx-auto' src={updateItem.image} />
                <Card.Body>
                    <Card.Title>Product Name:{updateItem.name}</Card.Title>
                    <Card.Text> Description:
                        {updateItem.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Supplier:{updateItem.supplier}</ListGroupItem>
                    <ListGroupItem>Price:{updateItem.price}</ListGroupItem>
                    <ListGroupItem>Quantity:{updateItem.quantity}</ListGroupItem>
                </ListGroup>

            </Card>
            <Button className='mt-2 mb-2'>Delivery</Button>

        </div>
    );
};

export default UpdateItems;