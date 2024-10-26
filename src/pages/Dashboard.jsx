// import React, { useState } from 'react'
// import axios from 'axios'


// const Dashboard = () => {
//     const [text , setext]=useState('');
//     const [responsee , setresponse] = useState('')

//     const handleResponse = async()=>{

//         try {

           

//             const response = await  axios.post('http://localhost:3000/aiResponse');
//             console.log(response)
//             setresponse(response.data.message);
            
//         } catch (error) {
//             console.log("error in ai response" , error)
//         }
//     }



//     return (
//         <>

//             <div className='h-[70px]  flex justify-between items-center '>
//                 <div className=' flex items-center '>
//                     <img src='/logo-.png' alt='logo' className='h-[70px] w-[70px] mt-1 ml-5' />
//                     <h1 className='text-white text-2xl '>Learn<span className='text-blue-300 text-xl'>sphere</span></h1>
//                 </div>

//             </div>

//             <div className='min-h-vh flex flex-col  justify-evenly gap-[300px]  items-center'>
//                 <div>
//                      <p className='text-white text-4xl  mt-[15%]'> Welcome to LearnSphere!</p>
//                 </div>
  


//                 <div className=' flex rounded-full border border-white  w-[60%] mt-5 '>
//                     <input type='text' placeholder='type here....' 
//                     onChange={(e)=>setext(e.target.value)} value={text} 
//                     className='h-10 w-full text-white   bg-transparent px-5 border-none focus:outline-none placeholder:px-2 placeholder:text-lg  ' />

//                     <button className='h-9  text-white text-opacity-55 mr-2 m-1 text-lg bg-blue-500 rounded-full px-4' onClick={handleResponse}>Search</button>
//                 </div>
                
//                </div>


//         </>
//     )
// }

// export default Dashboard





import React, { useState } from 'react';
import axios from 'axios';
import Link from 'react-router-dom'

const Dashboard = () => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');
    const [stage, setStage] = useState('askTask'); // Initial stage
    const [userTask, setUserTask] = useState('');
    const [timeDuration, setTimeDuration] = useState('');
    const [dailyTime, setDailyTime] = useState('');

    const handleResponse = async () => {
        let dataToSend = {};

        if (stage === 'askTask') {
            dataToSend = { stage, userTask: text };
        } else if (stage === 'askDuration') {
            dataToSend = { stage, userTask, timeDuration: text };
        } else if (stage === 'askDailyTime') {
            dataToSend = { stage, userTask, timeDuration, dailyTime: text };
        } else if (stage === 'generateSchedule') {
            dataToSend = { stage, userTask, timeDuration, dailyTime };
        }

        try {
            const response = await axios.post('http://localhost:3000/aiResponse', dataToSend);
            console.log(response);
            setResponse(response.data.message);

            // Update stage based on the current stage
            if (stage === 'askTask') {
                setUserTask(text); // Save task
                setStage('askDuration');
            } else if (stage === 'askDuration') {
                setTimeDuration(text); // Save duration
                setStage('askDailyTime');
            } else if (stage === 'askDailyTime') {
                setDailyTime(text); // Save daily time
                setStage('generateSchedule');
            }

            setText(''); // Clear input field
        } catch (error) {
            console.log("Error in AI response", error);
        }
    };

    return (
        <>
            <div className='h-[70px] flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src='/logo-.png' alt='logo' className='h-[70px] w-[70px] mt-1 ml-5' />
                   <Link to='/'><h1 className='text-white text-2xl'>Learn<span className='text-blue-300 text-xl'>sphere</span></h1></Link> 
                </div>
            </div>

            <div className='min-h-vh flex flex-col justify-evenly gap-[300px] items-center'>
               

            <div className='text-white mt-5'>
    {response ?(
        <div dangerouslySetInnerHTML={{ __html: response }} />
    ) : (
        <div>
            <p className='text-white text-4xl mt-[15%]'> Welcome to LearnSphere!</p>
        </div>
    )}
</div>
                <div className='flex rounded-full border border-white w-[60%] mt-5'>
                    <input
                        type='text'
                        placeholder='type here....'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        className='h-10 w-full text-white bg-transparent px-5 border-none focus:outline-none placeholder:px-2 placeholder:text-lg'
                    />

                    <button className='h-9 text-white text-opacity-55 mr-2 m-1 text-lg bg-blue-500 rounded-full px-4' onClick={handleResponse}>
                        Submit
                    </button>
                </div>

                
            </div>
        </>
    );
};

export default Dashboard;



