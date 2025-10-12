import Icon from './Icon'

type propsFile = {
    link: string,
    title: string,
}

type propsList = {
    data:Array<propsFile>
}

/*
                    <FileList data={parseTable(data, ["Fichier", "Titre"]).map((value) => {
                        return {
                            link: value[1]
                            title: value[0]
                        }
                    })
                }
                </FileList>
*/


function FileList(props: propsList) {
    return (
        <div>
            {
            props.data.map((value, index) => {
                return (
                    <div key={index} style={
                        {display:'flex', flexDirection:'row', alignItems:'center', gap:'var(--sp-md)'}
                    }>
                        <h2>{value.title}</h2>
                        <a href={value.link}>
                            <Icon
                            url="/icons/document_search.svg" background='#fff' size="32px">
                            </Icon>
                        </a>
                    </div>
                )
            })
            }
        </div>
    )
}

export default FileList