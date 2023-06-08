import styles from './styles.module.scss'
import {Bookmark} from '../'
export default ({ ...props }) => {

    

    const data = [
        {
            id: 0,
            url: 'https://vk.com'
        },
        {
            id: 1,
            url: 'https://youtube.com'
        },
        {
            id: 0,
            url: 'https://google.com'
        },
    ]

    return (
        <div className={styles.bookmarks}>
            <ul className={styles.bookmarks__list}>
                {data?.map((i, index) =>
                    <a key={`${i.url}#${index}`} className={styles.link} href={i.url}>
                        <li>
                            <Bookmark data={i} className={styles.item} />
                        </li>    
                    </a>
                )}
                <li>
                    <Bookmark gen className={styles.item} />
                </li>
            </ul>
        </div>
    )
}