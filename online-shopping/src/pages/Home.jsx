import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux"
import productsAction from '../redux/products/productsAction'

const Home = () => {
    const productList = useSelector((state) => state.productsReducer.data )
    const dispatch = useDispatch()
    

    useEffect(() => {
      
        dispatch(productsAction())
        
    }, [])
    console.log(productList);
    return ( 
        <div>
            {productList?.map((item) => <div>
                {item.title}
            </div>)}
        </div>
     );
}
 
export default Home;