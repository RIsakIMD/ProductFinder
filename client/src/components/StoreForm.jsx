
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import styles from "../styles/storeform.module.css"

const StoreForm = () => {

    const [storeValues, setStoreValues] = useState({});
    const [errors, setErrors] = useState({});

    const {id} = useParams();

    useEffect(() => {
        if (id)
        {
            axios.get("http://localhost:8000/api/stores/" + id)
            .then(res => {setStoreValues(res.data);})
            .catch(err => console.log(err));
        }
    }, []);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let storeData = {};

        try {
            storeData = {
                name: e.target['name'].value,
                number: e.target['number'].value,
                open: e.target['open'].checked,
            }

            console.log("Parsed store object:");
            console.log(storeData);
        }
        catch (error) {
            console.log(error);
            return;
        }

        if (id)
        {
            console.log(`Updating Store ${id}`);
            axios.patch('http://localhost:8000/api/stores/' + id, storeData)
                .then(res => {
                    if (res.data.errors)
                    {
                        console.log("Patch returned errors:");
                        console.log(res.data.errors);
                        setErrors(res.data.errors);
                    }
                    else
                    {
                        console.log("Patch successful:");
                        console.log(res);
                        navigate("/stores/" + id);
                    }
                })
                .catch(err => console.log(err))
        }
        else
        {
            console.log(`Creating New Store`);

            axios.post('http://localhost:8000/api/stores/new/', storeData)
            .then(res => {
                if (res.data.errors)
                {
                    console.log("Post returned errors:");
                    console.log(res.data.errors);
                    setErrors(res.data.errors);
                }
                else
                {
                    console.log("Post successful:");
                    console.log(res);
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
        }
    }

    return (<div>
        <h2>{id? "Edit this store!" : "Add a new store!"}</h2>
        <form onSubmit={onSubmitHandler} noValidate>
            <div>
                <div className="form-group">
                    <label>Store Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={storeValues.name} />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <div className="form-group">
                    <label>Store Number</label>
                    <input type="text" className="form-control" id="number" defaultValue={storeValues.number} />
                    {errors.number ? <p>{errors.number.message}</p> : null}
                </div>
                <div className="form-check">
                    <label>Open?</label>
                    <input className="form-check-input" type="checkbox" value="" id="open" defaultChecked={storeValues.open}/>
                    {errors.open ? <p>{errors.open.message}</p> : null}
                </div>
                <button type="submit" className="btn btn-primary">{id? "Edit Store" : "Add Store"}</button>
            </div>
        </form>
    </div>)
}
export default StoreForm;
