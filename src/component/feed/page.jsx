import styles from "@/component/feed/page.module.css"
import Image from "next/image"

import React from 'react'

const Feeds = () => {
  return (
    <div className={styles.feedContainer}>
      
      <div className={styles.feeds} data-aos="fade-right">
            <h2> Local Experties for Luxury <span className={styles.home}>Homes</span></h2>
            <p>Discover our collection of luxury homes, villas, and apartments in the heart of the city.</p>

      </div>
      
      <div className={styles.imgCon} data-aos="fade-left">
            <Image
              src="/feedimg1.webp"
              fill="true"
              alt="hero"
            />
      </div>
   
    </div>
  )
}

export default Feeds