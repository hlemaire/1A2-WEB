import Icon from "./Icon";
import Surface from "./Surface";
import {parseTable} from '../autoloads/Database'

type propsCalendar = {
    data: Array<{ [key: string]: string | undefined}> ;
}

type propsDate = {
    date: string;
    label: string;
    link?: string;
}

function Date(props: propsDate) {
    return (
        <Surface style={{width:'fit-content', display:'flex',
        flexDirection:'row', justifyContent:'space-between',
        alignItems:'center', gap:'var(--sp-sm)'
        }}>
            <div>
                <h2>{props.label}</h2>
                <p>{props.date}</p>
            </div>
            {props.link &&
            <a href={props.link} style={{width:'fit-content', height:'fit-content'}}>
                <Icon url="/icons/document_search.svg" background="#fff" size="32px"></Icon>
            </a>}
        </Surface>
    )
}

function Calendar(props: propsCalendar) {
    
    const data:Array<{ [key: string]: string | undefined}> = props.data;
    let dates:Array<{date:string, label:string, link:string}> = [];

    dates = parseTable(data, ["Controle", "Date", "Lien"]).map((value) => ({
        label: value[0] ?? "",
        date: value[1] ?? "",
        link: value[2] ?? ""
    }));
    

    return (
        <div className="calendar">
            {
            dates.map((date, index) => (
            <Date label={date.label} date={date.date} link={date.link} key={index}></Date>
            ))
            }
        </div>
    )
}

export default Calendar;