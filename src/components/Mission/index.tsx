import React, { Props } from 'react'
import {useLaunchinfoQuery} from '../../generated/graphql'
import LounchInfoView from './LounchInfoView'
import LounchInfoView1 from './LounchInfoView1'

export const MissionContainer=()=>{

const {data,error,loading}=useLaunchinfoQuery()
localStorage.setItem("spacex",JSON.stringify(data))
    if(loading){
    
        return(
            <h1>loading</h1>        )
    }
    if(error||!data){
        let data2:any=localStorage.getItem('spacex')
        // console.log("cahalkklals")
        // return (<LounchInfoView1  data2={JSON.parse(data2)} />) 
console.log("cjkejcjkenc")
return <LounchInfoView1  data2={JSON.parse(data2)} />
    }
    // console.log(data)zz
    return(
<LounchInfoView data={data}  /> 

)
}