import { Card, Button } from 'flowbite-react';
import React from 'react'

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

      <div className='bg-transparent text-4xl flex justify-center text-center decoration-double text-gray-900 dark:text-white p-10
	  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl transition'>Checkout</div>

      <div className="md:flex gap-5 sm:w-[90%] mx-auto justify-center dark:text-white">
        

          <div className='flex flex-col p-5 gap-7 rounded-2xl border dark:border-gray-800'>
              <div className='font-bold'>Shopping Cart</div>
              <hr/>
				<div className='flex flex-col gap-4 justify-center items-center'>
				{
					imgSrc.map((img, index) =>(
					<div class="flex rounded-lg border border-gray-200 bg-white shadow-md 
					dark:border-gray-700 dark:bg-gray-800 max-w-lg justify-center items-center px-1 relative" key={index}>
						<div className='flex items-center w-[150px]'><img src={img} class="rounded-md" /></div>
						<div class="absolute right-0 flex items-center pr-3 pointer-events-none">
							<svg class="h-3 w-3 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
							</svg>
						</div>
						<div class="flex h-full flex-col justify-center items-center gap-4 p-6">
							<a href="#">
							<h5 class="text-md font-md tracking-tight text-gray-900dark:text-white">Apple Watch Series 7 GPS</h5>
							</a>
							<div class="flex items-center justify-between flex-wrap gap-2">
								<span class="text-sm text-gray-900 dark:text-white">₦589</span>
							</div>
						</div>
					</div>
						))
					}
					</div>
            </div>

			<div className='flex flex-col gap-y-10'>
				<div className='flex flex-col p-5 gap-7 rounded-2xl border dark:border-gray-800'>
					<div className='font-bold'>Delivery Info</div>
					<hr/>
					<div className='flex flex-col gap-4 justify-center items-center'>
					
						<form>
							<div class="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name*</label>
									<input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
								</div>
								<div>
									<label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name*</label>
									<input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
								</div>
							</div>
							<div class="mb-6">
								<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Home address*</label>
								<input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Home Address" required />
							</div>
							<div class="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City*</label>
									<input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
								</div>
								<div>
									<label for="zip code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State*</label>
									<input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
								</div>
								<div>
									<label for="zip code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
									<input type="text" id="zip_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="11011" />
								</div>
								<div>
									<label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone*</label>
									<input type="text" id="Phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="08011112233" required />
								</div>
							</div>
							<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
						</form>

					</div>
				</div>

				<div className='flex flex-col p-5 gap-7 rounded-2xl border dark:border-gray-800'>
              <div className='font-bold'>Payment</div>
              <hr/>
              <div className='flex flex-col gap-4 justify-center items-center'>
              
				<form>
				<div class="mb-6">
						<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number*</label>
						<input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Home Address" required />
					</div>
					<div class="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label for="expiry" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry*</label>
							<input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CVC*</label>
							<input id="cvc" type="number" pattern="\d*" max={999} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
						</div>
					</div>

					
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
				</form>

              </div>
            </div>
			</div>

        </div>
    </div>
  );

}

export default CheckOut