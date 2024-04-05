import React, { useState } from 'react'
import "./form.css"

export default function Form() {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [pwd, setPwd] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pwd: ''
    })

    // const handleName = (e) => {
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handlePwd = (e) => {
    //     setPwd(e.target.value)
    // }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </label>
        <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </label>
        <label>
            Password:
            <input type="password" name="pwd" value={formData.pwd} onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}
