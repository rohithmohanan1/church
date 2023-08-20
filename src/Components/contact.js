import React from 'react'
import './contact.css'
import ImgAsset from '../public'
import NAV from "./NAV"
export default function Contact () {
	return (
		<div className='contact_contact'>
			<div className='Rectangle1'/>
			<span className='LOGO'>LOGO</span>
			<span className='LOGO_1'>LOGO</span>
			<NAV className='NAV'/>
			<div className='Rectangle7'/>
			<span className='CONTACTUS'>CONTACT US</span>
			<span className='Sentusamessage'>Sent us a message</span>
			<div className='Rectangle3'/>
			<div className='Rectangle4'/>
			<div className='Rectangle5'/>
			<div className='Rectangle6'/>
			<span className='Name'>Name*</span>
			<span className='Phone'>Phone*</span>
			<span className='Email'>Email*</span>
			<span className='Message'>Message*</span>
			<div className='Rectangle8'/>
			<span className='Send'>Send</span>
			<div className='Rectangle2'/>
			<span className='LOGO_2'>LOGO</span>
			<span className='Addresslocation'>Address.......<br/>location.......</span>
			<span className='_123456789987654321'>123456789<br/>987654321</span>
			<span className='namegmailcom'>name.....@gmail.com</span>
			<span className='ContactUs'>Contact Us</span>
			<span className='UsefulLinks'>Useful Links</span>
			<span className='SocialMedia'>Social Media</span>
			<span className='Support'>Support</span>
			<span className='Address'>Address</span>
			<span className='Phone_1'>Phone</span>
			<span className='Email_1'>Email</span>
			<span className='Addresslocation_1'>Address.......<br/>location.......</span>
			<span className='_123456789987654321_1'>123456789<br/>987654321</span>
			<span className='namegmailcom_1'>name.....@gmail.com</span>
			<span className='Address_1'>Address</span>
			<span className='Phone_2'>Phone</span>
			<span className='Email_2'>Email</span>
			<span className='HOME'>HOME</span>
			<span className='NEWS'>NEWS</span>
			<span className='GALLERY'>GALLERY</span>
			<span className='Contact'>Contact</span>
			<span className='ABOUTUS'>ABOUT US</span>
			<img className='Subtract' src = {ImgAsset.contact_Subtract} />
			<img className='Subtract_1' src = {ImgAsset.contact_Subtract_1} />
			<img className='Subtract_2' src = {ImgAsset.contact_Subtract_2} />
			<img className='Subtract_3' src = {ImgAsset.contact_Subtract_3} />
			<img className='map1' src = {ImgAsset.Newsandevents_map1} />
			<span className='_2023AllRightsReservedby'>© 2023 All Rights Reserved by</span>
		</div>
	)
}