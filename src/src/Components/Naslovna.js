import React from 'react';
import {Link} from 'react-router-dom';
import Slika from '../naslovna.jpg';

function Naslovna() {
  return (
    <div>

        <table class = "tablica">
            <tr>

                <td>
                    <Link to = "/Povijest" class = "povratak">Povijest Nacionalnog Parka</Link>
                </td>

                <td>
                    <Link to = "/Hiperveza" class = "povratak">Više o Nacionalnom Parku</Link>
                </td>

            </tr>
        </table>

        <img src = {Slika}></img>
      
    </div>
  );
}

export default Naslovna;
