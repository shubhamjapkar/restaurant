import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Featured.module.css';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  //handle left and right arrow
  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image src="/img/arrowl.png" alt="" fill objectFit="contain" />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-200 * index}vh)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            {/*<Image src={img} alt="" fill objectFit="contain" />*/}
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image src="/img/arrowr.png" alt="" fill objectFit="contain" />
      </div>
    </div>
  );
};
export default Featured;
