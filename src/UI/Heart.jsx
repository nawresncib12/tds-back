import React from 'react'
import classes from './Heart.module.css';

const Heart = () => {
  return (
    <div className={classes.container}>
        <div className={classes.heart}>
            <svg width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
            <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </svg>
        </div>
        <div className={classes.heart}>
            <svg width="70" height="70" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
            <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </svg>
        </div>
        <div className={classes.heart}>
            <svg width="68" height="68" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
            <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </svg>
        </div>
</div>
  )
}

export default Heart