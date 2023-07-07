import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import SearchPageHeader from "./SearchPageHeader/SearchPageHeader";
import SearchPageText from "./SearchPageText/SearchPageText";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
// import './SearchPage.css'

function SearchPage() {
    return (
        <CustomContainer>
            {/* <div style={{ display: "flex", marginTop: "40px", flexWrap: "wrap" }}> */}
                <div>
                    <SearchPageHeader />
                    <SearchPageText />
                    <SearchForm />
                </div>
                
            {/* </div> */}
        </CustomContainer>
    );
}

export default SearchPage;
