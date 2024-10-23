import DatePicker from "react-datepicker";
import * as packesDate from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lang: any = packesDate.ru

export function MyDatepicker(obj: {selected: Date, onChange: ((date: Date)=>void),  id?: string }) {
    return (
        <DatePicker
            id={obj.id}
            locale={lang}
            selected={obj.selected} 
            onChange={(date) => date && obj.onChange(date)}
        />    
    )
}