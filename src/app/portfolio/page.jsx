import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function page() {
  return (
    <div className={styles.container}>
    
      <div className={styles.text}>Choose a gallery</div>
      <div className={styles.gallery}>
      <Link href='/portfolio/illustration' className={styles.item}><Image src={"https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1600"}alt='dummy-image' className={styles.img} fill={true}/><span className={styles.title}>Illustration</span></Link>
      <Link href='/portfolio/appclations' className={styles.item}><Image src={"https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1600"}alt='dummy-image' className={styles.img} fill={true}/><span className={styles.title}>Apps</span></Link>
      <Link href='/portfolio/website' className={styles.item}><Image src={"https://images.pexels.com/photos/3584998/pexels-photo-3584998.jpeg?auto=compress&cs=tinysrgb&w=1600"}alt='dummy-image' className={styles.img} fill={true}/><span className={styles.title}>Website</span></Link>
      </div>
    </div>
  )
}
