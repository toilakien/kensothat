import * as constant from '../constants/Constants';
const init={
    data:[
        {
            id:1,
            title:'Laptop Microsoft Surface Laptop Go 12.4" Touchscreen i5/8G/256Gb-Platinum',
            price:12000000,
            description:'',
            img:'https://phucanhcdn.com/media/product/42442_surface_laptop_go_platinum_h1.png', 
            ins:'6 tháng',
            sold:710,
            adress:'Hà Nội',
        },
        {
            id:2,
            title:'Laptop Asus GL553VD I5-7300HQ/ RAM 8GB/ HDD 1TB/ GTX 1050/ 15.6 INCH FHD',
            price:22000000,
            description:'',
            img:'https://cdn.nguyenkimmall.com/images/thumbnails/696/522/detailed/741/10049758-laptop-asus-x415e-i3-1115g4-14-inch-x415ea-ek047t-1.jpg',
            ins:'12 tháng',
            sold:300,
            adress:'Hà Nội',
        },
        {
            id:3,
            title:'Laptop Asus Vivobook A515EA-BN1688T i3 1115G4/8GB/256GB SSD/Win10',
            price:16000000,
            description:'',
            img:'data:image/jpeg;base64,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', 
            ins:'6 tháng',
            sold:290 ,
            adress:'Hà Nội',
        },
        {
            id:4,
            title:'Apple Macbook Air 13" (2019) i5 1.6GHz/8GB/256GB Mới 100%',
            price:17000000,
            description:'',
            img:'https://phuckhangmobile.com/file/macbook-air-2019-vang-1-16455f.jpg',
            ins:'12 tháng',
            sold:590,
            adress:'Hà Nội',
        },
        {
            id:5,
            title:'FPT Shop Laptop Lenovo IdeaPad Slim 3 15ADA05 R5 3500U/8GB/512GB SSD/15.6HD/Win 10',
            price:18000000,
            description:'',
            img:'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/10/637353563373685359_lenovo-ideapad-5-xamnhat-1.png', 
            ins:'6 tháng',
            sold:410,
            adress:'Hà Nội',
        },
        {
            id:6,
            title:'Laptop Asus Vivobook 15 A515 i3-1115G4 15.6 inch A515EA-BQ489T',
            price:22000000,
            description:'',
            img:'https://mega.com.vn/media/product/14541_laptop_asus_zenbook_pro_duo_ux581gv_h2041t_.jpg',
            ins:'12 tháng',
            sold:290,
            adress:'Hồ Chí Minh',
        },
        {
            id:7,
            title:'Laptop Asus ZenBook Pro Duo UX581GV-H2041T (Cpu i9-9980KH, Ram 32GB, 1TB SSD, RTX 2060 6GB,Win10)',
            price:17700000,
            description:'',
            img:'https://phucanhcdn.com/media/product/42442_surface_laptop_go_platinum_h1.png', 
            ins:'6 tháng',
            sold:210,
            adress:'Hồ Chí Minh',
        },
        {
            id:8,
            title:'Laptop Asus GL553VD I5-7300HQ/ RAM 8GB/ HDD 1TB/ GTX 1050/ 15.6 INCH FHD',
            price:22000000,
            description:'',
            img:'https://cdn.nguyenkimmall.com/images/thumbnails/696/522/detailed/741/10049758-laptop-asus-x415e-i3-1115g4-14-inch-x415ea-ek047t-1.jpg',
            ins:'12 tháng',
            sold:530,
            adress:'Đà Nẵng',
        },
        {
            id:9,
            title:'MacBook Air 2019 MVFJ2 13 inch Gray i5 1.6/8GB/256GB Secondhand',
            price:26000000,
            description:'',
            img:'https://haloshop.vn/image/cache/catalog/products/apple/macbook/macbook-air-2018-gray-00-700x700.jpg',
            ins:'12 tháng',
            sold:290,
            adress:'Hà Nội',
        },
        {
            id:10,
            title:'Laptop Dell Latitude 3520 70251594 (Core i5-1135G7/8GB RAM/256GB SSD/15.6"FHD/Fedora OS) - Hàng chính hãng',
            price:92000000,
            description:'',
            img:'data:image/jpeg;base64,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',
            ins:'12 tháng',
            sold:230,
            adress:'Hồ Chí Minh',
        },
    ]
}
const productReducer=(state=init,action)=>{
    switch (action.type) {
        case constant.GET_PRODUCT_ITEM:{
            return {...state,productActive:action.payload};
        }
        default:
            return {...state};
    }
}
export default productReducer;