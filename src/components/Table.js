import React, { useState, useEffect } from 'react';
import './styles.css'; // Assuming you have a styles.css file

const PAGE_SIZE = 5;

export default function Table() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        console.log('coming 1')
        fetch('https://fakestoreapi.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUsers(data);
                setFilteredUsers(data);
            })
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        console.log('coming 2')    
        const filtered = users.filter((user) => 
            user.name.firstname.toLowerCase().includes(filter.toLowerCase()) ||
            user.name.lastname.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredUsers(filtered);
        setCurrentPage(1); // Reset to the first page when filtering
    }, [filter, users]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const getPageData = () => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        return filteredUsers.slice(startIndex, endIndex);
    };

    const renderPagination = () => {
        const pageCount = Math.ceil(filteredUsers.length / PAGE_SIZE);
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={handleFilterChange}
            />
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">First Name</th>
                        <th className="th">Last Name</th>
                        <th className="th">Email</th>
                        <th className="th">Phone</th>
                        <th className="th">Address</th>
                        <th className="th">City</th>
                    </tr>
                </thead>
                <tbody>
                    {getPageData().map((user) => (
                        <tr className="tr" key={user.id}>
                            <td className="td">{user.name.firstname}</td>
                            <td className="td">{user.name.lastname}</td>
                            <td className="td">{user.email}</td>
                            <td className="td">{user.phone}</td>
                            <td className="td">{`${user.address.number}, ${user.address.street} ${user.address.zipcode}`}</td>
                            <td className="td">{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {renderPagination()}
            </div>
        </div>
    );
}
