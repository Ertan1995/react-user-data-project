import React, { useState } from 'react'
import '../style/AddUsers.css';
const AddUser = ({users,setUsers}) => {


  const [isim,setIsim]=useState();
  const [soyisim,setSoyIsim]=useState();
  const [yas,setYas]=useState();
  const [cinsiyet,setCinsiyet]=useState();
  const [email,setEmail]=useState();


const createUser = (e) => {
  e.preventDefault()
  const yeniveri = {

    id:users.length+1,
    ad:isim,
    soyad:soyisim,
    yas:yas,
    cinsiyet:cinsiyet,
    email:email
  }
  setUsers(
  [...users,yeniveri]
  )

  setIsim("")
  setSoyIsim("")
  setYas("")
  setEmail("")
  setCinsiyet("")
  setEmail("")

};

  return (
    <div className='add-user-container'>

<form onSubmit={createUser}>

<input value={isim} onChange={e=>setIsim(e.target.value)} type="text" placeholder='Ad Giriniz'  required />
<input value={soyisim} onChange={e=>setSoyIsim(e.target.value)} type="text" placeholder='Soyad Giriniz'  required/>
<input value={yas} onChange={e=>setYas(e.target.value)} type="number" placeholder='Yaşınızı Giriniz'required />
<select onChange={e=>setCinsiyet(e.target.value)}>
  <option value={cinsiyet}>Cinsiyet Seçiniz </option>
  <option>Kadın</option>
  <option> Erkek</option>
</select>
<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='E mail giriniz' />
<input type="submit" value="Add User" />


</form>


    </div>
  )
}

export default AddUser