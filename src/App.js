// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import { image } from './Array';

// function App() {

//   const [heading , setHeading] = useState("")
//   const [text , setText] = useState("")
//   const [img , setImg] = useState("")
  

  
 
//   const handleButton1 = ()=>{
//     setHeading("Lahore")
//     setText("Lahore is the city of wonders with a rich history of over a millennium. Lahore the 2nd largest city of Pakistan and is capital of province Punjab.")
//    setImg("/download1.jpg")

//   }
//   const handleButton2 = ()=>{
//     setHeading("Islamabad")
//     setText("Islamabad is the Capital and tenth largest city of Pakistan, having 1.5 million population. Pakistan's new Capital city nestles against the backdrop of the Margalla Hills")
//   }
//   return (
//     <div >
         
//         <div className='w-[50%] bg-red-300 h-96 mx-auto rounded-xl'>
//           <h1 className='font-bold text-2xl text-center' >{heading}</h1>
//           <p className='text-xl '>{text}</p>
//           <img src={img} />
//         </div>
//          <button onClick={handleButton1} >Button 1 </button>
//          <button onClick={handleButton2}>Button 2 </button>


     
//     </div>
//   );
// }

// export default App;





import './App.css';
import { useState } from 'react';

function App() {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const handleButton1 = () => {
    setHeading("Lahore");
    setText("Lahore is the city of wonders with a rich history of over a millennium. Lahore the 2nd largest city of Pakistan and is capital of province Punjab.");
    setImg("/download (1).jpg"); 
  };

  const handleButton2 = () => {
    setHeading("Islamabad");
    setText("Islamabad is the Capital and tenth largest city of Pakistan, having 1.5 million population. Pakistan's new Capital city nestles against the backdrop of the Margalla Hills");
    setImg("/download.jpg"); 
  };

  return (
    <div>
      <div className='w-[50%] bg-red-300 h-96 mx-auto rounded-xl mt-10'>
        <h1 className='font-bold text-2xl text-center'>{heading}</h1>
        <p className='text-xl mx-10 mt-2 '>{text}</p>
        <img src={img} alt="City"  className='mx-10 mt-2'/> {/* Use the img state */}
      </div>
      <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButton1}>Button 1</button>
      <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded ml-8" onClick={handleButton2}>Button 2</button>
    </div>
  );
}

export default App;
