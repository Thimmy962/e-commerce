import React from 'react'

const AddressForm = () => {
  return (
    <div className='flex flex-col p-5 gap-7 rounded-2xl border dark:border-gray-800'>
					<div className='font-bold'>Delivery Info</div>
					<hr/>
					<div className='flex flex-col gap-4 justify-center items-center'>
					
						<form>
							<div className="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name*</label>
									<input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
								</div>
								<div>
									<label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name*</label>
									<input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
								</div>
							</div>
							<div className="mb-6">
								<label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Home address*</label>
								<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Home Address" required />
							</div>
							<div className="grid gap-6 mb-6 md:grid-cols-2">
								<div>
									<label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City*</label>
									<input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
								</div>
								<div>
									<label htmlFor="zip code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State*</label>
									<input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
								</div>
								<div>
									<label htmlFor="zip code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
									<input type="text" id="zip_code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="11011" />
								</div>
								<div>
									<label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone*</label>
									<input type="text" id="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="08011112233" required />
								</div>
							</div>
							<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
						</form>

					</div>
				</div>

  )
}

export default AddressForm