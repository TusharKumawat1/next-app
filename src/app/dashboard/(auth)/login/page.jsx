"use client";

import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter, } from "next/navigation";
import Link from "next/link";
import { useForm } from 'react-hook-form';
const Page=()=> {
  const router=useRouter()
  const session=useSession()
  const{  
    register,
    handleSubmit,
    formState: { errors },
  }=useForm()
  const onsubmit = async (data) => {
    console.log(data)
    
    try {
      const email =data.email
      const password =data.password
      await signIn("credentials",{email,password});
      
    } catch (error) {
      setErr(true)
      console.log(error)
    }
  }
  if(session.status==="loading"){
      return <p>Loading...</p>
  }
  if(session.status==="authenticated"){
      router.push("/dashboard")
  }
  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit(onsubmit)}>
      <input type="email"
        placeholder='Email'
        required={true}
        className={styles.input}
        {...register('email', { required: true })}
      />
      <input type="password"
        placeholder='******'
        required={true}
        className={styles.input}
        {...register('password', { required: true })}
      />
      <button className={styles.btn} >Signup</button>
      <button className={styles.btn2} onClick={(e)=>{
        e.preventDefault();
        signIn("google")
      }}>Continue with google</button>
      <Link href={"/dashboard/signup"} className={styles.login}>Create a account?</Link>
    </form>
  </div>
   
  )
}
export default Page;