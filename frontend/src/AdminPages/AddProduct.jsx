import React, { useContext, useState } from 'react';
import AuthContenxt from '../utils/Context';
import { API_BASE_URL } from '../Components/Config';


function ProductForm({categories}) {

const {tokens} = useContext(AuthContenxt)  

const [selectedOption, setSelectedOption] = useState("1");

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};

  const [product, setProduct] = useState({
    name: '',
    price: '',
    images: [] // Array to store selected images
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...product.images];
    updatedImages[index] = files[0];
    setProduct({ ...product, images: updatedImages });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...product.images];
    updatedImages.splice(index, 1);
    setProduct({ ...product, images: updatedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let images = []

    for (const image of product.images) {
      const reader = new FileReader();
      reader.onload = (event) => {
          const base64ImageData = event.target.result;
          images.push(base64ImageData);
      };
      reader.readAsDataURL(image);
  }

  // Wait for all images to be read and encoded before proceeding
  await Promise.all(product.images.map(imageFile => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
          const base64ImageData = event.target.result;
          images.push(base64ImageData);
          resolve();
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageFile);
  })));
  
    const formData = {
        'name': product.name,
        'price': product.price,
        'category': selectedOption,
        'images': images
    }

    console.log(JSON.stringify(formData))

    try {
      const response = await fetch(`${API_BASE_URL}/`, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + tokens.access,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Handle success, reset form, etc.
    } catch (error) {
      console.log('Error creating product:', error);
      // Handle error
    }
  };

  const addImageInput = () => {
    setProduct({ ...product, images: [...product.images, null] });
  };

  return (

            <form onSubmit={handleSubmit} className="space-y-6 m-full mx-auto p-6 bg-white rounded shadow-md mt-20">

<div>
          <h2 className="text-center text-2xl font-semibold text-gray-900">New Product</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Add A New Product
          </p>
        </div>
                <label> <span className="text-gray-700">Product Name:</span><input type="text" name="name" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                value={product.name} onChange={handleInputChange} required/></label>
                <br />

                <label><span className="text-gray-700">Price:</span><input type="number" name="price" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                value={product.price} onChange={handleInputChange} required /></label>
                <br />

                <label><span className="text-gray-700">Category:</span>
                <select name="category" id=""  value = {selectedOption} onChange={handleOptionChange} className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 
                focus:border-blue-600 sm:text-sm'>
                    <option value="" disabled>Choose a category</option>
                    {
                        categories.map((category, index) =>(
                            <option type="text" name="category" id="" value={category.id} key={index}>{category.category}</option>
                        ))
                    }
                </select>
                </label>
                <br />

                {product.images.map((image, index) => (
                <div key={index} className="flex items-center space-x-2">

                <label className="flex items-center space-x-2">
                    <span className="text-gray-700">Image {index + 1}:</span> <input type="file" onChange={(e) => handleImageChange(e, index)} accept="image/*"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm" required />
                </label>

          <button type="button" onClick={() => handleRemoveImage(index)} className="px-3 py-1 bg-red-500 text-white rounded-md focus:outline-none focus:bg-red-600">
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addImageInput}
        className="px-3 py-1 bg-blue-600 text-white rounded-md focus:outline-none focus:bg-blue-600"
      >
        Add Image
      </button>
                <br />
                <button type="submit">Submit</button>
            </form>
  );
}

export default ProductForm;