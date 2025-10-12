import Icon from './Icon'

type propsFile = {
    link: string,
    title: string,
}

type propsList = {
    data:Array<propsFile>
}


function FileList(props: propsList) {
    return (
        <div>
            {
            props.data.map((value, index) => {
                return (
                    <a href={value.link} key={index} style={
                        {display:'flex', flexDirection:'row', alignItems:'center', gap:'var(--sp-md)'}
                    }>
                            <h2>{value.title}</h2>
                            <Icon
                            url="/icons/document_search.svg" background='#fff' size="32px">
                            </Icon>
                    </a>
                )
            })
            }
        </div>
    )
}

export default FileList