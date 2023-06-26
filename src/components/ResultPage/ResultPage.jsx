import React from 'react';
import { CustomContainer } from '../CustomComponents/CustomContainer/CustomContainer';
import { SearchResultSummary } from './SearchResultSummary/SearchResultSummary';
import SearchResultHeader from "./SearchResultHeader/SearchResultHeader"
const ResultPage = () => {
  return (
    <CustomContainer>
      <SearchResultHeader />
      <SearchResultSummary/>      
    </CustomContainer>
  )
}

export { ResultPage }