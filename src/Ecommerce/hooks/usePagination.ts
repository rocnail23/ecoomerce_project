import { useState, useRef } from 'react';
export const usePagination = () => {
    const [page,setPage] = useState(1)
    const itemPage = useRef(6)

    const finalIndex = page * itemPage.current 
    const initialIndex = finalIndex - itemPage.current 

    const changePage = (value:number) => {
        setPage(value)
    }

    return {
        finalIndex,
        initialIndex,
        itemPage,
        changePage,
        page
    }

}