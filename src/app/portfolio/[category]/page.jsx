import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'
export default function Category({params}) {
  return (
    
    <div className={styles.container}>
     <h1 className={styles.catTitle}>{params.category}</h1>
    
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum fuga nisi sit nihil eos sapiente qui molestiae aliquid doloribus iusto modi hic suscipit eius veniam possimus eveniet distinctio provident magni, a assumenda repudiandae architecto consectetur enim. Rem, quibusdam molestias illum obcaecati eum doloribus possimus ducimus reiciendis? Repudiandae, neque debitis?</p>
          <Button text={"See more"} url={"/"}/>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="img" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        
        <div className={styles.imgContainer}>
          <Image src={"https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="img" fill={true} className={styles.img}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Minimal Single Product</h1>
          <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum fuga nisi sit nihil eos sapiente qui molestiae aliquid doloribus iusto modi hic suscipit eius veniam possimus eveniet distinctio provident magni, a assumenda repudiandae architecto consectetur enim. Rem, quibusdam molestias illum obcaecati eum doloribus possimus ducimus reiciendis? Repudiandae, neque debitis?</p>
          
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum fuga nisi sit nihil eos sapiente qui molestiae aliquid doloribus iusto modi hic suscipit eius veniam possimus eveniet distinctio provident magni, a assumenda repudiandae architecto consectetur enim. Rem, quibusdam molestias illum obcaecati eum doloribus possimus ducimus reiciendis? Repudiandae, neque debitis?</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"https://images.pexels.com/photos/15639611/pexels-photo-15639611/free-photo-of-cars-fashion-sunglasses-people.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="img" fill={true} className={styles.img}/>
        </div>
      </div>
    </div>
  )
}
