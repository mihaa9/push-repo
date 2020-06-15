import React from 'react';
import {Link} from 'react-router-dom';

function Cetvrta() {
    return (
        <div>

            <div className="menu">

            <Link to="/" className="link">Naslovna</Link>
            <Link to="/Druga" className="link2">Osobni podaci</Link>
            <Link to="/Treca" className="link3">UFC karijera</Link>
            <Link to="/Cetvrta" className="link3">Dokumentarac</Link>
            <Link to="/Peta" className="link3">Galerija</Link>

            </div>

            <iframe width="700" height="500" src="https://www.youtube.com/embed/E6KEHhYPCAs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
            
        </div>
    );
}
export default Cetvrta;