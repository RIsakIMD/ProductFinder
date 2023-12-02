
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const StoreDetails = () => {

    const [store, setStore] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/stores/" + id)
            .then(res => {setStore(res.data);})
            .catch(err => console.log(err));
    }, []);

    return (<div>
        <h2>{store.name}</h2>
        <h2>Store Number {store.number}</h2>
        <h2>{store.open? "Open" : "Closed"}</h2>
        <Link to={`/stores/edit/${store._id}`}>Edit Store Details</Link>
    </div>)
}
export default StoreDetails;
