import React from 'react'
import './style.css'

function PeopleList(props) {
    const arr = props.data
    const listIterm = arr.map((value,index)=> <li key={index}>{value}</li>)


  return (
    <ul className='list'>
      {listIterm}
    </ul>
  )
}

export default PeopleList
