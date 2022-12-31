import React, {useState, useEffect} from "react";
import LoadingSpin from "react-loading-spin";
import CountryCard from "./CountryCard";
import Table from 'react-bootstrap/Table';

const url = "https://restcountries.com/v3.1/all"

function CountriesFunc() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setCountries(data.slice(0,10));
            } catch (e) {
                console.log(e);
            }
        };
        getCountries();
    }, []);

    return(
        <>
            {
                !countries ?  (<LoadingSpin />
                    ) : (
                        <>
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>Flag</th>
                                        <th>Name</th>
                                        <th>Region</th>
                                        <th>Population</th>
                                        <th>Languages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {countries.map((country) => (
                                    <CountryCard key={country.name.common} {...country} />
                                ))}
                                </tbody>
                            </Table>
                        </>
                    )

            }
        </>
    )


}
export default CountriesFunc;