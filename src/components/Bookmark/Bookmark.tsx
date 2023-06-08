import useStorage from '../../hooks/useStorage/useStorage'
import { getImage } from '../../futures'
import styles from './styles.module.scss'
import Props from './props'

export default ({ data, gen = false, ...props }: Props) => {

    if (!data && gen) {
        return (
            <div className={`${styles.bookmark} ${styles.bookmark_gen} `}>
               + 
            </div>
        )
    }
    const [getItem, setItem] = useStorage('bookmarks')

    getItem('data')

    const Image = () => {
        return <img src={getImage(data)} className={styles.bookmark__image} />
    }

    return (
        <div className={`${styles.bookmark} ${props.className}`}>
            <Image />
        </div>
    )
}