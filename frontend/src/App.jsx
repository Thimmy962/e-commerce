import Header from './Components/Header'
import Homepage from './UserPages/Homepage'
import {Route, Routes} from 'react-router-dom'
import {CustomFooter} from './Components/Footer'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import LoginForm from './AdminPages/Login';
import ProductForm from './AdminPages/AddProduct';
import {useState} from 'react'
import PrivateRoutes from './utils/Privateroute'
import { AuthProvider } from './utils/Context';
import Detailpage from './UserPages/Detailpage';
import PageNotFound from './UserPages/PageNotFound';
import CheckOut from './UserPages/CheckOut';

function App(){

	const [selectedCategory, setSelectedCategory] = useState('');

	const categories = ['Category 1', 'Category 2', 'Category 3'];
  
	const handleCategoryChange = (category) => {
	  setSelectedCategory(category);
	};

  return (
	<AuthProvider>
		<Flowbite >
			<DarkThemeToggle className='focus:none'/>
			<Header darkThemeToggle = {<DarkThemeToggle />} categories={categories} onCategoryChange={handleCategoryChange}/>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path = '/detail/:id' element = {<Detailpage />} />
				<Route path='/checkout' element = {<CheckOut />} />

				<Route element={<PrivateRoutes />}>
					<Route path='/admin/add' element={<ProductForm />} />
            	</Route>
				<Route path='*' element = {<PageNotFound />} />
			</Routes>
			<CustomFooter />
		</Flowbite>
	</AuthProvider>
  )
}

export default App  