import React from 'react';
import styles from './ProductItem.module.css';
import *as actions from '../../redux/actions/Action';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
const ProductItem=({data,index})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const getData=(data)=>{
        dispatch(actions.getProductItem(data));
        navigate('/product/detail',{replace:true});
    }
    if(data){
        return (
            <div className={styles.productItem}>
                
                <div className={styles.productItemHead}>
                    <img src={data.img} alt=''/>
                </div>
                <div className={styles.productItemBody}>
                    <div className={styles.productItemBodyVoucher}></div>
                    <a onClick={()=>getData(data)} className={styles.productItemBodyTitle}>{data.title}</a>
                    <div className={styles.productItemBodyPrice}>{data.price} đ</div>
                    <div className={styles.productItemBodyFooter}>
                        <div className={styles.star}>*******</div>
                        <div className={styles.place}>{data.adress}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductItem;