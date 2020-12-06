import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import EstablishmentItem from "./EstablishmentItem";
import { EST_URL } from "../../constants/api";

function EstablishmentList() {
    const [establishment, setEstablishment] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(EST_URL)
            .then(res => res.json())
            .then(json => {
                setEstablishment(json);

            })
            .then(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <h1 >

        <Spinner animation="border" className="spinner" variant="info" />Loading Store..</h1>

    return (
        <>
            {establishment.map(establishment => {
                const { id, name, price, price_adult, image, distance_city, rating, rating_font, establishment_type, max_guests, all_inclusive } = establishment;

                return (
                    <div>
                        <EstablishmentItem title={name} price={price} price_adult={price_adult} image={image} distance={distance_city} rating={rating} rating_font={rating_font} id={id} establishment_type={establishment_type} max_guests={max_guests} all_inclusive={all_inclusive} />
                    </div>
                );
            })}
        </>
    );
}

export default EstablishmentList;