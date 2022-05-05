
import { useParams } from 'react-router-dom';


const UpdateItems = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>update your item:{id}</h1>


        </div>
    );
};

export default UpdateItems;