import React from 'react';
import {Link} from 'react-router-dom';
import Pojas from './prvipojas.jpg';
import Dvapojasa from './dvapojasa.jpg';

function Treca() {
    return (
        <div>

            <div className="menu">

            <Link to="/" className="link">Naslovna</Link>
            <Link to="/Druga" className="link2">Osobni podaci</Link>
            <Link to="/Treca" className="link3">UFC karijera</Link>
            <Link to="/Cetvrta" className="link3">Dokumentarac</Link>
            <Link to="/Peta" className="link3">Galerija</Link>

            </div>
            
            <p className="tekst2">UFC debi iz 2013. U veljači 2013., Ultimate Fighting Championship (UFC) objavio je da su McGregora potpisali s multi-borbenim ugovorom. Pridruživši se, postao je tek drugi borac iz Irske koji se natjecao za kompaniju, slijedeći kolegu člana SBG-a Toma Egana. 2014
            Povratak nakon ozljede McGregor se trebao suočiti s Coleom Millerom 19. srpnja 2014. u UFC Fight Nightu 46, u povratku nakon ozljede od ACL-a. Međutim, Miller se izvukao iz borbe navodeći ozljedu palca, a zamijenio ga je Diego Brandão. McGregor se borio s Brandanom pred glasnom, nespretnom mnoštvom od 9.500 na O2 u svom rodnom gradu Dublinu, u Irskoj. Borbu je službeno zaustavio sudac Leon Roberts u 4:05 prvog kola. Pobjeda je McGregora zaslužila njegovom prvom nagradom "Performans of the Night". 2015
            Šampionske potrage McGregora suočio se s Dennisom Siverom 18. siječnja 2015. u UFC Fight Nightu 59. McGregor je pobijedio u borbi protiv TKO-a u drugom kolu. Pobjeda je McGregoru zaslužila i treću nagradu "Performance of the Night". Pero ujedinjavanja borbe
            0. kolovoza najavljeno je da će se taj događaj održati 12. prosinca, a McGregor će se suočiti s Aldom za UFC prvenstvo u lakoj kategoriji. I McGregor i Aldo su na vaganju postigli ograničenje težine od 145 kilograma.</p>

            <img src = {Pojas} className="pojas"></img>

            <img src = {Dvapojasa} className="pojas"></img>

            <p className="tekst2">McGregor je pobijedio u borbi za 13 sekundi u prvom krugu i zaradio je bonus "Performance of the Night".
            Revanš 2016. sa Nateom Diazom Revanš utakmica s Diazom bila je zakazana za 9. srpnja na UFC 200; međutim, UFC je 19. travnja objavio da je McGregor povučen iz događaja nakon što nije ispunio medijske obveze vezane za tuču. Zauzvrat, borba s McGregorom je odgođena i dogodila se sljedećeg mjeseca, ponovno osporavan u polutke, na UFC-u 202. McGregor je pobijedio u revanšu većinskom odlukom (48–47, 47–47 i 48–47). [83] Udarac je još jednom nagrađen „Borbom noći“. Događaj je oborio rekord koji je prethodno držao UFC 100 za najprodavaniju naplatu po prikazu u povijesti UFC-a, sa 1.650.000 kupovina. Prvak u dvije divizije
            27. rujna službeno je objavljeno da će sljedeći dvoboj McGregora biti protiv Eddieja Alvareza za UFC-ovo lagano prvenstvo 12. studenog na UFC-u 205. McGregor je pobjedom nad Alvarezom u drugom krugu tehničkim nokautom osvojio UFC-ovo lagano prvenstvo i postao prvi UFC borac da se istovremeno drže naslovi u dva različita razreda težine</p>
        </div>
    );
}
export default Treca;