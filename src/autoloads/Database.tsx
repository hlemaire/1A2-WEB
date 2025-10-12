export function parseTable(data:Array<{ [key: string]: string | undefined}>, columns:Array<string>) {
    let result:Array<Array<string>> = [];
        if (data != null) {
            data.map((value, column) => {
                let parsed:Array<string> = [];
                let valid:boolean = false;
                Object.entries(value).forEach(([key, content]) => {
                    columns.forEach((column_name) => {
                        if (key==column_name) {
                            if (content ?? "" != "") {
                                valid = true;
                            }
                            parsed.push(content ?? "");
                        }
                    })
                })
                if (valid) {
                    result.push(parsed);
                }
            }
        )
    }
    return result;
}