import React, {useContext, useEffect, useState} from 'react';
import AuthContenxt from '../utils/Context';
import { useLocation } from 'react-router-dom';
import { NonUserHeaderComponent, UserHeaderComponent } from './HeaderComponent';


  const Header = ({ darkThemeToggle, categories, setCategoryId}) => {

    const location = useLocation()

    const {user, logout} = useContext(AuthContenxt)



    if(user){
        return (
            <UserHeaderComponent {...{categories, darkThemeToggle, user, logout}}/>
        );
    }

    return (
        <NonUserHeaderComponent {...{categories, darkThemeToggle}}/>
    );

};

export default Header;