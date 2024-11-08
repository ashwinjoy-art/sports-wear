import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list,setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      if(response.data.success){
        setList(response.data.products);
      }
      else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }

  const removeProduct = async (id) => {
    try {

      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers:{token}})

      if(response.data.success){
        toast.success(response.data.message)
        await fetchList();
      }
      else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

   return (
    <>
      <p className='mb-2'>All Product List</p>
      <div className='flex flex-col gap-2'>
        {/*-------- List Table Title-------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-300 text-sm">
          <b className="text-center">Image</b>
          <b className="text-center">Name</b>
          <b className="pl-6">Category</b>
          <b className="pl-10">Price</b>
          <b className="pl-6">Quantity</b>
          <b className="text-center">Action</b>
        </div>
        {/* --------Product List-------- */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12 mx-auto" src={item.image[0]} alt={item.name} />
            <p className="text-center">{item.name}</p>
            <p className="text-center">{item.category}</p>
            <p className="text-center">
              {currency}
              {item.price}
            </p>
            <p className="text-center">{item.quantity}</p> {/* Displaying Quantity */}
            <div className="flex space-x-2">
              <p onClick={() => removeProduct(item._id)} className="bg-red-500 text-white px-2 py-1.5 rounded-full text-xs sm:text-xs text-center cursor-pointer w-16">
                Remove
              </p>
            </div>
          </div>
          ))
        }
      </div>
    </>
  )
}

export default List