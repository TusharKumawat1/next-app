import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s keep in touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="img" width={500} height={500}/>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder='Name' className={styles.input}/>
        <hr />
        <input type="email" placeholder='email@.com' className={styles.input}/>
        <hr />
        <textarea className={styles.textarea} cols="30" rows="10"  placeholder="Message"></textarea>
        <Button text={"Send"} url={"#"}/>
      </form>
      </div>
    </div>
  )
}
