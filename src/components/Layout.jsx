/* ⭐ 전체 레이아웃 */
import { NavLink, Outlet } from 'react-router-dom';
import BtnBack from './BtnBack';

const Layout = () => {
    const crrPageStyle = {
        color: 'green',
        fontWeight: 'bold'
    };

    return (
        <div>
            <NavLink 
            style={({isActive}) => (
                isActive ? crrPageStyle : undefined
            )}
            to="/">Home |</NavLink>

            <NavLink 
            style={({isActive}) => (
                isActive ? crrPageStyle : undefined
            )}
            to="/about">About |</NavLink>
            
            <NavLink 
            style={({isActive}) => (
                isActive ? crrPageStyle : undefined
            )}
            to="/boardlist">Board</NavLink>

            <main>
                <Outlet />
            </main>

            <BtnBack />

        </div>
    );
};

export default Layout;