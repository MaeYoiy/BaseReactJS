import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/MyProfile'

function App() {
  //useState เป็น function ในการสร้าง state และ update state
  const [count, setCount] = useState(0)
  const  [name, setName] = useState("Mink Watcharapol")
  const [ifTrue, setTrue] = useState(true)

  //Object
  const user = {
    firstName: "Johnny",
    lastName: "Dalphny",
    imgPic: "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?pid=ImgDet&rs=1",
    imgSize: 90

  }

  //List
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  //Updating
  function handleIncreaseClick() {
    setCount(count + 1)
  }
  function handlDecreaseClick() {
    setCount(count - 1)
  }

  return (
    //React Fragment
    <>
      <h1>Welcome to my app</h1>
      {/* inline css
      <h1 style={{ color: 'red', border: '1px solid black' }}>Welcome to my app</h1> */}
      <p>{count}</p>
      <p>{name}</p>
      <p>My name is {user.firstName} {user.lastName}</p>
      <img 
        src={user.imgPic}  
        alt={'The Photo of' + user.firstName} 
        style={{
          width: user.imgSize,
          height: user.imgSize
        }}
      />
      <br/>
      <br/>

      {ifTrue ? "Yes, it's true" : "No, it's false"}

      <br/>
      <br/>

      {/* search แบบ map จะทำการรับ parameter มา 1 ตัว */}
      {/* จะเป็นคำว่า item หรือ products ก็ได้ */}
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.title}</li>

        ))}
      </ul>

      <br/>
      <br/>
      {/* alert */}
      <MyButton/>

      <br/>
      <br/>

      <button onClick={handleIncreaseClick}>Increase {count} times</button> <br/>
      <button onClick={handlDecreaseClick}>Increase {count} times</button>

      <br/>
      <br/>

      {/* sharing btw components */}
      <MyProfile data={user}/>
      
    </>
  )
}

export default App
