import React from 'react';
import {Link} from 'react-router-dom';
import Treca from './treca.jpg';

function Hiperveza() {
  return (
    <div>

    <Link to = "/" class = "povratak">Povratak na naslovnu stranicu</Link>

    <br></br>

    <img src = {Treca}></img>

    <br></br>

    <a href = "http://www.npkrka.hr/stranice/nacionalni-park-krka/2.html">službena stranica NP Plitvička jezera</a>
      
    </div>
  );
}

export default Hiperveza;
