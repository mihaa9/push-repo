import React from 'react';
import {Link} from 'react-router-dom';
import Druga from './druga.jpg';

function Povijest() {
  return (
    <div>

        <Link to = "/" class = "povratak">Povratak na naslovnu stranicu</Link>

        <br></br>

        <img src = {Druga}></img>

        <p>
        Krka je sedmi nacionalni park u Hrvatskoj poznat po velikom broju jezera i slapova. Dobio je ime po rijeci Krki koja je dio parka. Nacionalni park je lociran u središnjoj Dalmaciji nizvodno od Miljevaca, a samo par kilometara sjeveroistočno od grada Šibenika. Obuhvaća područje uz rijeku Krku koja izvire u podnožju planine Dinare kod Knina, teče kroz kanjon dug 75 km, protječe kroz Prokljansko jezero, te utječe u Šibenski zaljev. Prostire na 109 kvadratnih kilometara, od kojih 25,6 kvadratnih kilometara čini vodena površina. Rijeka Krka danas ima 7 sedrenih slapova i njezine ljepote predstavljaju prirodni krški fenomen, koji se preporučuje posjetiti u proljeće i ljeti jer je tada u punom sjaju, a možete se i osvježiti u čistoj vodi.
        </p>
      
    </div>
  );
}

export default Povijest;
