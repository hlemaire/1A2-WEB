import Button from "../components/Button";

function Home() {
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
            <Button name="Bouton !"></Button>
        </body>
    )
}

export default Home;