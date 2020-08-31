import React from 'react'
import {LaunchinfoQuery} from '../../generated/graphql'
interface Props{
    data:LaunchinfoQuery
}
const LounchInfoView:React.FC<Props>=({data})=>{

const {launches}=data
    console.log(launches)
    return(
<div>
<h1 className="col-12 text-center" style={{color:"#0d506b"}}>Recorde Of SpaceX Missions</h1>

{
  launches?.map((item,ind)=>{
return(
  <div>
    <div className="container" style={{backgroundColor:"#0d506b" ,color:"white"}}>
      <div className="row" style={{height:"30vh" ,marginTop:"2%"}}>
        <div className="col-12">
          {
            <div>
            <h1>{item?.mission_name}</h1>
          
          <h3>{item?.launch_year}</h3>
          <h4>{item?.launch_date_unix}kkk</h4>
          <h5>{item?.launch_date_utc}</h5>
          <h6>{item?.launch_success}</h6>
      
      
                  </div>
          }
    {/* <h1 key={ind}>{item?.mission_name}</h1> */}
    <h2></h2>
{/* <input type="button" value="View Detail"/> */}
</div>
</div>
</div>
</div>
    )
  })
}
</div>
        )
}
export default LounchInfoView