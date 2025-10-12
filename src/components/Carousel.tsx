import Button from "./Button";
import { useState } from "react";


type propsCarousel = {
    data: Array<{image_url:string, name:string, link:string}>
}

type propsImage = {
    image:string,
    name:string,
    link:string,
}

function Image(props:propsImage) {
    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{width:'fit-content'}}>{props.name}</h1>
            {(props.link!="" && props.image!="") && <img src={(props.image=="") ? undefined : props.image} style={
                {width:'100%', backgroundSize:'cover', borderRadius:'var(--br-int)', maxHeight:'32c0px', maxWidth:'320px'}
            }></img>}
        </div>
    )
}

function Carousel(props:propsCarousel) {
    const [current, setCurrent] = useState(0);

    function PressLeft() {
        if (current==0) {
            setCurrent(props.data.length-1);
        }
        else {
            setCurrent((current-1)%props.data.length);
        }
    }
    function PressRight() {
        setCurrent((current+1)%props.data.length);
    }

    return (
        <div style={{overflow:'hidden', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Button clickFunction={PressLeft} name="<"></Button>
            <div style={{overflow:'hidden', display:'flex', flexDirection:'row', width:'100%', justifyContent:'center'}}>
                <div className="carousel" style={{left: `${-current*100}%`}}>
                    {
                    props.data.map((value, index) => {
                        return (
                            <div style={{width:'100%', height:'100%'}} key={index}>
                                <a href={value.link}>
                                    <Image image={value.image_url} name={value.name} link={value.link}></Image>
                                </a>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <Button clickFunction={PressRight} name=">"></Button>
        </div>
    )
}

export default Carousel;