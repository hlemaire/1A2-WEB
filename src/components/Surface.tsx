import { CSSProperties } from "react";

type propsSurface = {
    children?: React.ReactNode,
    style?: CSSProperties
}

function Surface(props: propsSurface) {
    return (
    <div className="surface" style={props.style}>
        {props.children}
    </div>
    )
}

export default Surface;