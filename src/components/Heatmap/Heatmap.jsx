import React, { useEffect, useState } from 'react'
import { getColor } from '@/utils/functions'
import styles from './Heatmap.module.css'
const Heatmap = () => {
  const [colorArray, setColorArray] = useState([]);
  useEffect(() => {
    const colorDivs = [];

    // Genera divs con colores del 1 al 100
    for (let i = 1; i <= 100; i++) {
      colorDivs.push(
        <div
          key={ i }
          className="color-box"
          style={ { backgroundColor: getColor(i) } }
        >
          { i }
        </div>
      );
    }
    setColorArray(colorDivs);
  }, []);
  return (
    <div className={ styles.heatMapContainer }>
      { colorArray }
    </div>
  )
}

export default Heatmap