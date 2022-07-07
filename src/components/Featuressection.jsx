import React from 'react'
import {
            FaVideo,
            FaClock,
            FaWifi, 
            FaAngleRight, 
            FaPhoneAlt, FaTimes, 
            FaInbox, 
            FaComment,
            FaEnvelope,
            FaFacebookMessenger,
            FaCaretDown,
            FaTwitter,
            FaFacebookF,
            FaInstagram,
            FaGithub
        }
        from 'react-icons/fa'

function Featuressection() {
    return (
        <>
            <div className='my-20'>
                <div className='mb-14 mx-6 lg:mx-28' >
                    <div className='text-center mb-12' >
                        <p className='text-2xl font-bold'>Features for a better experience</p>
                    </div>
                    <div className='grid grid-flow-row space-y-12 md:grid-flow-col md:fap-x-12 lg:gap-x-16 md:space-y-0' >
                        <div className='flex flex-row space-x-4' >
                            <div className='grid place-items-center bg-orange-200 rounded-full h-12 w-24 md:w-32 lg:w-28' >
                            <FaVideo className='text-xl text-orange-500' /> 
                            </div>
                            <div>
                                <p className='font-bold mb-4 text-base' >Video Messaging</p>
                                <p className='text-sm' >This software is very easy for you to manage. You can use it as you wish.</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-4' >
                            <div className='grid place-items-center bg-green-200 rounded-full h-12 w-24 md:w-32 lg:w-28' >
                            <FaClock className='text-xl text-green-500' /> 
                            </div>
                            <div>
                                <p className='font-bold mb-4 text-base' >Save your time</p>
                                <p className='text-sm' >This software is very easy for you to manage. You can use it as you wish.</p>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-4' >
                            <div className='grid place-items-center bg-orange-200 rounded-full h-12 w-24 md:w-32 lg:w-28' >
                            <FaWifi className='text-xl text-orange-500' /> 
                            </div>
                            <div>
                                <p className='font-bold mb-4 text-base' >Keep safe & private</p>
                                <p className='text-sm' >This software is very easy for you to manage. You can use it as you wish.</p>
                            </div>
                        </div>                             
                    </div>                    
                </div>
                <div className='bg-gray-200 lg:py-14 md:py-20 md:px-8 lg:px-28' >
                    <div className='flex flex-col md:flex-row space-x-4' >
                        <div className='basis-1/2 p-2' >
                            <img src='https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>
                        </div>
                        <div className='basis-1/2 p-4 mt-8 md:p-4 lg:p-12 md:mt-0 mb-4' >
                            <p className='text-3xl font-bold mb-2 md:mb-2 lg:mb-4' >
                                Meet your customers, with live video chat
                            </p>
                            <p className='md:mb-2 lg:mb-4' >
                                Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.
                            </p>
                            <p>
                                Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits                                
                            </p>
                        </div>
                    </div>
                </div>
                <div className='lg:py-14 md:py-20 md:px-8 lg:px-28' >
                    <div className='flex flex-col md:flex-row space-x-4' >
                        <div className='basis-1/2 p-4' >
                            <p className='text-3xl font-bold mb-2 md:mb-2 lg:mb-4' >
                                Start selling directly inside conversations
                            </p>
                            <p className='mb-2 md:mb-2 lg:mb-4' >
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable.                                 
                            </p>
                            <button className='bg-amber-500 p-4 rounded-md text-white font-medium my-4' >
                                Start Chatting now
                            </button>                            
                        </div>
                        <div className='basis-1/2' >
                            <div className='grid place-content-center' >
                                <div className='relative py-4 px-8 shadow-lg rounded-sm' >
                                    <div className='mb-4' >
                                        <div className='flex flex-row' >
                                            <img className='w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full mx-auto' src='https://images.unsplash.com/photo-1655648340915-019ee5a3fb2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />
                                            <div className="p-2 w-32 lg:w-64 space-y-4">
                                                <p className="text-xxs leading-2 lg:text-sm lg:leading-5 font-medium bg-gray-200 p-2 rounded-md">
                                                    Hello! My name is Alex, how can I help you?
                                                </p>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div className='mb-4' >
                                        <div className='flex flex-row' >
                                            <div className="p-2 w-32 lg:w-64 space-y-4">
                                                <p className="text-xxs leading-2 lg:text-sm lg:leading-5 font-medium bg-amber-500 text-white p-2 rounded-md">
                                                    Hi! Julia here, I have a few question i would love to ask you, if that is ok.
                                                </p>
                                            </div>                                            
                                            <img className='w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full mx-auto' src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80' alt='' />
                                        </div>                                        
                                    </div>
                                    <div className='mb-4' >
                                        <div className='flex flex-row' >
                                            <img className='w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full mx-auto' src='https://images.unsplash.com/photo-1655648340915-019ee5a3fb2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />
                                            <div className="p-2 w-32 lg:w-64 space-y-4">
                                                <p className="text-xxs leading-2 lg:text-sm lg:leading-5 font-medium bg-gray-200 p-2 rounded-md">
                                                    Nice to meet you, Julia!
                                                </p>
                                                <p className='text-xxs leading-2 text-center lg:text-lg lg:leading-5 font-black text-gray-500 bg-gray-200 p-1 rounded-md w-1/4' >
                                                    . . .
                                                </p>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div className='mb-4 mt-12' >
                                        <div className='flex flex-row p-2 border-2 border-gray-300' >
                                            <div className='basis-3/4' >
                                                <p className='text-xxs lg:text-base' >Write your reply...</p>
                                            </div>
                                            <div className='flex basis-1/4 justify-end' >
                                                <FaAngleRight className=' bg-gray-300 text-white text-xl md:text-2xl' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute z-50 shadow-lg p-4 top-40 -right-14 md:-right-20 lg:-right-16 bg-white' >
                                        <div className='' >
                                            <img className='w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full mx-auto' src='https://images.unsplash.com/photo-1655648340915-019ee5a3fb2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />  
                                            <div className='mt-1 text-center' >
                                                <p className='font-bold text-base md:text-xl mb-1'>Alex Smith</p>
                                                <p className='text-xxs text-gray-500 mb-4'>Project Manager</p>
                                                <div className='flex justify-between' >
                                                    <div className='grid place-items-center bg-green-400 rounded-full h-8 w-8 md:w-8 lg:w-8' >
                                                        <FaPhoneAlt className='text-white font-medium' />
                                                    </div>
                                                    <div className='grid place-items-center bg-red-400 rounded-full h-8 w-8 md:w-8 lg:w-8' >
                                                        <FaTimes className='text-white font-medium' />
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute bg-teal-500 text-white p-4 w-32 lg:w-60 rounded-md text-xs bottom-44 -left-22 md:-left-40 md:-bottom-8 shadow-lg' >
                                        <div className='' >
                                            <p className='' >Will we have daily calls for every projects</p>
                                            <div className='mt-2 ' >
                                                <div className='flex flex-row justify-between' >
                                                    <p>Yes</p>
                                                    <p>60%</p>
                                                </div>
                                                <div className='relative py-1 bg-teal-300 rounded-md'>
                                                    <div className='absolute top-0 py-1 bg-white rounded-md w-3/5' ></div>
                                                </div> 
                                            </div>
                                            <div className='mt-2' >
                                                <div className='flex flex-row justify-between' >
                                                    <p>No</p>
                                                    <p>40%</p>
                                                </div>
                                                <div className='relative py-1 bg-teal-300 rounded-md'>
                                                    <div className='absolute top-0 py-1 bg-white rounded-md w-2/5' ></div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>

                    </div>                    
                </div>
                <div className='bg-gray-100 lg:py-14 md:py-20 md:px-8 lg:px-28' >
                    <div className='flex flex-col md:flex-row space-x-4' >
                        <div className='basis-1/2 p-4' >
                            <div className='px-4 lg:px-12' >
                                <div className='relative bg-white rounded-md shadow-lg px-4 pb-4 pt-0' >
                                    <div className='flex flex-row justify-between items-center' >
                                        <div className='grid place-items-center bg-amber-500 rounded-full h-8 w-8 md:w-8 lg:w-8' >
                                            <FaInbox className='text-white font-medium' />
                                        </div>
                                        <p className='text-4xl font-black text-gray-400 pb-5' >...</p>
                                    </div>
                                    <div className='bg-gray-200 p-2' >
                                        <div className='my-4 mx-2' >
                                            <div className='bg-white p-2 rounded-lg' >
                                                <div className='flex flex-row space-x-4' >
                                                    <div className='grid place-items-center bg-green-400 rounded-full h-8 w-8 md:w-8 lg:w-8' >
                                                        <FaComment className='text-white font-medium' />
                                                    </div>
                                                    <div className='' >
                                                        <p className='text-black text-sm' >New Message</p>
                                                        <p className='text-xs' >Hey Alex, are you free now?</p>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                        <div className='my-4 mx-2' >
                                            <div className='bg-white p-2 rounded-lg' >
                                                <div className='flex flex-row space-x-4' >
                                                    <div className='grid place-items-center bg-red-500 rounded-full h-8 w-8 md:w-8 lg:w-8' >
                                                        <FaEnvelope className='text-white font-medium' />
                                                    </div>
                                                    <div className='' >
                                                        <p className='text-black text-sm' >New Email</p>
                                                        <p className='text-xs' > Alex,  your order replaced ID # 45321</p>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                        <div className='my-4 mx-2' >
                                            <div className='bg-white p-2 rounded-lg' >
                                                <div className='flex flex-row space-x-4' >
                                                    <div className='grid place-items-center bg-blue-500 rounded-full h-8 w-8 md:w-8 lg:w-8' >
                                                        <FaFacebookMessenger className='text-white font-medium' />
                                                    </div>
                                                    <div className='' >
                                                        <p className='text-black text-sm' >Facebook Messagner</p>
                                                        <p className='text-xs' >How can I see the tracking number?</p>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>
                                        <div className='my-4 mx-2' >
                                            <div className='bg-white p-2 rounded-lg' >
                                                <div className='flex flex-row space-x-4' >
                                                    <div className='grid place-items-center bg-green-400 rounded-full h-8 w-8 md:w-8 lg:w-8' >
                                                        <FaComment className='text-white font-medium' />
                                                    </div>
                                                    <div className='' >
                                                        <p className='text-black text-sm' >New Message</p>
                                                        <p className='text-xs' >How can I renew my subscription?</p>
                                                    </div>                                               
                                                </div>
                                            </div>
                                        </div>                                                 
                                    </div>
                                    <div className='absolute top-24 -left-10' >
                                        <img className='w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full mx-auto' src='https://images.unsplash.com/photo-1574744918163-6cef6f4a31b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='' />
                                    </div>
                                    <div className='absolute top-64 -right-4 lg:top-60 lg:-right-8' >
                                        <img className='w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full mx-auto' src='https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' alt='' />
                                    </div>
                                    <div className='absolute -bottom-4 left-10' >
                                        <img className='w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full mx-auto' src='https://images.unsplash.com/photo-1657090194043-53afac559d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='' />
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className='basis-1/2 p-4' >
                            <p className='text-3xl font-bold mb-2 md:mb-2 lg:mb-4' >
                                Get direct orders from your customers
                            </p>
                            <p className='mb-2 md:mb-2 lg:mb-4' >
                                Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available.                                
                            </p>
                            <div className='flex flex-row space-x-4' >
                                <div className='flex flex-row space-x-4' >
                                    <p className='text-4xl font-bold' >4.3K+</p>
                                    <div className='text-xs' >
                                        <p className='mt-2'>Websites</p>
                                        <p>Powering</p>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4' >
                                    <p className='text-4xl font-bold' >7M+</p>
                                    <div className='text-xs' >
                                        <p className='mt-2'>Chats in</p>
                                        <p>Last 2022</p>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
                <div className='bg-amber-500 lg:py-14 md:py-20 md:px-8 lg:px-28' >
                    <div className=' text-center py-6' >
                        <p className='text-4xl font-bold text-white' >Our blessed client<br/> said about us 😍</p>
                    </div>
                    <div className=' py-8 lg:py-0' >
                        <div className='flex flex-col space-y-8 px-4 lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-0' >
                            <div className='basis-1/2' >
                                <div className='relative p-4 rounded-md text-center bg-white mb-8' >
                                    <p className='text-orange-500 font-meduim mb-4' >“Incredible Experience”</p>
                                    <p className='mb-2 px-4' >
                                        We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.                                        
                                    </p>
                                    <div className='absolute -bottom-5 left-4/7' >
                                        <FaCaretDown className='text-white text-4xl' />
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4' >
                                    <div className='flex basis-1/2 justify-end ' >
                                        <img className='w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full ' src='https://images.unsplash.com/photo-1574744918163-6cef6f4a31b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='' />                                   
                                    </div>
                                    <div className='flex flex-col basis-1/2 justify-start' >
                                        <p className='text-md font-medium text-white mb-1' >Wade Warren</p>
                                        <p className='text-sm font-medium text-white' >CEO, ABC Corporation</p>
                                    </div>                                      
                                </div>
                            </div>
                            <div className='basis-1/2' >
                                <div className='relative p-4 rounded-md text-center bg-white mb-8' >
                                    <p className='text-orange-500 font-meduim mb-4' >“Dependable, Responsive, Professional”</p>
                                    <p className='mb-2 px-4' >
                                        Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.                                      
                                    </p>
                                    <div className='absolute -bottom-5 left-4/7' >
                                        <FaCaretDown className='text-white text-4xl' />
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4' >
                                    <div className='flex basis-1/2 justify-end ' >
                                        <img className='w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full ' src='https://images.unsplash.com/photo-1656931974299-01194b23d8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='' />                                   
                                    </div>
                                    <div className='flex flex-col basis-1/2 justify-start' >
                                        <p className='text-md font-medium text-white mb-1' >Esther Howard</p>
                                        <p className='text-sm font-medium text-white' >CEO, ABC Corporation</p>
                                    </div>                                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100 lg:py-14 md:py-20 md:px-8 lg:px-28' >
                    <div className=' text-center py-6' >
                        <p className='text-4xl font-bold' >
                            Ready to grow your business?<br/> Start with Apex, become faster<br/> every second
                        </p>
                    </div>
                    <div className='text-center pb-6' >
                        <button className='bg-amber-500 p-4 rounded-md text-white font-medium my-4' >Start Chatting Now</button>
                    </div>
                    <div className='py-8' >
                        <div className='flex flex-col space-y-6 md:flex-row justify-between md:space-y-0 items-center border-b-2 border-gray-300 pb-6' >
                            <div>
                                <p className="font-bold text-3xl text-orange-500" >Apex</p>
                            </div>
                            <div>
                                <div className="flex flex-row space-x-12" >
                                    <p className="font-medium" >About</p>
                                    <p className="font-medium" >Blog</p>
                                    <p className="font-medium" >Pages</p>
                                    <p className="font-medium" >Contact</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row space-x-8 items-center" >
                                    <FaTwitter className="text-sm text-amber-500" />
                                    <FaFacebookF className="text-sm text-amber-500" />
                                    <FaInstagram className="text-sm text-amber-500" />
                                    <FaGithub className="text-sm text-amber-500" />
                                </div>                    
                            </div>
                        </div>
                    </div>
                    <div className='' >
                        <div className='flex flex-col space-y-6 md:flex-row justify-between md:space-y-0 items-center' >
                            <div>
                                <p className="font-bold text-base text-gray-400" >© Copyright 2022, All Rights Reserved</p>
                            </div>
                            <div className='flex flex-row space-x-8 items-center' >
                                <p className='font-bold text-sm text-gray-400' >Privacy Policy</p>
                                <p className='font-bold text-sm text-gray-400' >Terms & Condition</p>
                            </div>                           
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Featuressection