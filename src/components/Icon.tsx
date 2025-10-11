type propsIcon = {
    url:string,
    background:string,
    size: string,
}

function Icon(props:propsIcon) {
    return (
        <div style={
            {maskImage:`url(${props.url})`, background:props.background, maskSize:'cover',
            width:props.size, height:props.size}
            }>
        </div>
    )
}

export default Icon;