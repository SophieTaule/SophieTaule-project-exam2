import React from 'react';
import HotelsList from "./HotelsList";
import Review from "../module/Review";
import Container from "react-bootstrap/Container";
import Footer from "../layout/Footer"
import SearchDropdown from "../search/SearchDropdown";

function Hotels() {
    return (
        <div className="hotels">
            <div className="establishment__search--background">
                <img className="establishment__search--background-img" variant="top" src="./bergen.jpg" alt="establishment img small" />
                <div className="establishment__search--container">
                    <SearchDropdown />
                </div>
            </div>
            <Container className="card-container">
                <HotelsList />
            </Container>
            <Container>
                <Review />
            </Container>
            <Footer />
        </div >
    );
}
export default Hotels;