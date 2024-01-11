/* eslint-disable react/prop-types */
import { SlCalender } from "react-icons/sl";
import { FaComments } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";
import { MdOutlineDescription } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import Swal from "sweetalert2";

const TaskCard = ({ task }) => {
    const { client_name, short_description, date } = task
    const fileUpload =(e)=>{
        // console.log(e);
        fetch('http://localhost:5000//tasks', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(e)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.insertedId) {
                Swal.fire({
                  title: 'Cart Add Success!',
                  text: 'Do you want add on Cart?',
                  icon: 'success',
                  confirmButtonText: 'Great Job'
                })
              }
            })
        }
    
    return (

        <div>
            {/* todo  */}
            <div className="card hover:bg-orange-300 gap-6  w-auto p-2 space-y-2 bg-gray-100 shadow-xl">

                <div className="flex">

                    <div className="avatar">
                        <img className="w-8 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <p><span className="text-blue-500  font-bold ml-3">{client_name}</span></p>
                </div>
                <div className="flex gap-2 ">
                <MdOutlineDescription className='mt-1 text-gray-500'></MdOutlineDescription>
                    <p className="text-start">{short_description}</p>
                    <MdContentCopy className='mt-1 text-end flex justify-end items-end text-gray-500'></MdContentCopy>
                
                </div>

                <div className="flex justify-between">
                    <div className="avatar-group flex mb-5 mr-3 -space-x-1 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-5 ">
                                <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-5 ">
                                <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-5 ">
                                <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>

                    </div>

                    <div className="flex ">
                        <FaComments className='mt-1 text-gray-500'></FaComments>
                        <small>+12</small>
                        <button className="btn rounded-2xl" onClick={() => document.getElementById('my_modal_5').showModal()}> <RiAttachment2 className='mb-4 ml-5'></RiAttachment2></button>
                        <span className=" text-black mr-1">0</span> 
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <form onSubmit={fileUpload} method="dialog">  
                               
                               <div>
                                <input type="file"   className="file-input w-full h-24  text-center bg-slate-600 " />
                               <input type="submit" className="btn btn-primary " value='Submit' />
                               </div>
   
                               
                                   <button className="btn btn-primary">Close</button>
                                   </form>
                           
                            <div className="modal-action">
                                
                            </div>
                        </dialog>
                        <div className="flex">
                        <SlCalender className=' mt-2 ml-2'></SlCalender>
                        <p className='text-xs ml-2 '>{date}</p>
                    </div>
                    </div>






                  

                </div>

            </div>



        </div>
    );
};

export default TaskCard;