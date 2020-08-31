import React, { Props } from 'react'
import {useLaunchinfoQuery} from '../../generated/graphql'
import LounchInfoView from './LounchInfoView'
export const MissionContainer=()=>{

const {data,error,loading}=useLaunchinfoQuery()

    if(loading){
        return(
            <h1>loading</h1>        )
    }
    if(error||!data){
        return <h1>error</h1>
    }
    // console.log(data)
    return(
<LounchInfoView data={data} /> 

)
}