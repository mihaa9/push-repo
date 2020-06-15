import React from 'react';
import {Link} from 'react-router-dom';
import Prva from './slika1.jpg';
import Druga from './slika2.jpg';
import Treca from './slika3.jpg';
import Cetvrta from './slika4.jpg';
import Petas from './slika5.jpg';
import Sesta from './slika6.jpg';

function Peta() {
    return (
        
        <div>

            <div className="menu">

            <Link to="/" className="link">Naslovna</Link>
            <Link to="/Druga" className="link2">Osobni podaci</Link>
            <Link to="/Treca" className="link3">UFC karijera</Link>
            <Link to="/Cetvrta" className="link3">Dokumentarac</Link>
            <Link to="/Peta" className="link3">Galerija</Link>

            </div>

            <img src = {Prva} className="galerija"></img>
            <img src = {Druga} className="galerija"></img>
            <img src = {Treca} className="galerija"></img>
            <img src = {Cetvrta} className="galerija"></img>
            <img src = {Petas} className="galerija"></img>
            <img src = {Sesta} className="galerija"></img>

        </div>

    );
}
export default Peta;