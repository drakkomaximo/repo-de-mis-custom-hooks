import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error: null})

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    const noData = [{
        author: 'Andrés Villanueva Tabares :D',
        quote: 'No sigas intentandolo, no hay mas datos!'
    }]

    useEffect(() => {
        setState({data: null, loading: true, error: null})
        fetch( url)
            .then( resp => resp.json() )
            .then( data => {
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data: data.length > 0 ? data : noData
                    })
                }
            })
            .catch( ()=>{
                setState({
                    data: null,
                    loading: false,
                    error: 'no se pudo cargar la info'
                })
            })
    }, [url])

    return state
}
