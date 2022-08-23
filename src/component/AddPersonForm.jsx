import React, { useState } from 'react'
import './style.css'

function AddPerson(props) {
    // console.log(props)
    const [person, setPerson] = useState('')

    const handleChange = e => {
        setPerson(e.target.value)
    }
    const handleSubmit = e => {
        props.handleSubmit(person);
        setPerson('')
        e.preventDefault();
    }
    return (
        <div>
            <form action="/" onSubmit={handleSubmit}>
<input type="text" name="person" id="person" onChange={handleChange} value={person} placeholder="Add new contact"/>

<button type="submit">Add</button>
            </form>

        </div>
    )
}

export default AddPerson
