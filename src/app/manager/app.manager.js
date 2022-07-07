import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

//...we import the css style file...
import './app.manager.css';

//...we import the translator
import { translator } from './app.translator';

//...we import the "screen" component...
import NotFoundScreen from '../site/module/notfound.module/screen/notfound_screen/notfound_screen.component';
import UserScreen from '../site/module/user.module/screen/user_screen/user_screen.component';
import UserRegisterScreen from '../site/module/user.module/screen/user_register_screen/user_register_screen.component';
import UserRecoveryScreen from '../site/module/user.module/screen/user_recovery_screen/user_recovery_screen.component';

//...we import the "view" component...
import SharedFooterView from '../site/module/shared.module/view/shared_footer_view/shared_footer_view.component';
import SharedFooterBottomView from '../site/module/shared.module/view/shared_footer_bottom_view/shared_footer_bottom_view.component';

//...component...
const AppManager = () => {

    //...states...
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('siteLanguage'));
    const [login, setLogin] = useState(false);

    //...
    useEffect(() => {
        const setLanguage = async () => {
            let codeLanguage = window.navigator.userLanguage || window.navigator.language;
            let language = await codeLanguage.substring(0, 2);
            localStorage.setItem('siteLanguage', language);
        };
        setLanguage();
    }, []);

    //...render...
    return (
        <Fragment>
            <BrowserRouter>
                <Navbar expand='lg' className='app_manager-nav my-container'>
                    <div id='app_manager-menuadmin'>
                        <div>
                            <Nav>
                                <NavLink to='/' className='app_manager-nav-logo'>LOGO</NavLink>
                            </Nav>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='app_manager-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav' className='app_manager-nav'>
                        <Nav className='me-auto'>
                            <NavLink to='/' className='app_manager-link'>{translator(siteLanguage).home}</NavLink>
                            <NavLink to='/contact' className='app_manager-link'>{translator(siteLanguage).contact}</NavLink>
                            <NavLink to='/product' className='app_manager-link'>{translator(siteLanguage).product}</NavLink>
                        </Nav>
                        {login === false &&
                            <Nav>
                                <NavLink to='/user/register' className='app_manager-link'>{translator(siteLanguage).register}</NavLink>
                                <NavLink to='/user/recovery' className='app_manager-link'>{translator(siteLanguage).recovery}</NavLink>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route index element={<UserRegisterScreen />} />
                    <Route path='/' element={<UserRegisterScreen />} />
                    <Route path='home' element={<UserRegisterScreen />} />
                    <Route path='user' element={<UserScreen />} >
                        <Route path='register' element={<UserRegisterScreen />} />
                        <Route path='recovery' element={<UserRecoveryScreen />} />
                    </Route>
                    <Route path='*' element={<NotFoundScreen />} />
                </Routes>
                <SharedFooterView />
                <SharedFooterBottomView />
            </BrowserRouter>
        </Fragment>
    )
}


//...we export the "manager" component...
export default AppManager;