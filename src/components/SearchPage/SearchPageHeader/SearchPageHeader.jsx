import React from 'react'
import ComponentHeaderText from '../../CustomComponents/ComponentHeaderText/ComponentHeaderText';

function SearchPageHeader() {
	return (
		<div>
			<ComponentHeaderText className="fsz-header" style={{
				fontWeight: "900",
				marginTop: "20px",
				textAlign: "left",
			}}> Найдите необходимые <br />данные в пару кликов.
			</ComponentHeaderText></div >
	)
}

export default SearchPageHeader