import { useState } from "react";

export function History(el: {array: Array<{date: string, status: string, description?: string}>}) {
    const [show, setShow] = useState(false)
    return(
        <div><strong>История:</strong> 
        <button type="button" className="btn btn-secondary" onClick={(()=>setShow(!show))}>{show && 'Скрыть' || 'Показать'}</button>
        {
            show ? 
                <div className='history'>
                    {
                        el.array.map((step, i)=> {
                            return (
                                <div key={i}>
                                    {i > 0 && <hr/>}
                                    <span><strong>Дата :</strong> {step.date}</span><br/>
                                    <span><strong>Статус :</strong> {step.status}</span><br />
                                    {step.description && <span><strong>Описание:</strong> {step.description}</span>}
                                </div>
                            )
                        })
                    }
            </div> 
            : ''
        }
 
    </div>
    )
}