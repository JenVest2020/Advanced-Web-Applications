import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {

    const [animals, setAnimals] = useState([]);
    const [dependency, setDependency] = useState(false);

    useEffect(() => {
        axiosWithAuth().get('animals')
            .then(res => {
                console.log('from AD: get success: res', res)
                setAnimals(res.data)
                setDependency(false)
            })
            .catch(err => console.error('from AD: get fail: err', err.message))
    }, [dependency])

    // How can get fetch the data from the server when the component mounts?
    // How can we capture and set that data to state?

    return (
        <div className="dash">
            <AnimalForm animals={animals} updateAnimals={setAnimals} setDependency={setDependency} />
            <AnimalList animals={animals} />
        </div>
    )
}