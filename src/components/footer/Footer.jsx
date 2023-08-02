import React from 'react'
import Image from 'next/image'
import logo1 from 'public/1.png'
import logo2 from 'public/2.png'
import logo3 from 'public/3.png'
import logo4 from 'public/4.png'
import styles from './footer.module.css'
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>© 2023 Company, Inc</div>
      <div className={styles.items}>
        <Image src={logo1} alt="img" width={25} height={25} />
        <Image src={logo2} alt="img" width={25} height={25}/>
        <Image src={logo3} alt="img" width={25} height={25}/>
        <Image src={logo4} alt="img" width={25} height={25}/>
      </div>
    </div>
  )
}
