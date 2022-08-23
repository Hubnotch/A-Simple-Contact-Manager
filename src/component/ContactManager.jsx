import React,{useState} from 'react'
import AddPerson from './AddPersonForm'
import PeopleList from './PeopleList'

function ContactManager(props) {
    const [contacts,setContacts] = useState(props.data)
    const addPerson = (name) =>{
        setContacts([...contacts, name])
    }
  return (
    <div className='contact'>
        <h1>Contact Manager</h1>
      <AddPerson handleSubmit={addPerson}/>
      <PeopleList data={contacts}/>
    </div>
  )
}

export default ContactManager
