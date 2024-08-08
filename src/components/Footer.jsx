import React from 'react'
import { Link } from 'react-router-dom';
// import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className=" group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/",
    icon: <RiLinkedinFill className=" group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/contact-us",
    display: "Contact Us"
  },
  {
    path: "/gallery",
    display: "Gallery",
  }
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  }, {
    path: "/contact",
    display: "Contact Us",
  }
];

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    // <footer className='pb-16 pt-10 bg-slate-300'>

    //   <div className='container'>
    //     <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
    //       <div>

    //         <img src={logo} alt="" />
    //         <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
    //           Copyright {year} developed by MYP all right reserved.
    //         </p>
    //         <div className="flex items-center gap-3 mt-4">
    //           {socialLinks.map((link, index) => (
    //             <Link
    //               to={link.path}
    //               key={index}
    //               className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
    //                 justify-center group hover:bg-primaryColor hover:border-none">
    //               {link.icon}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>

    //       <div>
    //         <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
    //           Quick Links
    //         </h2>
    //         <ul>
    //           {quickLinks01.map((item, index) => (
    //             <li key={index} className="mb-4">
    //               <Link
    //                 to={item.path}
    //                 className="text-[16px] leading-7 font-[400] text-textColor">
    //                 {item.display}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
    //           I want to:
    //         </h2>
    //         <ul>
    //           {quickLinks02.map((item, index) => (
    //             <li key={index} className="mb-4">
    //               <Link
    //                 to={item.path}
    //                 className="text-[16px] leading-7 font-[400] text-textColor">
    //                 {item.display}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
    //           Support
    //         </h2>
    //         <ul>
    //           {quickLinks03.map((item, index) => (
    //             <li key={index} className="mb-4">
    //               <Link
    //                 to={item.path}
    //                 className="text-[16px] leading-7 font-[400] text-textColor">
    //                 {item.display}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-gray-100 py-6 px-4 md:px-6 flex items-center justify-between dark:bg-gray-800 max-sm:flex-col max-sm:gap-4 shadow-md">
      <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 <Link to="http://www.vaanifoundation.org/" target='_blank'>Vaani Foundation.</Link> All rights reserved.</p>
      <div className="flex items-center gap-3">
        <Link
          className="transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white  inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          href="#"
        >
          <TwitterIcon className="w-4 h-4" />
        </Link>
        <Link
          className="transition-all ease-in-out duration-300 hover:bg-indigo-800 hover:text-white inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          href="#"
        >
          <FacebookIcon className="w-4 h-4" />
        </Link>
        <Link
          className="transition-all ease-in-out duration-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:from-10% hover:via-[#dc2743] hover:via-50% hover:to-[#bc1888] hover:to-100% hover:text-white inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          href="#"
        >
          <InstagramIcon className="w-4 h-4" />
        </Link>
        <Link
          className="transition-all ease-in-out duration-300 hover:bg-white hover:text-indigo-700 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          href="#"
        >
          <LinkedinIcon className="w-4 h-4" />
        </Link>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default Footer
