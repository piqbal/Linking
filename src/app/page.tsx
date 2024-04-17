import React from "react";
import Link from "next/link";

function HomePage(){
  return(
    <div className="flex bg-gray-300 p-5 gap-5">
    
    <Link href="/Dashboard">Dashboard</Link>
    <Link href="/Blog">Blog</Link>
    <Link href="/Settings">Settings</Link>
    <Link href="/Careers">Careers</Link>
    <Link href="/About">AboutUs</Link>
    <Link href="/ContactUs">ContactUs</Link>
   
   

    </div>
  )
}
export default HomePage