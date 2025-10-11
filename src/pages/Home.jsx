import Button from "../components/Button";
import { useState, useEffect } from "react";
import Surface from "../components/Surface";
import Calendar from "../components/Calendar";
import '../styles/home.css'

const sheetId = "1RsxzJDXW5AxbBVzWgSFdcnRpDANE-zrOrhRz9bEl6UU";
const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&id=${sheetId}&gid=0`;

function csvToJson(csvText) {
    const lines = csvText.trim().split("\n");
    const headers = lines[0].split(",");
    return lines.slice(1).map(line => {
        const values = line.split(",");
        return headers.reduce((obj, header, i) => {
            obj[header.trim()] = values[i]?.trim();
            return obj;
        }, {});
    });
}

function Home() {


    const [data, setData] = useState(null);
    function fetchData() {
    fetch(sheetUrl)
        .then((response) => response.text())
        .then((csvText) => {
            const json = csvToJson(csvText);
            setData(json);
        });
    }
    
    //Quand la page finit de charger
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <body>
            {
                //Ceci est un commentaire
                //Si tu fait Ctrl+Click sur le composant "Button"
                //ça affiche son code, dans son code il y a ses props (propriété)
                //Quand tu va utiliser un nouveau composant,
                //renseigne toi sur ses propriétés si il en a
                //Mes composants seront toujours dans ./components
            }
            <h1>La page principale de l'ESGI</h1>
            <div className="space"></div>
            <Surface style={{width:'100%'}}>
                <h1>Prochaines évaluations : </h1>
                <div className="space-sm"></div>
                <Calendar data={data}></Calendar>
            </Surface>
            <div className="space"></div>
            
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
                <Surface style={{width:'100%'}}></Surface>
                <Surface style={{width:'100%'}}></Surface>
            </div>
        </body>
    )
}

export default Home;