import { useFetch } from "./index"

const UseFetchTester=()=>{
    const {data,loading,error} =  useFetch({url:"https://dummyjson.com/products",options:{}});
    
    return <div>
        <h1>USE FETCH CUSTOM HOOK</h1>
        {
            loading ? <div> Loading... Please Wait</div>:null
        }
        {
            data && data.products && data.products.length>0 ? data.products.map(item=><h1>{item.title}</h1>):null
        }
    </div>
}

export default UseFetchTester