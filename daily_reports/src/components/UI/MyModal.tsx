 export function MyModal({children}: {children: JSX.Element}) {
    return(
        <div className="dialog">
            <div className='dialogContent'>
                {children}
            </div>
        </div>
    )
}