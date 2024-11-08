import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contexts/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);              /* ProductId Finding Console */                                                                         
  const [productData,setProductData] = useState(false);                       // console.log(productId);
  const [image,setImage] = useState('')                                                          
  const [size,setSize] = useState('')                                                        

  const fetchProductData = async() =>{

    products.map((item)=>{
      if(item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        /* To find number of Images */
        // console.log(item);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId])
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* --------Product Data-------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* --------Product Images-------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt=''/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt=''/>
          </div>
        </div>
        {/* ---------Product Info-------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5"/>
            <img src={assets.star_icon} alt="" className="w-3.5"/>
            <img src={assets.star_icon} alt="" className="w-3.5"/>
            <img src={assets.star_icon} alt="" className="w-3.5"/>
            <img src={assets.star_dull_icon} alt="" className="w-3.5"/>
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return snd exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-10 w-1/4">
  <h1 className="text-2xl font-medium mb-4">Size Details</h1>
  <div className="overflow-x-auto border border-gray-200 shadow-sm rounded-lg">
    <table className="min-w-full table-auto text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border-b px-6 py-3 text-sm font-semibold">Size</th>
          <th className="border-b px-6 py-3 text-sm font-semibold">Inch (Range)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="px-6 py-3 text-sm">S</td>
          <td className="px-6 py-3 text-sm">28" - 30"</td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-3 text-sm">M</td>
          <td className="px-6 py-3 text-sm">30" - 32"</td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-3 text-sm">L</td>
          <td className="px-6 py-3 text-sm">32" - 34"</td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-3 text-sm">XL</td>
          <td className="px-6 py-3 text-sm">34" - 36"</td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-3 text-sm">XXL</td>
          <td className="px-6 py-3 text-sm">36" - 38"</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      {/* --------Description & Review Section-------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Discover the perfect blend of style and functionality in our premium sportswear collection. Engineered for peak performance, each item is crafted to support your every move, no matter the 
            intensity of your workout. Our selection features breathable fabrics and ergonomic designs tailored for athletes and fitness enthusiasts alike. With our apparel, you'll not only look great 
            but also feel empowered to achieve your goals. Redefine your active wardrobe and embrace your fitness journey today!.</p>
          <p>Unleash your potential with our expertly crafted sportswear that supports every movement. From breathable fabrics to ergonomic designs, our apparel is tailored for optimal performance and 
             flexibility. Ideal for athletes and casual enthusiasts alike, our collection keeps you motivated and focused on your goals. Shop now to redefine your active wardrobe!</p>
        </div>
      </div>
      {/* --------Display Related Products-------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product