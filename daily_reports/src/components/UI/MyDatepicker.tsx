import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lang: any = ru

export function MyDatepicker(obj: {selected: Date, onChange: ((date: Date)=>void)}) {
    return (
        <DatePicker
            locale={lang}
            selected={obj.selected} 
            onChange={(date) => date && obj.onChange(date)}
        />    
    )
}