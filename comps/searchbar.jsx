import styles from '../styles/searchbar.module.css';

const searchbar = () => {

    return (
        // <div className="searchbar">
        //     <input type="text" placeholder="Search" />
        //     <button type="submit"><i className="fa fa-search"></i></button>
        // </div>
        <div className={styles.cover}>
          <form className={styles.form} method="get" action="">
            <div className={styles.td}>
                <input className={input} type="text" placeholder="Search" required/>
            </div>
            <div className={styles(td,s_cover)}>
              <button className={styles.button} type="submit">
                <div className={styles.s_circle}></div>
                <span></span>
              </button>
            </div>
          </form>
        </div>
    )
}

export default searchbar;