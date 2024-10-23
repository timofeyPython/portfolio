import { useAppDispatch } from '../../store/hooks';
import { getAuth } from '../../store/user/actions';
import { useEffect } from 'react';

export function AuthProvider ({ children }: { children: JSX.Element }) {

    const disptach = useAppDispatch()
    console.log('auth')
    useEffect(()=> {
        disptach(getAuth())
    }, [])

    return (
        children
    )
}