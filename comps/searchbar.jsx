import styles from '../styles/searchbar.module.css';
import cn from 'classnames';


const Searchbar = () => {

    return (
      <>
            <div className={styles.search}>
              <input type="text" placeholder="Search" />
            </div>
            {/* <form className={styles.form} method="get" action="">
              <div className={styles.tb}>
              <div className={styles.td}>
              <input type="text" placeholder="Search" required/>
              </div>
              <div className={cn(styles.td, styles.s_cover)}>
              <button className={styles.button} type="submit">
              <div className={styles.s_circle}></div>
              <span></span>
              </button>
              </div>
              </div>
            </form> */}
            </>
    )
}

export default Searchbar;