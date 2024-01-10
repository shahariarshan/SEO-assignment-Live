/* eslint-disable react/prop-types */
import { SlCalender } from "react-icons/sl";
import { FaComments } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";
const TaskCard = ({ task }) => {
    const { client_name, short_description, date } = task
    return (

        <div>
            {/* todo  */}
            <div className="card hover:bg-orange-300 gap-6  space-y-2 bg-gray-100 shadow-xl">

                <div className="flex">

                    <div className="avatar">
                        <img className="w-8 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                    <p><span className="text-blue-500  font-bold ml-3">{client_name}</span></p>
                </div>
                <div >
                    <p>{short_description}</p>
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

                    <div className="flex">
                        <FaComments className='mr-2'></FaComments>
                        <small>+12</small>
                        <button className="btn rounded-2xl" onClick={() => document.getElementById('my_modal_5').showModal()}> <RiAttachment2 className='mb-4 mr-5 ml-5'></RiAttachment2></button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <input type="file" className="file-input w-full h-24  text-center bg-slate-600 " />
                            <input type="submit" className="btn btn-active btn-ghost" value='Submit' />

                            <div className="modal-action">
                                <form method="dialog">   
                                <button className="btn btn-active btn-ghost">Close</button>
                                </form>
                            </div>
                        </dialog>
                    </div>






                    <div className="flex justify-between">
                        <SlCalender className='text-xs'></SlCalender>
                        <p className='text-xs ml-2'>{date}</p>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default TaskCard;