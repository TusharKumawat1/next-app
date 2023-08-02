import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
import Button from '@/components/button/Button'
export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" fill={true} className={styles.img} />
        <div className={styles.imgText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.item}>
       <h2 className={styles.heading}>What we are?</h2>
       <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos reprehenderit quidem officiis in, dolorem cum placeat. Porro, aliquam. Perspiciatis eius quos maiores repellendus illum rem cupiditate incidunt excepturi culpa sunt libero error accusamus labore corporis quisquam, voluptatum, est neque! <br/>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta.
       <br/>-Lorem ipsum dolor sit amet.
       <br/>-Lorem ipsum dolor sit amet.
       </p>
        </div>
        <div className={styles.item}>
       <h2 className={styles.heading}>What we are?</h2>
       <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos reprehenderit quidem officiis in, dolorem cum placeat. Porro, aliquam. Perspiciatis eius quos maiores repellendus illum rem cupiditate incidunt excepturi culpa sunt libero error accusamus labore corporis quisquam, voluptatum, est neque! <br/>
      - Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta<br/>
       -Lorem consectetur adipisicing elit. Modi, soluta.<br/>
       -Lorem ipsum dolor sit amet.</p>
        </div>
     
      </div>
        <Button text={'contact'} url={"/contact"}/>
    </div>
  )
}
