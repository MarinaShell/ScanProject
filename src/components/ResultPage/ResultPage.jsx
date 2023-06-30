import React from 'react';
import { CustomContainer } from '../CustomComponents/CustomContainer/CustomContainer';
import { SearchResultSummary } from './SearchResultSummary/SearchResultSummary';
import SearchResultHeader from "./SearchResultHeader/SearchResultHeader";
import SearchDoc from './SearchDoc/SearchDoc';

const ResultPage = () => {
	return (
		<CustomContainer>
			<SearchResultHeader />
			<SearchResultSummary />
			<SearchDoc />
		</CustomContainer>
	)
}

export { ResultPage }