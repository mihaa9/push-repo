import React from 'react';
import {Link} from 'react-router-dom';
import Naslovna from './naslovna.jpg';

function Prva() {
    return (
        
        <div>

            <div className="menu">

            <Link to="/" className="link">Naslovna</Link>
            <Link to="/Druga" className="link2">Osobni podaci</Link>
            <Link to="/Treca" className="link3">UFC karijera</Link>
            <Link to="/Cetvrta" className="link3">Dokumentarac</Link>
            <Link to="/Peta" className="link3">Galerija</Link>

            </div>

            <br></br>

            <img src = {Naslovna} className="naslovna"></img>

        </div>

    );
}
export default Prva;