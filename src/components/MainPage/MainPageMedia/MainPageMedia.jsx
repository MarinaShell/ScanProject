import React from 'react'
import ComponentImage from '../../CustomComponents/ComponentImage/ComponentImage';
import MyImage from './images/Group14.svg';

function MainPageMedia() {
	return (
		<div>
			{/* для адаптации изображения важно указать width и height 100% */}
			<ComponentImage img source={MyImage} width="100%" height="100%" />
		</div>
	)
}

export default MainPageMedia