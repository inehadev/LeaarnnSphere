import React, { useState } from 'react'
import axios from 'axios'


const Dashboard = () => {
    const [text , setext]=useState('');
    const [responsee , setresponse] = useState('')

    const handleResponse = async()=>{

        try {

           

            const response = await  axios.post('http://localhost:3000/aiResponse');
            console.log(response)
            setresponse(response.data.message);
            
        } catch (error) {
            console.log("error in ai response" , error)
        }
    }



    // const [conversation, setConversation] = useState([]);
    // const [userInput, setUserInput] = useState('');
    // const [loading, setLoading] = useState(false);
  
    // const sendUserResponse = async () => {
    //   setLoading(true);
  
    //   try {
    //     // Send the user's input to the backend
    //     const response = await axios.post('http://localhost:3000/aiResponse', {
    //       userInput,
    //       conversation
    //     });
  
    //     // Update the conversation with both the user's input and AI's response
    //     setConversation((prev) => [
    //       ...prev,
    //       { role: 'user', content: userInput },
    //       { role: 'assistant', content: response.data.message }
    //     ]);
  
    //     // Clear the input field
    //     setUserInput('');
    //   } catch (error) {
    //     console.error('Error interacting with AI:', error);
    //   }
  
    //   setLoading(false);
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (userInput) {
    //     sendUserResponse();
    //   }
    // };
    return (
        <>

            <div className='h-[70px]  flex justify-between items-center '>
                <div className=' flex items-center '>
                    <img src='/logo-.png' alt='logo' className='h-[70px] w-[70px] mt-1 ml-5' />
                    <h1 className='text-white text-2xl '>Learn<span className='text-blue-300 text-xl'>sphere</span></h1>
                </div>

            </div>

            <div className='min-h-vh flex flex-col  justify-evenly gap-[300px]  items-center'>
                <div>
                     <p className='text-white text-4xl  mt-[15%]'> Welcome to LearnSphere!</p>
                </div>
               
             
      {/* <div>
        {conversation.map((message, index) => (
          <div key={index} className={message.role}>
            <strong>{message.role === 'user' ? 'You:' : 'Assistant:'}</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div> */}


                <div className=' flex rounded-full border border-white  w-[60%] mt-5 '>
                    <input type='text' placeholder='type here....' 
                    onChange={(e)=>setext(e.target.value)} value={text} 
                    className='h-10 w-full text-white   bg-transparent px-5 border-none focus:outline-none placeholder:px-2 placeholder:text-lg  ' />

                    <button className='h-9  text-white text-opacity-55 mr-2 m-1 text-lg bg-blue-500 rounded-full px-4' onClick={handleResponse}>Search</button>
                </div>
                
               </div>


{/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your response..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Send</button>
      </form>
             */}


        </>
    )
}

export default Dashboard
