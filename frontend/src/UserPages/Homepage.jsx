import { Card, Button } from 'flowbite-react';
import React, { useState, useEffect, useContext } from 'react';
import Banner from '../Components/Banner';
import AuthContenxt from '../utils/Context';
import { API_BASE_URL } from '../Components/Config';
import {Loading} from '../Components/LoadingError';


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


const Homepage = ({ categoryId }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(()=>{return true})


  const {user} = useContext(AuthContenxt)


  // Fetch products based on the selected category
  useEffect(() => {
    // Fetch products based on the selected category
    const fetchProducts = async (id) => {
		console.log(`categoryId is ${categoryId}`)
      try {
        const response = await fetch(`${API_BASE_URL}?query=${id}`); // Fetch data from the API
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json(); // Parse response data
        setProducts(data); // Set products state with fetched data
      } catch (error) {
        console.error('Error fetching products:', error.message);
        // Handle error state or show an error message to the user
      }
	  finally{
		setLoading(false);
	  }
    };

    fetchProducts(); // Call the fetchProducts function
  }, []);


  if (loading){
	return(
		<Loading />
	);
  }

  
  if(user){

    return (
		<div className='dark:bg-gray-900 pt-20'>
		<div className='bg-transparent text-4xl flex justify-center text-center decoration-double text-gray-900 dark:text-white p-10
		font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl transition'>Products</div>
  
		<div className="grid  grid-col-1 md:grid-cols-2  lg:grid-cols-4 gap-4 justify-center align-middle items-center">
			  {
				  products.map((product, index) =>(
					  <Card
						  key = {product.id}
						  className="max-w-sm"
						  imgAlt="Apple Watch Series 7 in colors pink, silver, and black"

						//    used the images above since ive not added an image to any of the products
						  imgSrc={imgSrc[index]}
						  >
						  <a href="#">
							  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							  {product.name}
							  </h5>
						  </a>
  
						  	<div className="flex items-center justify-between flex-wrap gap-2">
							<span className="text-3xl font-bold text-gray-900 dark:text-white">&#x20A6;{product.price.toLocaleString()}</span>
							<a href={`/detail/${product.id}`}>
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

<div className="grid  grid-col-1 md:grid-cols-2  lg:grid-cols-4 gap-4 justify-center align-middle items-center">
			  {
				  products.map((product, index) =>(
					  <Card
						  key = {product.id}
						  className="max-w-sm"
						  imgAlt="Apple Watch Series 7 in colors pink, silver, and black"

						//    used the images above since ive not added an image to any of the products
						  imgSrc={imgSrc[index]}
						  >
						  <a href="#">
							  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							  {product.name}
							  </h5>
						  </a>
  
						  	<div className="flex items-center justify-between flex-wrap gap-2">
							<span className="text-3xl font-bold text-gray-900 dark:text-white">&#x20A6;{product.price.toLocaleString()}</span>
							<a href={`/detail/${product.id}`}>
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