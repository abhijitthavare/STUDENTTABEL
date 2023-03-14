import React from 'react'

const Users = (props) => {
    let data=props.data
  return (
     <div>
        <table border="2PX" style={{textAlign:"center"}}>
            <tr>
                <th>STUDENTNAME</th>
                <th>DOB</th>
                <th>STD</th>
                <th>DIV</th>
                <th>PHOTO</th>
            </tr>
            {data.map((x)=>{
                   return <tr>
                    <td>{x.studentname}</td>
                    <td>{x.DOB}</td>
                    <td>{x.STD}</td>
                    <td>{x.DIV}</td>
                    <td><img src={x.photo} alt="" style={{height:"50px", width:"50px"
                    }} /></td>
                   </tr>
            })}
        </table>
     </div>
  )
}

export default Users