import React from 'react'

function Form(props){
    const {
        values,
        changeHandler,
        onSubmit,
    } = props

    return (
        <form autocomplete="off">
            <h2>Add New Member:</h2>
            <label>Name: 
                <input 
                    value={values.name}
                    onChange={changeHandler}
                    name="name"
                    type="text"
                />
            </label>
            <label>Email: 
                <input 
                    value={values.email}
                    onChange={changeHandler}
                    name='email'
                    type="text"
                />
            </label>
            <label>Role: 
                <input 
                    value={values.role}
                    onChange={changeHandler}
                    name='role'
                    type="text"
                />
            </label>
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}
export default Form