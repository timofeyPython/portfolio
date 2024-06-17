import { useEffect, useState } from "react"
import './main.scss'

export function MainComponent() {
    // const initalState: Array<{[id: string]: string, name: string}> = []
    // const [data, setData] = useState(initalState)
    // const {val, changeInput} = useInput('')
    // const [arrayFiltred, setArrayFiltred] = useState(initalState)

    // const filterArray = (event: any) => {
    //     changeInput(event.target.value)
 
    //     if (event.nativeEvent.inputType === 'deleteContentBackward') {
    //         const filtredArray = arrayFiltred.filter((entry)=> entry.name.includes(event.target.value))
    //         setData(filtredArray)
          
    //     } else {
    //         const keys = ['id', 'name']
    //         let array: string | any[] | ((prevState: { [id: string]: string; name: string }[]) => { [id: string]: string; name: string }[]) = []

    //         for (let key in keys) {
    //             const keyEntry = keys[key]
    //             array = data.filter((entry)=> {
    //                 if (keyEntry === 'id') 
    //                     return entry?.[keyEntry] == event.target.value
    //                 else 
    //                     return entry?.[keyEntry].includes(event.target.value)
    //             })
 
    //             if (array && array.length > 0)
    //                 break   
    //         }
    //         setData(array)
    //     }
    
        
    // }
    // const loadData = (async ()=> {
    //     try {
    //         const response = await fetch('http://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         setData(data)
    //         setArrayFiltred(data)
            
    //     } catch (e) {
    //         console.log(e)
    //     }
    // })
 
    // useEffect(()=> {
    //     loadData()
    // }, [])
    return(
        <div className="home">
            <h1>home</h1>
            {/* <div>
                <h1>Main component</h1>
                <label htmlFor="input"> Фильтр</label>
                <input type="text" id="input" value={val} onChange={filterArray} />
            </div>
      
            <hr />
            <div>
                <div>
                    {data.map((entry, i)=> {
                        return(
                            <div key={i} className="block">
                                <h2>id: {entry.id}</h2>
                                <h2>name: {entry.name}</h2>
                                <hr/>
                            </div>
                     
                        )
                    })}
                </div>
            </div> */}
         
        </div>

    )
}


function useInput(value: string) {
    const [val, changeValue] = useState(value)

    function changeInput(value: string) {
        changeValue(value)
    }

    return {val, changeInput}
}
