 export function MySelect(select: {options: Array<{value: string, description: string}>, 
                        selected?: {
                            value: string | null
                        },
                        label: string,
                        setPriority: ((val: string | null)=>void)
}) {

     
 
    return (
        <div className="form-floating">
        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={((el)=>select.setPriority(el.target.value))}>
         
            {
                select.options.map((el)=> { 
                    return(
                        <option value={el.value} key={el.value}>{el.description}</option>
                    )
                })
            }
        </select>
        <label htmlFor="floatingSelect">{select.label} </label>
        </div>
    )
}