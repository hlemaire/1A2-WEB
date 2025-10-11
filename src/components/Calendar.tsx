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

    if (data != null) {
        dates = Object.entries(data[0])
        .filter(([key, value]) => key !== "Controles")
        .map(
            ([key, value]) => ({
                date: value ?? "",
                label: key ?? ""
            })
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