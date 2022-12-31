import React from "react"
import { GrNext } from "react-icons/gr";
import {Link} from "react-router-dom";

const urlInfo = "https://restcountries.com/v3.1/name/{name}";

function CountryCard ({flags, name, region, population, languages}){
    let languagesdata = Object.values(languages)
    return (
        <tr>
            <td><img style={{ width: "20%" }}  src={flags.svg} alt="" /></td>
            <td>{name.common}</td>
            <td>{region}</td>
            <td>{population.toLocaleString()}</td>
            <td>
                {
                    languagesdata.map(language => (
                        <li>{language}</li>
                    ))
                }
            </td>
            <td>
                <Link to={`/${name.common}`}>
                    <GrNext />
                </Link>
            </td>
        </tr>
    )
}
export default CountryCard;