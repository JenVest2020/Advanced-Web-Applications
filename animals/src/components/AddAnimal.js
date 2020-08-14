import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

const AddAnimal = (props) => {
    const [animal, setAnimal] = useState({
        name:'',
        sound:'',
        classification: {species:''}
    })
    const handleChanges = (e) => {
        setAnimal({
            ...animal,
            [e.target.name]: e.target.value
        })
        console.log('from AA: HC: animal', animal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('animals', animal)
        .then(res => {
            console.log('from AA: submit success: res', res.data);
        })
        .catch(err => console.error('from AA: submit failed: err', err.message))
        props.history.push('/creatures')
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={handleChanges}
                    type="text"
                    value={animal.name}
                    placeholder="name"
                    name="name"
                    required>
            </input>
            <label htmlFor="Sound">Sound</label>
            <input onChange={handleChanges}
                    type="text"
                    value={animal.sound}
                    placeholder="sound"
                    name="sound"
                    required>
            </input>
            <label htmlFor="classification">Classification</label>
            <input onChange={e => setAnimal({
                ...animal,
                classification: {species: e.target.value}
            })}
                    type="text"
                    value={animal.classification.species}
                    placeholder="classification"
                    required>
            </input>
            <button>Submit</button>
        </form>
        </div>
    )

}
export default AddAnimal