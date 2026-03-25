import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {motion} from 'motion/react'


const Footer=()=>{

    const dataList=[
                {title:'QUICK LINKS',links:[{name:'Home',href:'/'},{name:'Browse Cars',href:'/cars'},{name:'List Your Car',href:'#'},{name:'About Us',href:'/About'}]},
                {title:'RESOURCES',links:[{name:'FAQ',href:'/FAQ'},{name:'Terms of Service',href:'/terms-of-service'},{name:'Privacy Policy',href:'/privacy-policy'},{name:'Insurance',href:'https://www.google.com/search?q=insurance'}]},
                {title:'Contact',links:[{name:'478 Eastchester DR',href:'https://www.google.com/maps?q=478+Eastchester+Dr+Greensboro+NC+27405'},{name:'Greensboro NC USA',href:'https://www.google.com/maps?q=478+Eastchester+Dr+Greensboro+NC+27405',external:true},{name:'+1336-666-1454',href:'tel:+13366661454'},{name:'info@carerental.com',href:'mailto:info@carerental.com'}]}
        ]

    return( 
           
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className=' bg-lightblack md:p-5'>
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}} className='flex flex-wrap py-10 justify-between gap-5 md:gap-6 px-6 md:px-16 lg:px-24 xl:px-16 text-[#717171]'>
                <div className='max-w-120'>
                    <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.3}} src={assets.logo} alt="logo" className='mb-5 h-8 md:h-10  scale-550 pl-4'/>
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.4}} className="text-sm max-w-95">
                        Premium Car offering the best vehicles at affordable prices.
                         Available 24/7 with easy online booking and customer support.
                        Trusted by thousands of travelers worldwide.
                    </motion.p>
                    <div className='flex items-center gap-4 mt-4'>
                        {/* Instagram */}
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="text-3xl hover:bg-white hover:rounded-lg hover:text-pink-500 rounded-lg transition-all hover:scale-110 text-white "/></a>
                         {/* Twitter */}   
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="text-2xl hover:bg-white hover:rounded-lg hover:text-blue-500 transition-all hover:scale-110 text-white"/></a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="hover:bg-white  hover:rounded-lg  hover:text-blue-500 text-2xl rounded-xs transition-all hover:scale-110 text-white"/></a>
                        {/*Youtube*/}
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="hover:bg-white hover:rounded-lg hover:text-red-500 text-3xl transition-all hover:scale-110 text-white"/></a>  
                    </div>
                </div>

               {dataList.map((data,index)=> 
                    <div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.5}} key={index}>
                            <p className='text-lg text-[#ADADAD]'>{data.title}</p>
                            <ul className='mt-3 flex flex-col gap-2 text-sm'>
                                {
                                    data.links.map((link,idx)=>
                                    <li key={idx} className="hover:text-white transition-all"><a href={link.href}>{link.name}</a></li>
                                )}
                            </ul> 
                    </div>
                )}
               

                <div className='max-w-80'>
                    <p className='text-lg text-[#ADADAD]'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-primary h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </motion.div>
            
            <div className='flex flex-col gap-2 px-10  text-[#ADADAD]'>
                <hr className='border-gray-300 ' />
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p>© {new Date().getFullYear()} <a href="/" className="text-red-600">KP_Tech</a>. All rights reserved.</p>
                    <ul className='items-center gap-4 hidden md:flex'>
                        {
                            ["privacy","Terms","Sitemap"].map((link,index)=>(
                                <li key={index} className="before:content-['|'] before:mx-2 first:before:content-none">
                                    <a href="#">{link}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        


        </motion.div>
    )
}

export default Footer