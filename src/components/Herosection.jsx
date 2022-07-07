import React from 'react'
import {FaArrowRight, FaStar} from 'react-icons/fa'

function Herosection() {
    return (
        <>
            <div className="flex flex-col md:flex-row mt-4 lg:mt-16 mx-6 lg:mx-28">
                <div className='md:basis-5/12 mt-4 lg:mt-8' >
                    <p className='font-black text-4xl my-4' >Start chatting with customers, anytime, anywhere with Apex</p>
                    <p className='font-sm text-gray-400 my-8'>Great software that allows you to chat from any place at any time without any interruption.</p>
                    <button className='bg-amber-500 p-4 rounded-md text-white font-medium my-4' >
                        Start Chatting now <FaArrowRight className='inline-block' />
                    </button>
                    <div className='mt-12 lg:mt-28 grid grid-cols-2 lg:grid-cols-3 gap-8' >
                        <div className='grid grid-cols-3' >
                            <div className='h-14 w-14' >
                                <img className='rounded-full border-white border-4' src='https://fshcdn.com/q/Jrb2KdW_mdJlFGBR__256x256.jpg?w=640' alt='' /> 
                            </div>
                            <div className='h-14 w-14' >
                                <img className='rounded-full border-white border-4' src='https://fshcdn.com/q/Jrb2KdW_GoLgL6Db__256x256.jpg?w=640' alt='' /> 
                            </div>
                            <div className='h-14 w-14' >
                                <img className='rounded-full border-white border-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuEPiF-PkwxIuZbi6TG-qHf51_UtEuwCkHw&usqp=CAU' alt='' /> 
                            </div>                                                        
                        </div>
                        <div className='' >
                            <p className='font-bold text-2xl' >2,291</p>
                            <p className='text-sm text-gray-500' >Happy Cutomers</p>
                        </div>
                        <div className='border-t-4 lg:border-l-4 lg:border-t-0 border-gray-500 p-2'>
                            <p className='font-bold text-2xl' >4.8/5</p>
                            <div className='text-gray-500 flex flex-row justify-center' >
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <p className='pl-1' >Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 md:mt-0 md:basis-7/12' >
                    <div className='h-full relative'>
                        <img className='h-full object-contain mx-auto' src='https://res.cloudinary.com/investinbits-inc/image/upload/v1656902925/smiling-african-american-woman-using-mobile-phone-shopping-online-reading-text-message_prev_ui_hxojct.png' alt='' />
                        <div className='absolute bottom-4 lg:bottom-14' >
                            <figure className="flex bg-white rounded-xl p-4">
                                <img className="w-12 h-12 rounded-full mx-auto" src="https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                <div className="p-2 w-32 lg:w-64  text-center space-y-4">
                                    <p className="text-xxs leading-2 lg:text-sm lg:leading-5 font-medium">
                                        “Tailwind CSS is the only framework that I've seen scale
                                        on large teams.
                                    </p>
                                </div>
                            </figure>
                        </div>
                        <div className='absolute right-0 top-40 lg:top-52' >
                            <figure className="flex bg-white rounded-xl p-4">
                                <img className="w-12 h-12 rounded-full mx-auto" src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80" alt="" />
                                <div className="p-2 w-32 lg:w-64  text-center space-y-4">
                                    <p className="text-xxs leading-2 lg:text-sm lg:leading-5 font-medium">
                                        “Tailwind CSS is the only framework that I've seen scale
                                        on large teams.
                                    </p>
                                </div>
                            </figure>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection