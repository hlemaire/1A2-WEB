import Button from "../components/Button";
import { useState, useEffect } from "react";
import Surface from "../components/Surface";
import Calendar from "../components/Calendar";
import '../styles/home.css'
import { parseTable } from "../autoloads/Database";
import Carousel from "../components/Carousel";
import FileList from "../components/FileList";

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

function Home({width}) {


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

    const associations = parseTable(data,["Association","Image","Discord"])
    console.log(associations)


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
            <h1>La page principale de l'ESGI 1A2</h1>
            <div className="space"></div>
            <Surface style={{width:'100%'}}>
                <h2>Prochaines évaluations : </h2>
                <div className="space-sm"></div>
                <Calendar data={data}></Calendar>
            </Surface>
            <div className="space"></div>
            
            <div style={{display:'flex', flexDirection:(width>720) ? 'row' : 'column', gap:'1rem'}}>
                <Surface style={{width:'100%'}}>
                    <h2>Les cours : </h2>
                    <FileList data={parseTable(data,["Titre", "Fichier"]).map((value) => ({
                        title: value[0],
                        link: value[1]
                        })
                    )}>

                    </FileList>
                </Surface>
                <Surface style={{width:'100%'}}>
                    <h2>Les associations : </h2>
                    <Carousel data={associations.map((value) => (
                        {
                        name: value[0] ?? "",
                        image_url: value[1] ?? "",
                        link: value[2] ?? ""
                    }))}>

                    </Carousel>
                </Surface>
            </div>
        </body>
    )
}

export default Home;