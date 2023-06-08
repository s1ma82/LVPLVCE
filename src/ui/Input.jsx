import styles from './styles.module.scss'
import { forwardRef } from 'react';

const Input = forwardRef(({...props}, ref) => {
    return <input   ref={ref} className={styles.input} {...props}/>
    
})

export default Input;
