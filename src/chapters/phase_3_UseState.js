import React, {useState} from 'react'


const Home = () => {
  
  const [inputValue, setInputValue] = useState(0); // It change the data in real time as user required

  const increment = ()=>{
    setInputValue(inputValue + 1);
  };

  const decrement = () =>{
    setInputValue(inputValue - 1);
  }


//Increment 


// // change handler 
//   const changeHandler = (e)=>{
//     inputValue = e.target.value;
//     console.log(inputValue);
//   }
  return (
    <>
    <div>Home</div>
    <input
      className='btn' 
      type="number" 
      placeholder='Enter your idea'
      // onChange={changeHandler}
      value={inputValue}
      readOnly
    />

    <button className='btn' onClick={increment}>+</button>
    <button className='btn' onClick={decrement}>-</button>
    </>
  )
}

export default Home