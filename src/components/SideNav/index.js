import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { home } from 'react-icons-kit/icomoon/home';
import { profile } from 'react-icons-kit/icomoon/profile';
 import { cog } from 'react-icons-kit/icomoon/cog'; 


//specify the base color/background of the parent container if needed
export default class MySideNav extends React.Component{
    constructor(props) {
        super(props);
        this.onItemSelection = this.onItemSelection.bind(this);
    }

    onItemSelection(id, parent) {
        console.log(id, parent)
    }

    render () {
        return (
            <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
                <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='home' onItemSelection={this.onItemSelection}>       
                    <Nav id='home'>
                        <NavIcon><SvgIcon size={20} icon={home}/></NavIcon>    
                        <NavText> Home </NavText>
                    </Nav>
                    <Nav id='profile'>
                        <NavIcon><SvgIcon size={20} icon={profile}/></NavIcon>
                        <NavText> Profile </NavText>
                    </Nav>   
                    <Nav id='settings'>
                        <NavIcon><SvgIcon size={20} icon={cog}/></NavIcon>
                        <NavText> Settings </NavText>
                    </Nav>
                    
                </SideNav>
            </div>
        )
    }
}
