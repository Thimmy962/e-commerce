import React, { useContext, useState } from 'react';
import AuthContenxt from '../utils/Context';

const categories = [
    {'id': 1, 'category': 'Men'},
    {'id': 2, 'category': 'Women'},
    {'id': 3, 'category': 'Children'}
]

function ProductForm() {

const {user} = useContext(AuthContenxt)  

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category:'',
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
    product.images.forEach((image) => {
        images.append(image)
    })

    const formData = {
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'category': product.category,
        'images': images
    }


    try {
      const response = await axios.post('/api/products/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product created:', response.data);
      // Handle success, reset form, etc.
    } catch (error) {
      console.error('Error creating product:', error);
      // Handle error
    }

    console.log(formData)
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

                <label><span className="text-gray-700">Description:</span><textarea name="description" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                value={product.description} onChange={handleInputChange} required/></label>
                <br />

                <label><span className="text-gray-700">Price:</span><input type="number" name="price" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                value={product.price} onChange={handleInputChange} required /></label>
                <br />

                <label><span className="text-gray-700">Category:</span>
                <select name="category" id="" onChange={handleInputChange} className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-600 
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