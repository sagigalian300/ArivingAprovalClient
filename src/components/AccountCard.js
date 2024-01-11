import React from 'react'

const AccountCard = (props) => {
  return (
    <div className='flex flex-row'>
        <h1>{props.name}</h1>
        <h1>{props.password}</h1>
        <button className='bg-red rounded p-2 outline-none' onClick={()=>{
            const isConfirmed = window.confirm('Are you sure you want to delete ' + props.name + ' from the database')
            if (isConfirmed){
              console.log('confirmed')
              props.delAccount(props._id)
            }else{
              console.log('Declined')
            }
            
        }}>Delete</button>
    </div>
  )
}

export default AccountCard