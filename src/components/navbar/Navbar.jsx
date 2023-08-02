"use client"
import Link from 'next/link'
import React,{useContext, useState} from 'react'
import styles from './navbar.module.css'
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import { TheamContext } from '@/context/TheamContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const [display, setdisplay] = useState("0px")
  const [icon, seticon] = useState(<CancelIcon/>)
  const session = useSession();
  const toggelNav=()=>{
    if (display==="0px") {
      setdisplay("-150px")
      seticon(<MenuIcon/>)
    } else {
      setdisplay("0px")
     
      seticon(<CancelIcon/>)
    }
  }
  const {toggle,theam}=useContext(TheamContext)
  return (
    <div className={styles.nav}>
     <div className={styles.logo}><Link  href={"/"}>LOGO</Link></div>
     <div className={styles.navLinks} style={{top:display}}> <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/portfolio"}>Portfolio</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <button onClick={toggle}  className={styles.cancle}>{theam}</button>
  { session.status==="authenticated"&&<button onClick={signOut} className={styles.logout}>{<LogoutIcon/>}</button>}
      </div>
      <div>
        <button onClick={toggelNav} className={styles.bars}>{icon}</button>
      </div>
    </div>
  )
}
