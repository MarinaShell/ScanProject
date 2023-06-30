import React from 'react'
import ComponentHeaderText from '../../CustomComponents/ComponentHeaderText/ComponentHeaderText';
import { useTheme, useMediaQuery } from '@mui/material';
function ComponentAuthMedia() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<ComponentHeaderText style={{textAlign: "left", fontSize: matches ? "22px" : "40px", lineHeight: matches ? "26px" : "48px" }}> Для оформления подписки
			<br />на тариф, необходимо <br />авторизоваться.
		</ComponentHeaderText>
	)
}

export default ComponentAuthMedia