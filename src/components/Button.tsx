type propsButton = {
    name: string,
    clickFunction?: () => void,
}

function Button(props: propsButton) {
    return (
        <button onClick={props.clickFunction}>
            <h1>{props.name}</h1>
        </button>
    )
}

//Export le composant "Button" en tant que composant "par defaut"
export default Button;