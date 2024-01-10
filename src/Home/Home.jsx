/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import TaskCard from "../Component/TaskCard";
const Home = () => {
    const tasks = useLoaderData()
        const fTodo = tasks.filter(task => task.status === 'todo')
        const fDoing = tasks.filter(task => task.status === 'doing')
        const fComplete = tasks.filter(task => task.status === 'completed')
        const fInComplete = tasks.filter(task => task.status === 'incomplete')
        const fUnderReview = tasks.filter(task => task.status === 'under review')


    return (
        <div className="p-5 max-h-100px overflow-x-scroll">
          
           <section className="flex justify-between gap-3 bg-slate-200 text-center text text-black">
           <div className="w-1/5 h-[100vh] overflow-y-scroll">
          <div className="flex text-center gap-5 mt-3 justify-center">
          <h2 className=" text-center items-center  h-14 text-2xl text-black">Todo</h2>
            <span className="bg-blue-400  w-6 h-6  text-white rounded-full">{fTodo.length}</span> 
          </div>
           
           <div className="gap-5 space-y-2 ">
           {
                fTodo.map((task,index) => <TaskCard key={index} task={task}></TaskCard>)
            }
           </div>
           
           </div>

           <div className="w-1/5 h-[100vh] overflow-y-scroll">
          <div className="flex text-center gap-5 mt-3 justify-center">
          <h2 className=" text-2xl text-black  text-center items-center  h-14">Doing</h2>
            <span className="bg-blue-400  w-6 h-6 text-white rounded-full">{fDoing.length}</span> 
          </div>
           
           <div className="gap-5 space-y-2 ">
           {
                fDoing.map((task,index) => <TaskCard key={index} task={task}></TaskCard>)
            }
           </div>
           
           </div>

           <div className="w-1/5 h-[100vh] overflow-y-scroll">
          <div className="flex text-center gap-5 mt-3 justify-center">
          <h2 className=" text-2xl text-black  text-center items-center  h-14">Complete</h2>
            <span className="bg-blue-400  w-6 h-6 text-white rounded-full">{fComplete.length}</span> 
          </div>
           
           <div className="gap-5 space-y-2 ">
           {
                fComplete.map((task,index) => <TaskCard key={index} task={task}></TaskCard>)
            }
           </div>
           
           </div>

           <div className="w-1/5 h-[100vh]  overflow-y-scroll">
          <div className="flex text-center gap-5 mt-3 justify-center">
          <h2 className=" text-2xl text-black  text-center items-center  h-14">InComplete</h2>
            <span className="bg-blue-400  w-6 h-6  text-white rounded-full">{fInComplete.length}</span> 
          </div>
           
           <div className="gap-5 space-y-2 ">
           {
                fInComplete.map((task,index) => <TaskCard key={index} task={task}></TaskCard>)
            }
           </div>
           
           </div>

           <div className="w-1/5 h-[100vh] overflow-y-scroll">
          <div className="flex gap-5 text-center mt-3 justify-center">
          <h2 className=" text-2xl text-black  text-center items-center  h-14">Under Review</h2>
            <span className="bg-blue-400 w-6 h-6  text-white rounded-full">{fUnderReview.length}</span> 
          </div>
           
           <div className="gap-5 space-y-2 ">
           {
                fUnderReview.map((task,index) => <TaskCard key={index} task={task}></TaskCard>)
            }
           </div>
           
           </div>
           </section>
        </div>
    );
};

export default Home;
