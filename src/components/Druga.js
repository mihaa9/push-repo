import React from 'react';
import {Link} from 'react-router-dom';
import Vaganje from './druga.jpg';
import Slikatri from './treca.jpg';

function Druga() {
    return (
        <div className="div">
            
            <div className="menu">

            <Link to="/" className="link">Naslovna</Link>
            <Link to="/Druga" className="link2">Osobni podaci</Link>
            <Link to="/Treca" className="link3">UFC karijera</Link>
            <Link to="/Cetvrta" className="link3">Dokumentarac</Link>
            <Link to="/Peta" className="link3">Galerija</Link>

            </div>

            <img src = {Vaganje} className="slika2"></img>

            <img src = {Slikatri} className="slika3"></img>

            <br></br>

            <p className="tekst1">Datum rođenja	14. srpnja 1988.
Državljanstvo: Irska
Visina:	175 cm
Težina:	70 kg
Stil: Mixed martial arts
Tim: SBG Ireland
Trener: John Kavanagh - Brazilski Jiu-Jitsu
Owen Roddy: Udaranje
Johnny Dargan: Taekwondo
Andrea Flego: Taekwondo
Godine aktivnosti: 2008. - danas
Ukupno borbi: 26
Pobjeda: 22 (19 TKO, 1 SUB)
Poraz: 4 (4 SUB)
Neriješeno: 0</p>

        </div>
    );
}
export default Druga;