import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Users() 
{   
    const [current_page, setCurrentPage] = useState(1)

    const [users, setUsers] = useState({
        last_page: 1,
        data: []
    });

    useEffect(() => {
        (async () => {
            const response = await fetch(`./api/users?page=${current_page}`);
            const json     = await response.json();

            setUsers({
                last_page: json.last_page,
                data: json.data
            })
        })();
    }, [current_page]);

    const { data, last_page } = users;

    const rows = data.map((user, index) => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.number}</td>
            <td>{user.name}</td>
            <td>{user.country_code}{user.phone}</td>
            <td>
                <Link className="btn btn-sm btn-primary" to={`/react/public/users/${user.id}`}>View</Link>
            </td>
        </tr>
    ));

    const page_items = [];

    const pageLinkClicked = (e, i) => {
        e.preventDefault();

        setCurrentPage(i);
    }

    for (let i = 1; i <= last_page; i++)
    {
        page_items.push(
            <li className={`page-item ${current_page == i ? 'active' : ''}`} key={i}>
                <a href={`?page=${i}`} className="page-link" onClick={e => pageLinkClicked(e, i) }>{i}</a>
            </li>
        )
    }

    return (
        <>
            <div className="card">
                <div className="card-header border-0 d-flex align-items-center">
                    <div className="fs-5 fw-semibold">Users</div>
                </div>

                <div className="card-body">
                    <table className="table table-borderless table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows}
                        </tbody>
                    </table>

                    <ul className="pagination">
                        {page_items}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Users;