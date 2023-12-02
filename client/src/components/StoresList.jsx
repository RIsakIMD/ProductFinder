
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Index = () => {

    const [stores, setStores] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/stores")
            .then((res) => {setStores(res.data);})
            .catch((err) => {console.log(err);})
    }, [])

    const deleteStore = (id) => {
        axios.delete('http://localhost:8000/api/stores/' + id)
            .then(res => {console.log(res);})
            .catch(err => console.log(err));

            setStores(stores.filter(store => store._id != id));
    }

    return (<div>
        <h2>Find stores in your area!</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Store</th>
                    <th scope="col">Store Number</th>
                    <th scope="col">Open</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    stores.sort((a, b) => {return a.number- b.number})
                    .map((store, index) => {
                        return <tr key={index}>
                            <td><Link to={`/stores/${store._id}`}>{store.name}</Link></td>
                            <td>{store.number}</td>
                            <td>{store.open.toString()}</td>
                            <td>
                                {store.open ? <button onClick={(e) => deleteStore(store._id)}>Remove</button> : null}
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <Link to={`/stores/new/`}>Can't find your store?</Link>
    </div>)
}
export default Index;
