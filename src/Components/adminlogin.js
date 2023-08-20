import React from 'react'
import './adminlogin.css'
import ImgAsset from '../public'
export default function Adminlogin () {
	return (
		<div className='adminlogin_adminlogin'>
			<span className='LOGO'>LOGO</span>
			<div className='Rectangle40'/>
			<div className='Group1'>
				<div className='Rectangle48'/>
				<div className='Rectangle49'/>
			</div>
			<span className='admin'>admin</span>
			<div className='Group'>
				<img className='Vector' src = {ImgAsset.adminlogin_Vector} />
				<img className='Vector_1' src = {ImgAsset.adminlogin_Vector_1} />
			</div>
			<div className='Group_1'>
				<img className='Vector_2' src = {ImgAsset.adminlogin_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.adminlogin_Vector_3} />
			</div>
			<div className='Rectangle99'/>
			<span className='Login'>Login</span>
			<span className='Username'>Username</span>
			<span className='Passsword'>Passsword</span>
		</div>
	)
}