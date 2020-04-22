import React from 'react'

function Member({member}){
    return (
        <div className="teamList">
            <h2>{member.name}</h2>
            <p><strong>Email: </strong>{member.email}</p>
            <p><strong>Role: </strong>{member.role}</p>
        </div>
    )
}
export default Member