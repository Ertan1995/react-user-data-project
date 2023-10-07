import React from 'react'
import '../style/UsersList.css';
const UsersList = ({ users }) => {
  return (
    <div className='user-list-container'>
      {users.map((user) => <div className='user-card' key={user.id}>

        <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=626&ext=jpg&ga=GA1.1.674909621.1696625761&semt=ais" />
        <h3>{user.ad} {user.soyad}</h3>
        <p>{user.yas}</p>
        <p>{user.cinsiyet}</p>
        <p>{user.email}</p>

      </div>)}
    </div>
  )
}

export default UsersList