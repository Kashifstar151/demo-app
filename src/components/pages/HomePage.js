import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Table from '../Table';

export default function HomePage(props) {
    // const { params } = props
    const [data, setData] = useState(null)
    const location = useLocation();
    const token = location.state || null;
    // console.log("🚀 ~ file: HomePage.js:6 ~ HomePage ~ params:", token)
    useEffect(() => {
        getUserData()
    }, [])

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Country',
                accessor: 'country',
            },
        ],
        []
    );

    const data1 = useMemo(
        () => [
            {
                name: 'John Doe',
                age: 30,
                country: 'USA',
            },
            {
                name: 'Jane Smith',
                age: 25,
                country: 'Canada',
            },
            {
                name: 'Bob Johnson',
                age: 40,
                country: 'UK',
            },
        ],
        []
    );
    const getUserData = () => {
        const url = `http://13.49.75.92:8080/user`
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        };
        console.log("🚀 ~ file: HomePage.js:16 ~ getUserData ~ headers:", config)
        axios.get(url, config).then((res) => {
            setData(res.data)
            // console.log("🚀 ~ file: HomePage.js:17 ~ axios.get ~ res:", res)

        }).catch((err) => {
            // console.log("🚀 ~ file: HomePage.js:20 ~ axios.get ~ err:", err)

        })
    }
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app </h1>
            <Table columns={columns} data={data1} />
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
