import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/culture.png" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>31.12.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
          <h1 className={styles.title}>Lorem ipsum dolor.</h1>
        </Link>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste
          ab corrupti voluptates quam, animi quos maiores eius nihil nisi maxime
          perspiciatis ipsum est ipsam minus sed dolore dolorem repudiandae.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
