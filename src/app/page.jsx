import React from 'react'
import Image from 'next/image'
import hero from 'public/hero.png'
import styles from './page.module.css'
import Button from '@/components/button/Button'
export default function Home() {
  return (
    <div className={styles.hero}>
      <div  className={styles.item}>
          <h1 className={styles.heading}>Better design for your digital products.</h1>
          <p className={styles.desc}>  Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
         <Button text={'see our work'} url={"/portfolio"}/>
      </div>
    <div className={`${styles.item}`}>
      <Image src={hero} className={styles.imgContainer} alt="Home page"/>

    </div>
    </div>
  )
}
