import React from 'react';
import {Link} from 'react-router-dom';
import './NAV.css';
export default function NAV (props) {
	return (
		<div className={`NAV_NAV ${props.className}`}>
			<Link to='/'><span className='HOME'>HOME</span></Link>
			<Link to='/Newsandevents'><span className='NEWS'>NEWS</span></Link>
			<Link to='/History'><span className='HISTORY'>HISTORY</span></Link>
			<Link to='/aboutus'><span className='ABOUTUS'>ABOUT US</span></Link>
			<Link to='/contact'><span className='CONTACT'>CONTACT</span></Link>
			<Link to='/onlineofferings'><span className='ONLINEOFFERING'>ONLINE OFFERING</span></Link>
			<Link to='/gallery'><span className='GALLERY'>GALLERY</span></Link>
		</div>
	)
}