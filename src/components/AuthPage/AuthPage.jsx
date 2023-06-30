import React from 'react'
import ComponentHeaderText from '../CustomComponents/ComponentHeaderText/ComponentHeaderText';
import ComponentAuthMedia from './ComponentAuthMedia/ComponentAuthMedia'
import ComponentAuthMediaImages from './ComponentAuthMediaImages/ComponentAuthMediaImages'
import AuthForm from './AuthForm/AuthForm'
import './AuthPage.css'

function AuthPage() {
	return (
		<div className='div_main'>
			<div className='div_left'>
				<div className='div_text'><ComponentAuthMedia style={{ fontSize: "20px" }} /></div >
				<div className='div_image'><ComponentAuthMediaImages /></div>
			</div>
			<div className='div_right'>
				<AuthForm />
			</div>
		</div >
	)
}

export default AuthPage

