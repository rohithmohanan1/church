import React from 'react'
import './PAYMENT.css'
import ImgAsset from '../public'
export default function PAYMENT () {
	return (
		<div className='PAYMENT_PAYMENT'>
			<div className='Rectangle39'/>
			<span className='LOGO'>LOGO</span>
			<span className='Itemname'>Item name </span>
			<span className='Contactus'>Contact us:</span>
			<span className='TermsandConditions'>Terms and Conditions</span>
			<span className='_123456789'>123456789</span>
			<span className='namegmailcom'>name@gmail.com</span>
			<div className='Rectangle40'/>
			<div className='Rectangle46'/>
			<div className='Rectangle47'/>
			<span className='Pay000'>Pay $0.00</span>
			<span className='PaymentDetails'>Payment Details</span>
			<span className='Amount'>Amount*</span>
			<span className='Name'>Name*</span>
			<span className='Email'>Email*</span>
			<span className='Phone'>Phone*</span>
			<span className='Date'>Date*</span>
			<span className='message'>message*</span>
			<div className='Rectangle41'/>
			<div className='Rectangle48'/>
			<div className='Rectangle42'/>
			<div className='Rectangle43'/>
			<div className='Rectangle44'/>
			<div className='Rectangle45'/>
			<img className='pay_methods_branding1' src = {ImgAsset.PAYMENT_pay_methods_branding1} />
			<div className='iconphone'>
				<img className='Vector' src = {ImgAsset.PAYMENT_Vector} />
			</div>
			<div className='iconenvelope'>
				<div className='Group'>
					<img className='Vector_1' src = {ImgAsset.PAYMENT_Vector_1} />
					<img className='Vector_2' src = {ImgAsset.PAYMENT_Vector_2} />
				</div>
			</div>
			<span className='YouraccesstoanduseofLoremIpsumtheappissubjectexclusivelytotheseTermsandConditionsYouwillnotusetheappforanypurposethatisunlawfulorprohibitedbytheseTermsandConditions'>Your access to and use of Lorem Ipsum (the app) is subject exclusively to these Terms and Conditions. You will not use the app for any purpose that is unlawful or prohibited by these Terms and Conditions.</span>
		</div>
	)
}