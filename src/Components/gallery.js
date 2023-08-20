import React from 'react'
import './gallery.css'
import ImgAsset from '../public'
import NAV from "./NAV"
export default function Gallery () {
	return (
		<div className='gallery_gallery'>
			<div className='Rectangle1'/>
			<span className='LOGO'>LOGO</span>
			<NAV className='NAV'/>
			<span className='GALLERY'>GALLERY</span>
			<span className='CHURCH'>CHURCH</span>
			<span className='EVENTS'>EVENTS</span>
			<div className='Rectangle2'/>
			<span className='LOGO_1'>LOGO</span>
			<span className='Addresslocation'>Address.......<br/>location.......</span>
			<span className='_123456789987654321'>123456789<br/>987654321</span>
			<span className='namegmailcom'>name.....@gmail.com</span>
			<span className='ContactUs'>Contact Us</span>
			<span className='UsefulLinks'>Useful Links</span>
			<span className='SocialMedia'>Social Media</span>
			<span className='Support'>Support</span>
			<span className='Address'>Address</span>
			<span className='Phone'>Phone</span>
			<span className='Email'>Email</span>
			<span className='HOME'>HOME</span>
			<span className='NEWS'>NEWS</span>
			<span className='GALLERY_1'>GALLERY</span>
			<span className='Contact'>Contact</span>
			<span className='ABOUTUS'>ABOUT US</span>
			<img className='Subtract' src = {ImgAsset.gallery_Subtract} />
			<img className='Subtract_1' src = {ImgAsset.gallery_Subtract_1} />
			<img className='Subtract_2' src = {ImgAsset.gallery_Subtract_2} />
			<img className='Subtract_3' src = {ImgAsset.gallery_Subtract_3} />
			<span className='_2023AllRightsReservedby'>© 2023 All Rights Reserved by</span>
			<div className='Rectangle9'/>
			<div className='Rectangle13'/>
			<div className='Rectangle11'/>
			<div className='Rectangle14'/>
			<div className='Rectangle10'/>
			<div className='Rectangle15'/>
			<div className='Rectangle12'/>
			<div className='Rectangle16'/>
			<div className='Rectangle8'/>
			<div className='Rectangle17'/>
			<span className='viewAll'>view All</span>
			<span className='viewAll_1'>view All</span>
			<span className='LOGO_2'>LOGO</span>
			<div className='Rectangle3'/>
			<div className='Rectangle18'/>
			<span className='PHOTO'>PHOTO</span>
			<span className='PHOTO_1'>PHOTO</span>
			<span className='PHOTO_2'>PHOTO</span>
			<span className='PHOTO_3'>PHOTO</span>
			<span className='PHOTO_4'>PHOTO</span>
			<span className='PHOTO_5'>PHOTO</span>
			<span className='PHOTO_6'>PHOTO</span>
			<span className='PHOTO_7'>PHOTO</span>
		</div>
	)
}