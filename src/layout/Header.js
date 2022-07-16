import styles from './Header.module.css';
import {Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div className={styles.headerContainer}>
            <div className={styles.navBar}>
                <div className={styles.narBarItem}>
                    <a>Tiết kiệm hơn với ứng dụng</a>
                </div>
                <div className={styles.narBarItem}>
                    <a>Tiết kiệm hơn với ứng dụng</a>
                </div>
                <div className={styles.narBarItem}>
                    <a>Tiết kiệm hơn với ứng dụng</a>
                </div>
                <div className={styles.narBarItem}>
                    <a>Tiết kiệm hơn với ứng dụng</a>
                </div>
                <div className={styles.narBarItem}>
                    <a>Tiết kiệm hơn với ứng dụng</a>
                </div>
            </div>
            <div className={styles.logoBar}>
                <div className={styles.logo}></div>
                <div className={styles.inputSearch}>
                    <input type="text" placeholder='   TÌM KIẾM TRÊN KEN'/>
                    <div className={styles.logoSearch}> </div>
                </div>
                <div className={styles.cart}></div>
                <div className={styles.voucher}></div>
            </div>
            <div className={styles.menuBar}>
                <div className={styles.menuBarItem}>
                    <Link to='/'>Home</Link>
                </div>
                <div className={styles.menuBarItem}>
                    <a>Contact</a>
                </div>
                <div className={styles.menuBarItem}>
                    <Link to='/product'>Product</Link>
                </div>
                <div className={styles.menuBarItem}>
                     <a>Other</a>
                </div>
            </div>
        </div>
    )
}
export default Header;