import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sidenav_items'

const Nav = (props) => {
    return (
        <div>
            <SideNav
                showNav = {props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxwidth: '220px'
                }}
            >
            
            <SideNavItems />

            </SideNav>          
        </div>
    )
}
export default Nav;