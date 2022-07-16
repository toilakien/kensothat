import styles from './ProductDetail.module.css';
import { useSelector,useDispatch } from "react-redux/es/exports";
const ProductDetail=()=>{
    const productDetail=useSelector(state=>state.productReducer.productActive);
    console.log(productDetail);
    if(productDetail){
        return(
            <div className={styles.container}>
                <div className={styles.gallery}>
                    <div className={styles.imagePrimary}>
                        <img src={productDetail.img}/>
                    </div>
                </div>
                <div className={styles.productDetail}>
                    <div className={styles.title}>{productDetail.title}</div>
                    <div className={styles.starAndFeed}>
                        <div className={styles.star}>******</div>
                        <div className={styles.feed}>2847 đánh giá</div>
                    </div>
                    <div>
                        Thương hiệu:
                        <a href='#'>ken</a>|<a href='#'>xem thêm</a>
                    </div>
                    <div className={styles.price}>{productDetail.price} đ</div>
                    <div>
                        Ưu đãi:
                    </div>
                    <div>
                        Số lượng:
                    </div>
                    <div className={styles.buyProduct}>
                        <button className={styles.btn}>Mua ngay</button>&nbsp;
                        <button className={styles.btn}>Thêm vào giỏ hàng</button>
                    </div>
                    
                </div>
                <div className={styles.delivery}></div>
            </div>
        )
    }
}
export default ProductDetail;