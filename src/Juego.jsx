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

    const [realWordMask, setRealWordMask] = useState(getRealWordMask(wordValue));

    //let realWordMask = getRealWordMask(wordValue);    
    
    const [word, setWord] = useState(AppWord(wordValue));

    const [realWord, setRealWord] = useState(wordValue);

    const [tries, setTries] = useState(0);

    const [image, setImage] = useState(
        "../public/Ahorcado_0.png"
    );

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
        let isLetter = false;
        let pos = 0;
        let realWordMaskLocal = realWordMask;
        realWord.split("").forEach(element => {
            if(element === letter[value]){
                console.log("Hay "+letter[value])
                isLetter = true;
                console.log(realWordMask);
                realWordMaskLocal[pos] = 1;
                //realWordMask[pos] = 1;
                console.log(realWordMaskLocal);
            }
            pos = pos+1;
        });
        setRealWordMask(realWordMaskLocal);

        if(isLetter === false){
            setTries(tries+1);
            setImage("../public/Ahorcado_"+tries+".png");
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
            </div>
            <div>
                <div class="keyboard">
                    <div class="row">
                        <button onClick={() => checkValue(16)} class="btn">q</button>
                        <button onClick={() => checkValue(22)} class="btn">w</button>
                        <button onClick={() => checkValue(4)} class="btn">e</button>
                        <button onClick={() => checkValue(17)} class="btn">r</button>
                        <button onClick={() => checkValue(19)} class="btn">t</button>
                        <button onClick={() => checkValue(24)} class="btn">y</button>
                        <button onClick={() => checkValue(20)} class="btn">u</button>
                        <button onClick={() => checkValue(8)} class="btn">i</button>
                        <button onClick={() => checkValue(14)} class="btn">o</button>
                        <button onClick={() => checkValue(15)} class="btn">p</button>
                    </div>
                    <div class="row">
                        <button onClick={() => checkValue(0)} class="btn">a</button>
                        <button onClick={() => checkValue(18)} class="btn">s</button>
                        <button onClick={() => checkValue(3)} class="btn">d</button>
                        <button onClick={() => checkValue(5)} class="btn">f</button>
                        <button onClick={() => checkValue(6)} class="btn">g</button>
                        <button onClick={() => checkValue(7)} class="btn">h</button>
                        <button onClick={() => checkValue(9)} class="btn">j</button>
                        <button onClick={() => checkValue(10)} class="btn">k</button>
                        <button onClick={() => checkValue(11)} class="btn">l</button>
                    </div>
                    <div class="row">
                        <button onClick={() => checkValue(25)} class="btn">z</button>
                        <button onClick={() => checkValue(23)} class="btn">x</button>
                        <button onClick={() => checkValue(2)} class="btn">c</button>
                        <button onClick={() => checkValue(21)} class="btn">v</button>
                        <button onClick={() => checkValue(1)} class="btn">b</button>
                        <button onClick={() => checkValue(13)} class="btn">n</button>
                        <button onClick={() => checkValue(12)} class="btn">m</button>
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
