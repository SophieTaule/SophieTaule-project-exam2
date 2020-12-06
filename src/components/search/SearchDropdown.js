import React, { useState, useEffect } from "react";
import { EST_URL } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import SearchDropdownItem from "./SearchDropdownItem";
import Search from "./Search";

function SearchDropdown() {
    const [establishment, setEstablishment] = useState(null);
    const [filterSearch, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(EST_URL)
            .then(res => res.json())
            .then(json => {
                setEstablishment(json);
                setFilter([]);
            })
            .then(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterData = function (e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = establishment.filter(function (fil) {
            const lowerCaseName = fil.name.toLowerCase();

            if (lowerCaseName.includes(searchValue)) {
                return true;
            }
            return false;
        });
        if (searchValue.length === 0)
            setFilter([]);
        else
            setFilter(filteredArray);
    };


    if (loading) return <h1 >
        <Spinner animation="border" className="spinner" variant="info" />Loading..</h1>

    return (
        <>
            <Search className="Search" filterSearch={filterData} />
            {filterSearch.map(establishment => {
                const { id, name, price, price_adult, image, distance_city, rating, establishment_type } = establishment;
                return (
                    <>
                        <SearchDropdownItem title={name} price={price} price_adult={price_adult} image={image} distance={distance_city} rating={rating} id={id} establishment_type={establishment_type} />
                    </>
                );
            })}
        </>
    );
}

export default SearchDropdown;