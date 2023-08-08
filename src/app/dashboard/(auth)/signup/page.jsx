"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from './signup.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


export default function page() {

  const [err, setErr] = useState(false)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = async (data) => {
    console.log(data)
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data })
      })
      if (res.status === 201) {
        router.push("/dashboard")
      }
    } catch (error) {
      setErr(true)
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgContainer}>
        <Image src={"https://buildfire.com/wp-content/uploads/2021/10/Mobile-App-Marketing-Costs-How-to-Plan-Your-App-Marketing-Budget@3x-scaled.jpg"} fill={true} className={styles.img}></Image>
      </div> */}
      <form className={styles.form} onSubmit={handleSubmit(onsubmit)}>
        <input type="text"
          placeholder='Name'
          required={true}
          className={styles.input}
          {...register('name', { required: true })}
        />
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
        <button className={styles.btn}>Signup</button>
        <Link href={"/dashboard/login"} className={styles.login}>Already a user?</Link>
        {err && <p style={{ color: "red", textAlign: "center" }}>somthing went weong</p>}
      </form>
    </div>
  )
}
