import { Card, Button } from 'flowbite-react';
import React from 'react'
import CheckoutItem from '../Components/CheckoutItem';
import AddressForm from '../Components/Address';

const imgSrc =[
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
] 

const CheckOut = () => {
  return (
    <div className='dark:bg-gray-900 pt-10 pb-10'>
		<h1>
			<b className='flex justify-center text-red-600'>This cart and address are stored in this browser on this device</b>
		</h1>

      <div className='bg-transparent text-4xl flex justify-center text-center decoration-double text-gray-900 dark:text-white p-10
	  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl transition'>Checkout</div>

      <div className="md:flex gap-5 sm:w-[90%] mx-auto justify-center dark:text-white">

          <div className='flex flex-col p-5 gap-7 rounded-2xl border dark:border-gray-800'>
              <div className='font-bold'>Shopping Cart</div>
              <hr/>
				<div className='flex flex-col gap-4 justify-center items-center'>
				{
					imgSrc.map((img, index) =>(
						<CheckoutItem {...{img, index}} key={index}/>
						))
					}
					</div>
            </div>

			<div className='flex flex-col gap-y-10'>
					<AddressForm />
			</div>

        </div>
    </div>
  );

}

export default CheckOut