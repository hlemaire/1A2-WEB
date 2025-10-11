import Surface from "./Surface";

type propsCalendar = {
    data: Array<{ [key: string]: string | undefined}> ;
}

type propsDate = {
    date: string;
    label: string;
}

function Date(props: propsDate) {
    return (
        <div>
            <h1>{props.label}</h1>
            <h1>{props.date}</h1>
        </div>
    )
}

function Calendar(props: propsCalendar) {
    
    const data:Array<{ [key: string]: string | undefined}> = props.data;
    let dates:Array<{date:string, label:string}> = [];
    console.log(data);

    if (data != null) {
        data.map((value, column) => {
            let date_parse: { date: string; label: string } = { date: "", label: "" };
            Object.entries(value).forEach(([key, content]) => {
                if (key == "Controle") {
                    date_parse.label = content ?? "";
                }
                else if (key == "Date") {
                    date_parse.date = content ?? "";
                }
            })
            dates.push(date_parse);
            }
        )
    }
    

    return (
        <div className="calendar">
            {
            dates.map((date, index) => (
            <Surface key={index} style={{}}>
                <h2>{date.label}</h2>
                <p>{date.date}</p>

            </Surface>))
            }
        </div>
    )
}

export default Calendar;