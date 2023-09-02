import { Route, Routes } from "react-router-dom";
import { Challangers } from "./pages/Challengers";
import { Juego } from "./pages/Juego";
import { Invitacion } from "./Invitacion";

/*******************************************/
// Challanger - Palabras - Pais             /
// Yuli - Decidida - Australia              /
// Liz - Incondicionalidad - Noruega        /
// Cristian - Detallista - Colombia         /
// Santiago - Inteligente - Nueva Zelanda   /
// Shuin - Perseverante - Francia           /
/*******************************************/

export function CumpleAlejitaMain(){
    const mensajes = [
        "Amigas como tu son un tesoro que se encuentra uno en la vida pocas veces y desea conservar para siempre",
        "Alejita somos muy afortunados de tenerte en nuestras vidas. Gracias por ser y estar, por esa luz tan linda que irradias y ese amor con el que te vinculas. Mereces lo mejor y hoy es una gran oportunidad de desearte mucho más amor, luz, abundancia, salud y momentos de alegría en tu vida. Te quiero mucho Alejit  bella que tengas un gran cumpleaños",
        "Deseo que la vida siempre te brinde el doble de las cosas buenas que das, un abrazo",
        "Aleja, muchas gracias por tu amistad, por ser parte de nuestras vidas y llenarnos con tu tranquilidad, espero que sea un día lleno de amor y felicidad. Un gran abrazo.",
        "Alejita, para mi siempre has sido una persona muy teza, has logrado obtener grandes metas y estoy seguro que esta hecha para mucho mas, ve a tu ritmo y lo iras comprendiendo poco a poco.",
    ]

    const imagesLink = [
        "https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/Alejita_Liz.jpeg",
        "https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/Alejita_Yuli.jpeg",
        "https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/Alejita_Santi.jpg",
        "https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/Alejita_Cristian.png",
        "https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/Alejita_Shuin.png"
    ]

    return(
        <div>
            <Routes>
                <Route path="/CumpleAlejita" element={<Challangers/>}>
                    <Route path="/CumpleAlejita/liz" element={<Juego challenger={'Liz'} wordValue={'INCONDICIONALIDAD'} message={mensajes[0]} country={'Noruega'} imageTogether={imagesLink[0]}/>} />
                    <Route path="/CumpleAlejita/yuli" element={<Juego challenger={'Yuli'} wordValue={'DECIDIDA'} message={mensajes[1]} country={'Australia'} imageTogether={imagesLink[1]}/>} />
                    <Route path="/CumpleAlejita/cristian" element={<Juego challenger={'Cristian'} wordValue={'DETALLISTA'} message={mensajes[2]} country={'Colombia'} imageTogether={imagesLink[3]}/>} />
                    <Route path="/CumpleAlejita/santiago" element={<Juego challenger={'Santiago'} wordValue={'INTELIGENTE'} message={mensajes[3]} country={'Nueva Zelanda'} imageTogether={imagesLink[2]}/>} />
                    <Route path="/CumpleAlejita/shuin" element={<Juego challenger={'shuin'} wordValue={'PERSEVERANCIA'} message={mensajes[4]} country={'Francia'} imageTogether={imagesLink[4]}/>} />
                </Route>
            </Routes>
        </div>
    );
}

