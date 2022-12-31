import React, {useState, useEffect} from "react";
import LoadingSpin from "react-loading-spin";
import CountryCard from "./CountryCard";
import Table from 'react-bootstrap/Table';

const url = "https://restcountries.com/v3.1/all"

function CountriesFunc() {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);

    useEffect(() => {
        const getCountries = async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setCountries(data);
            } catch (e) {
                console.log(e);
            }
        };
        getCountries();
    }, []);

    // Get current country
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry);

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
                                {currentCountry.map((country) => (
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