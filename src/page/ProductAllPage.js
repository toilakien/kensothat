import { useSelector,useDispatch } from "react-redux/es/exports";
import ProductItem from "../components/product/ProductItem";
const ProductAllPage=()=>{
    const product=useSelector(state=>state.productReducer.data);

    return(
        <div className="productList">
            { product.map((data,index)=>{
                return (

                    <ProductItem 
                        key={index}
                        data={data}
                    />
                )
            })}
        </div>
    )
}
export default ProductAllPage;