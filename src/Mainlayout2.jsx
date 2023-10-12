import React, { useState,useEffect } from 'react'
import "./App.css"
import data2 from "./Data2.json"
function Mainlayout2() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON ou une API
    // Pour cet exemple, je suppose que data.json est dans le dossier public
    fetch('/Data2.json')
      .then(response => response.json())
      .then(data => setData(data))
      
  }, []);




   const [toggle1,setToggled1] = useState(false);

   const ftoggle1 = () =>{
    setToggled1(!toggle1);
   }

   const [toggle2,setToggled2] = useState(false);

   const ftoggle2 = () =>{
    setToggled2(!toggle2);
   }

   const [toggle3,setToggled3] = useState(false);

   const ftoggle3 = () => {
    setToggled3(prevToggle => !prevToggle);
    console.log(toggle3);
}

  return (
    <div className='bodyperso1'>
        <header className='header'>

       </header>

        <div className='barregauche bg-gray-50 shadow-xl'>
            <div className='flex justify-center p-2'>
              <h2 className='font-bold'>Recherche par filtre</h2>
            </div>
            <div className='border rounded-md border-black p-1 m-2'>
                  <h3 className='text-center font-bold'>Pratique</h3>
              <div className='flex justify-evenly'>              
              <button className='p-1 text-sm rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200' > <i className="bi bi-geo-alt "></i> A proximite</button>
              <button className='p-1 text-sm rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200' ><i className="bi bi-ticket-perforated m-1"></i>En promotion</button>
            </div>
            </div>
            <div className='border rounded-md border-black p-1 m-2 overflow-hidden'>
              
                <h2 className='text-center font-bold'>Couleurs</h2>
                  <div className='flex justify-center'>
                      <button className='p-1 text-sm rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200' onClick={ftoggle1}>Afficher les couleurs</button>
                  </div>
                  <div className={toggle1 ? "h-[120px] transition-all duration-500 " : "h-[0px] transition-all duration-500"}> 
                    <div className='p-4 flex justify-evenly'>
                      <div className='circle bg-red-700'></div>
                      <div className='circle bg-blue-700'></div>
                      <div className='circle bg-green-700'></div>                     
                    </div>
                    <div className='p-2 flex justify-evenly'>
                    <div className='circle bg-yellow-700'></div>
                      <div className='circle bg-gray-700'></div>
                      <div className='circle bg-black'></div>
                    </div>
                  </div>
              
            </div>
            <div className='border rounded-md border-black p-1 m-2 overflow-hidden'>
              
                <h2 className='text-center font-bold'>Prix</h2>
                  <div className='flex justify-center'>
                      <button className='p-1 text-sm rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200' onClick={ftoggle2}>Filtrer par prix</button>
                  </div>
                  <div className={toggle2 ? "h-[95px] transition-all duration-500" : "h-[0px] transition-all duration-500"}> 
                    
                        <div className='p-2 flex justify-center gap-8'>
                            <button className='p-[2px] text-sm rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200' onClick={ftoggle2}>-200€</button>
                            <button className='p-[2px] text-sm rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200' onClick={ftoggle2}>+200€</button>
                        </div>
                        <div className='p-2 flex justify-center'>
                            <button className='p-2 text-sm rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-200' onClick={ftoggle3}>Game de prix personnalisée</button>
                        </div>
                        
                      
                  </div>
              
            </div>
        </div>

        <main className='main'>
            <div className="card">
            {data.map(item => (
        <div key={item.id}>
          <img src={item.image} alt="Car" />
          <p>{item.desc}</p>
        </div>
      ))}
            </div>
            <div className="card card1">{data2.map((item,i)=>{
        return (
            <div key={i}>

                <img src={item.image} alt="" />
                <h2>
                    {item.desc}
                </h2>
            </div>
        )
       })}</div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            
            
       </main>
       
       

       
       
    </div>
  )
}

export default Mainlayout2