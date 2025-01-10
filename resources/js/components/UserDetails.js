import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UsersDetails() 
{   
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`../api/users/${id}`);
            const json     = await response.json();

            setUser(json)
        })();
    }, []);
 
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='fs-5 fw-semibold'>User</div>
            </div>

            <div className='card-body'>
                {user.name}
            </div>
        </div>
    )
}

export default UsersDetails;