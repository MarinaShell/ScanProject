import React from 'react'
import ComponentImage from '../../CustomComponents/ComponentImage/ComponentImage';
import MyDocument from './images/Document.svg';
import MyFolders from './images/Folders.svg';
import MyGuy from './images/guy.svg';
import './SearchPageMediaImage.css'

function ComponentAuthMediaImages() {
	return (
		<div>
			<div className='container-images'>
				<div className='my-document'><ComponentImage img source={MyDocument} width="100px" height="100px" /></div>
				<div className='my-folders'><ComponentImage img source={MyFolders} width="100px" height="100px" /></div>
				<div className='my-guy'><ComponentImage img source={MyGuy} /></div>
			</div>
		</div >
	)
}

export default ComponentAuthMediaImages