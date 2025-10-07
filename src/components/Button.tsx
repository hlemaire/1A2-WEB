type propsButton = {
    name: string,
}

function Button(props: propsButton) {
    return (
        <button>
            <h1>{props.name}</h1>
        </button>
    )
}

//Export le composant "Button" en tant que composant "par defaut"
export default Button;