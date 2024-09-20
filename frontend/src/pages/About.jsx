import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Sports Wear was born out of a passion for sports and a commitment to helping you excel in your athletic journey. Our high-performance 
            apparel blends cutting-edge technology with sleek, stylish designs, ensuring you feel confident and prepared for any challenge. Whether 
            you`re at the gym or exploring the outdoors, our gear is crafted to support your active lifestyle with durability and comfort. We believe 
            in creating sportswear for those who live and breathe sports, empowering you to elevate your fitness experience. Unleash your potential 
            with gear designed for peak performance.</p>
            <p>Unleash your potential with our expertly crafted sportswear that supports every movement. From breathable fabrics to ergonomic 
            designs, our apparel is tailored for optimal performance and flexibility. Ideal for athletes and casual enthusiasts alike, our 
            collection keeps you motivated and focused on your goals. Shop now to redefine your active wardrobe!
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to inspire and support athletes and fitness enthusiasts of all levels by providing top-tier sportswear that enhances
            both performance and confidence. We are committed to offering innovative, stylish, and durable products that allow you to push your 
            limits, whether you`re training in the gym, on the track, or outdoors.</p> 
            <p>We believe that everyone deserves access to premium-quality 
            apparel that not only looks great but also feels comfortable and meets the demands of an active lifestyle. Our goal is to create a 
            community of individuals who are motivated to achieve their fitness ambitions, while also promoting eco-friendly practices through 
            the use of sustainable materials and ethical manufacturing.</p> 
            <p>Ultimately, we strive to empower our customers to live healthier, more 
            active lives with sportswear that embodies passion, performance, and purpose.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our commitment to quality is unwavering. Each piece of sportswear undergoes rigorous testing to ensure it meets the highest standards of 
            durability, performance, and comfort. We believe that quality is not just a feature—it`s the foundation of our brand, ensuring you can rely on 
            our products during your most intense workouts.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We prioritize your shopping experience with a user-friendly website, fast shipping options, and hassle-free returns. Whether you`re browsing for 
            the latest gear or tracking your order, we make it easy and efficient. Enjoy a seamless shopping journey that allows you to focus on what matters 
            most—your fitness goals.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated customer service team is always ready to assist you. From answering product queries to resolving issues promptly, we ensure you 
            receive the support you need. Your satisfaction is our priority, and we strive to create a positive experience every time you engage with us.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About 