import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Zuri here!</b> Enjoy my lifestyle blog.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.png' alt='post-one' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor.</h1>
          <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatum cupiditate sint ad dolore vel, consequatur, tenetur saepe explicabo ipsam maxime beatae eius optio necessitatibus illo numquam. Repellendus, fugit laudantium.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured