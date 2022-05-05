
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';


const UpdateItems = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const update = () => {
        navigate('/update')
    }
    return (
        <div>
            <h1>update your item:{id}</h1>
            <Button onClick={update}>Proceed to Update</Button>

        </div>
    );
};

export default UpdateItems;