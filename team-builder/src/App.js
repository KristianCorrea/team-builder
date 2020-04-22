import React, {useState} from 'react';
import './App.css';
import Form from "./Form"
import Member from "./Member"

const initialMembersList = [
  {
    name: "Timothy Big",
    email: "timmybiggins@humungo.com",
    role: "DJ"
  }
]

const resetForm = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [members, setMembers] = useState(initialMembersList)
  const [form, setForm] = useState(resetForm)

  const changeHandler = function(event){
    const name = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = function(event){
    event.preventDefault()
    const newMember={
      name: form.name,
      email: form.email,
      role: form.role
    }
    setMembers([...members, newMember])
    setForm(resetForm)
  }
  return (
    <div className="App">
      <h1>The A Team</h1>
      {
      members.map(function(member){
        return <Member member={member}/>
      })
      }
      <Form 
        values={form} 
        changeHandler={changeHandler}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
