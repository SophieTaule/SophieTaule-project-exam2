import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import HotelsItem from "./HotelsItem";
import { EST_URL } from "../../constants/api";

function HotelsList() {
    const [filterSearch, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(EST_URL)
            .then(res => res.json())
            .then(json => {
                setFilter(json.filter(function (fil) {

                    if (fil.category === 2) {
                        return true;
                    }
                    return false;
                }));
            })
            .then(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);


    if (loading) return <h1 >
        <Spinner animation="border" className="spinner" variant="info" />Loading..</h1>

    return (
        <>
            {filterSearch.map(establishment => {
                const { id, name, price, price_adult, image, distance_city, rating, establishment_type } = establishment;

                return (
                    <div>
                        <HotelsItem title={name} price={price} price_adult={price_adult} image={image} distance={distance_city} rating={rating} id={id} establishment_type={establishment_type} />
                    </div>
                );
            })}
        </>
    );
}

export default HotelsList;