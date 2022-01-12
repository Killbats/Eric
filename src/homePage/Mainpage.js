import React from 'react';
// import Tier from '../tierList/tier.js';
import './mainpage.css';
import { Link } from "react-router-dom";
// import Rank from '../rankElement/rank';

function Mainpage(){
    return(
        <div>
            <nav>
                <div className="logo">
                    <ul className='linku'>
                        <li><Link to="/">Tier </Link></li>
                        <li><Link to="/rank">Rank Per Element</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                </div>
            </nav>
            {/* <Tier/> */}
        </div>
    )
}

export default Mainpage;