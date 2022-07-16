import * as constants from'../constants/Constants'; 
export const getProductItem=payload=>{
    return {
        type:constants.GET_PRODUCT_ITEM,
        payload
    }
}