import React, {useEffect, useState} from 'react';
/*******************************************/
// Challanger - Palabras - Pais             /
// Yuli - Decidida - Australia              /
// Liz - Incondicionalidad - Noruega        /
// Cristian - Detallista - Colombia         /
// Santiago - Inteligente - Nueva Zelanda   /
// Shuin - Perseverante - Francia           /
/*******************************************/

export const AppWord = (value) =>{
    let secretWord = '';
    value.split("").forEach(element => {
        secretWord += '_'+' ';
    });
    return secretWord;
}

export const getRealWordMask = (value) =>{
    let secretWordMak = [];
    let post = 0;
    value.split("").forEach(element => {
        secretWordMak.push(0);
    });
    console.log(secretWordMak);
    return secretWordMak;
}

export function Juego({challenger, wordValue, }) {

    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [letterClass, setLetterClass]= useState([true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ]);

    const [realWordMask, setRealWordMask] = useState(getRealWordMask(wordValue));   
    
    const [word, setWord] = useState(AppWord(wordValue));

    const [realWord, setRealWord] = useState(wordValue);

    const [tries, setTries] = useState(0);

    const [image, setImage] = useState(
        "https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/Ahorcado_0.PNG"
    );

    let travelOver = "https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/travelOver.png";

    const ChangeLetterClass = (value) =>{
        let pos = 0;
        let otherLetter = letterClass;
        otherLetter.forEach(element=>{
            otherLetter[pos]=value;
            pos = pos + 1;
        })
        setLetterClass(otherLetter);
    }
    const Endgame = (value) =>{
        if(value === 'Yes'){

        }else{
            //Resetear variables
            setTries(0);
            setImage("../public/Ahorcado_"+(0)+".png");
            setWord(AppWord(wordValue));
            setRealWordMask(getRealWordMask(wordValue));
            ChangeLetterClass(true);
            document.getElementById("Yes").style.display = "none";
            document.getElementById("No").style.display = "none";
            document.getElementById("travelEnd").style.display = "none";
        }
    }

    const discoverWorld = (value) =>{
        let secretWord = '';
        let posDiscover = 0;
        value.split("").forEach(element => {
            console.log("Posicion a descubrir valor en "+posDiscover + ": "+realWordMask[posDiscover])
            if(realWordMask[posDiscover]===0){
                secretWord += '_'+' ';
            }
            else{                
                secretWord += element+' ';
            }
            posDiscover = posDiscover+1;
        });
        setWord(secretWord);
        console.log(secretWord);
    }

    const checkValue = (value) =>{
        document.getElementById("Letter_"+(value)).disabled = true;
        let otherLetter = letterClass;
        otherLetter[value]=false;
        setLetterClass(otherLetter);
        console.log(letterClass);
        let isLetter = false;
        let pos = 0;
        let realWordMaskLocal = realWordMask;
        realWord.split("").forEach(element => {
            if(element === letter[value]){
                console.log("Hay "+letter[value])
                isLetter = true;
                console.log(realWordMask);
                realWordMaskLocal[pos] = 1;
                console.log(realWordMaskLocal);
            }
            pos = pos+1;
        });
        setRealWordMask(realWordMaskLocal);

        if(isLetter === false){
            let newTries = tries + 1;
            if(newTries==6){
                //Travel end
                ChangeLetterClass(false);
                document.getElementById("Yes").style.display = "inline";
                document.getElementById("No").style.display = "inline";
                document.getElementById("travelEnd").style.display = "inline";
                console.log("Game over!");
            }
            console.log("intentos antes de actualizar : "+tries);
            setTries(newTries);
            console.log("intentos despues de actualizar : "+tries);
            setImage("https://raw.githubusercontent.com/JaimeRios/CumpleAlejita/master/public/Ahorcado_"+(newTries)+".png");
            
        }else{
            console.log(realWordMask);
            discoverWorld(realWord);
        }

    }

  return (
    <>
        <div>{challenger} te ha desafiado</div>
        <div>
            <div>
                <img  src={image} width="100" height="200"/>
                <img id='travelEnd'  src={travelOver} width="500" height="200"/>
                <div class="row">
                    <button id='Yes' onClick={() => Endgame('Yes')} class="btn">Yes</button>
                    <button id='No' onClick={() => Endgame('No')} class="btn">No</button>
                </div>
            </div>
            <div>
                <div class="keyboard">
                    <div class="row">
                        <button id='Letter_16' onClick={() => checkValue(16)} className={letterClass[16]? 'btn-on' : 'btn-off'}>q</button>
                        <button id='Letter_22' onClick={() => checkValue(22)} className={letterClass[22]? 'btn-on' : 'btn-off'}>w</button>
                        <button id='Letter_4' onClick={() => checkValue(4)} className={letterClass[4]? 'btn-on' : 'btn-off'}>e</button>
                        <button id='Letter_17' onClick={() => checkValue(17)} className={letterClass[17]? 'btn-on' : 'btn-off'}>r</button>
                        <button id='Letter_19' onClick={() => checkValue(19)} className={letterClass[19]? 'btn-on' : 'btn-off'}>t</button>
                        <button id='Letter_24' onClick={() => checkValue(24)} className={letterClass[24]? 'btn-on' : 'btn-off'}>y</button>
                        <button id='Letter_20' onClick={() => checkValue(20)} className={letterClass[20]? 'btn-on' : 'btn-off'}>u</button>
                        <button id='Letter_8' onClick={() => checkValue(8)} className={letterClass[8]? 'btn-on' : 'btn-off'}>i</button>
                        <button id='Letter_14' onClick={() => checkValue(14)} className={letterClass[14]? 'btn-on' : 'btn-off'}>o</button>
                        <button id='Letter_15' onClick={() => checkValue(15)} className={letterClass[15]? 'btn-on' : 'btn-off'}>p</button>
                    </div>
                    <div class="row">
                        <button id='Letter_0' onClick={() => checkValue(0)} className={letterClass[0]? 'btn-on' : 'btn-off'}>a</button>
                        <button id='Letter_18' onClick={() => checkValue(18)} className={letterClass[18]? 'btn-on' : 'btn-off'}>s</button>
                        <button id='Letter_3' onClick={() => checkValue(3)} className={letterClass[3]? 'btn-on' : 'btn-off'}>d</button>
                        <button id='Letter_5' onClick={() => checkValue(5)} className={letterClass[5]? 'btn-on' : 'btn-off'}>f</button>
                        <button id='Letter_6' onClick={() => checkValue(6)} className={letterClass[6]? 'btn-on' : 'btn-off'}>g</button>
                        <button id='Letter_7' onClick={() => checkValue(7)} className={letterClass[7]? 'btn-on' : 'btn-off'}>h</button>
                        <button id='Letter_9' onClick={() => checkValue(9)} className={letterClass[9]? 'btn-on' : 'btn-off'}>j</button>
                        <button id='Letter_10' onClick={() => checkValue(10)} className={letterClass[10]? 'btn-on' : 'btn-off'}>k</button>
                        <button id='Letter_11' onClick={() => checkValue(11)} className={letterClass[11]? 'btn-on' : 'btn-off'}>l</button>
                    </div>
                    <div class="row">
                        <button id='Letter_25' onClick={() => checkValue(25)} className={letterClass[25]? 'btn-on' : 'btn-off'}>z</button>
                        <button id='Letter_23' onClick={() => checkValue(23)} className={letterClass[23]? 'btn-on' : 'btn-off'}>x</button>
                        <button id='Letter_2' onClick={() => checkValue(2)} className={letterClass[2]? 'btn-on' : 'btn-off'}>c</button>
                        <button id='Letter_21' onClick={() => checkValue(21)} className={letterClass[21]? 'btn-on' : 'btn-off'}>v</button>
                        <button id='Letter_1' onClick={() => checkValue(1)} className={letterClass[1]? 'btn-on' : 'btn-off'}>b</button>
                        <button id='Letter_13' onClick={() => checkValue(13)} className={letterClass[13]? 'btn-on' : 'btn-off'}>n</button>
                        <button id='Letter_12' onClick={() => checkValue(12)} className={letterClass[12]? 'btn-on' : 'btn-off'}>m</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            { word }
        </div>
    </>
  )
}
