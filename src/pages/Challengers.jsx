import { Link, Outlet } from "react-router-dom";

export function Challangers(){
    return(
        <>
            <h1>Alejita tus amigos te han invitado a un viaje por el mundo para darte un detalle</h1>
            <ul>
                <li><Link to="/CumpleAlejita/liz">Liz</Link></li>
                <li><Link to="/CumpleAlejita/yuli">Yuli</Link></li>
                <li><Link to="/CumpleAlejita/santiago">Santiago</Link></li>
                <li><Link to="/CumpleAlejita/cristian">Cristian</Link></li>
                <li><Link to="/CumpleAlejita/shuin">Shuin</Link></li>
            </ul>
            <Outlet/>
        </>
    );
}