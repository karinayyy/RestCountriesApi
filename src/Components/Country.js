import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Avatar from 'react-avatar';
import { GrPrevious} from "react-icons/gr";
import { GoLocation } from "react-icons/go";

function CountryFunc () {
    const [country, setCountry] = useState([]);
    const {name} = useParams();
    let countryData = Object.values(country);

    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await response.json();
                setCountry(data);
            }catch (e) {
                console.log(e);
            }
        };
        getCountry();
    }, [name]);
    return (
        <>
            {countryData.map((item) => (
                <Card style={{ width: '18rem' }}>
                    <div className="flexbox-container">
                        <Avatar name={item.name.common.charAt(0)} size="50" round={true} />
                            {item.name.common}
                    </div>
                    <Card.Body>
                        <Card.Img
                              src={item.flags.svg}  />
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link to={`/`}>
                            <GrPrevious />
                        </Link>
                        <Card.Link href={item.maps.googleMaps}>
                            <GoLocation />
                        </Card.Link>

                    </Card.Body>
                </Card>
            ))}
        </>
    );

}
export default CountryFunc;