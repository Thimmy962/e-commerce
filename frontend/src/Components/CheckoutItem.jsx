import React from 'react'

const CheckoutItem = ({img, index}) => {
    const price = 12857;
  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-md 
					dark:border-gray-700 dark:bg-gray-800 max-w-lg justify-center items-center px-1 relative" key={index}>
						<div className='flex items-center w-[150px]'><img src={img} className="rounded-md" /></div>
						<div className="absolute right-0 flex items-center pr-3 pointer-events-none">
							<svg className="h-3 w-3 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
							</svg>
						</div>
						<div className="flex h-full flex-col justify-center items-center gap-4 p-6">
							<a href="#">
							<h5 className="text-md font-md tracking-tight text-gray-900dark:text-white">Apple Watch Series 7 GPS</h5>
							</a>
							<div className="flex items-center justify-between flex-wrap gap-2">
								<span className="text-sm text-gray-900 dark:text-white">&#x20A6;{price.toLocaleString()}</span>
							</div>
						</div>
					</div>
  )
}

export default CheckoutItem