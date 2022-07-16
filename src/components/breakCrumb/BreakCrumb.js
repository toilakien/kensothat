import styles from './BreakCrumb.module.css';
const BreakCrumb=()=>{
    return (
        <div className={styles.breakCrumbContainer}>
            <div className={styles.breakCrumbItem}>
                <div className={styles.text}>Trang trí & đèn</div>
                <div className={styles.logo}></div>
            </div>
            <div className={styles.breakCrumbItem}>
                <div className={styles.text}>Trang trí & đèn</div>
                <div className={styles.logo}></div>
            </div>
            <div className={styles.breakCrumbItem}>
                <div className={styles.text}>Trang trí & đèn</div>
                <div className={styles.logo}></div>
            </div>
        </div>
    )
}
export default BreakCrumb;
