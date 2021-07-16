import React from "react";
import {useRouter} from "next/router"; //动态路由

//http://localhost:3000/detail/3 这样给URL不报错
export default function Detail(){
    const router = useRouter()
    //console.log(router)
    const {id} = router.query;
    console.log(id)
    return 'detail'
}