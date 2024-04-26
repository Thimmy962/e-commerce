import Header from './Components/Header'
import Homepage from './UserPages/Homepage'
import {Route, Routes} from 'react-router-dom'
import {CustomFooter} from './Components/Footer'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import LoginForm from './AdminPages/Login';
import ProductForm from './AdminPages/AddProduct';
import {useEffect, useState} from 'react'
import PrivateRoutes from './utils/Privateroute'
import { AuthProvider } from './utils/Context';
import Detailpage from './UserPages/Detailpage';
import PageNotFound from './UserPages/PageNotFound';
import CheckOut from './UserPages/CheckOut';
import {API_BASE_URL} from './Components/Config'


function App(){

	const [categoryId, setCategoryId] = useState({})

	const [data, setData] = useState(()=>{return []})
	const [error, setError] = useState(()=>{return null})

	const fetchData = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/categories`, {
				method: "GET",
				headers:{
					'Content-Type': 'application/json'
				}
			})
			const data = await response.json()
			setData(data);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
        

        fetchData();
    }, []);


  return (
	<AuthProvider>
		<Flowbite >
			<DarkThemeToggle className='focus:none'/>

			<Header 
			darkThemeToggle={<DarkThemeToggle />} 
			{...(error ? { error: error } : { categories: data })} 
			setCategoryId={setCategoryId} 
			/>
			<Routes>
				<Route path='/' element={<Homepage />} {...{categoryId}}/>
				<Route path='/login' element={<LoginForm />} {...(error ? { error: error } : { categories: data })} />
				<Route path = '/detail/:id' element = {<Detailpage />} />
				<Route path='/checkout' element = {<CheckOut />} />
				<Route element={<PrivateRoutes />}>
					<Route path='/admin/add' element={<ProductForm {...{categories: data}}/>}/>
            	</Route>
				<Route path='*' element = {<PageNotFound />} />
			</Routes>
			<CustomFooter />
		</Flowbite>
	</AuthProvider>
  )
}

export default App  