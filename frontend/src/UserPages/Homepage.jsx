import { Card, Button } from 'flowbite-react';
import React, { useState, useEffect, useContext } from 'react';
import Banner from '../Components/Banner';
import AuthContenxt from '../utils/Context';


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


const Homepage = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  const {user} = useContext(AuthContenxt)


  // Fetch products based on the selected category
  useEffect(() => {
    // Replace this with your actual fetch logic
    // For demonstration, let's assume products are fetched from an API
    const fetchProducts = async () => {
      try {


        console.log(selectedCategory)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (selectedCategory) {
      fetchProducts();
    }
  }, [selectedCategory]);

  if(user){

    return (
		<div className='dark:bg-gray-900 pt-20'>
		<div className='bg-transparent text-4xl flex justify-center text-center decoration-double text-gray-900 dark:text-white p-10
		font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl transition'>Products</div>
  
		<div className="grid  grid-col-1 md:grid-cols-2  lg:grid-cols-4 gap-4 justify-center align-middle">
			  {
				  imgSrc.map((img, index) =>(
					  <Card
						  key = {index}
						  className="max-w-sm"
						  imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
						  imgSrc={img}
						  >
						  <a href="#">
							  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
							  </h5>
						  </a>
  
						  					<div className="flex items-center justify-between flex-wrap gap-2">
							<span className="text-3xl font-bold text-gray-900 dark:text-white">&#x20A6;599</span>
							<a href={`/detail/${index}`}>
							<Button  size='xs' color="gray" className='dark:text-white text-white bg-blue-700 hover:bg-blue-800
							font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
								Edit
							</ Button>
						</a>

						</div>

					  </Card>
				  ))
			  }
	   </div>
	  </div>
    );
  };

  return (
    <div className='dark:bg-gray-900 pt-10 pb-10'>
      <Banner />

      <div className='bg-transparent text-4xl flex justify-center text-center decoration-double text-gray-900 dark:text-white p-10
	  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl transition'>Our Products</div>

      <div className="grid  grid-col-1 md:grid-cols-2  lg:grid-cols-4 gap-4 justify-center align-middle">
			{
				imgSrc.map((img, index) =>(
					<Card
						key = {index}
						className="max-w-sm"
						imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
						imgSrc={img}
						>
						<a href="#">
							<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
							</h5>
						</a>

						<div className="flex items-center justify-between flex-wrap gap-2">
							<span className="text-3xl font-bold text-gray-900 dark:text-white">&#x20A6;599</span>
							<a href={`/detail/${index}`}>
							<Button  size='xs' color="gray" className='dark:text-white text-white bg-blue-700 hover:bg-blue-800
							font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
								View
							</ Button>
						</a>

						</div>
					</Card>
				))
			}
     </div>
    </div>
  );

}


export default Homepage;