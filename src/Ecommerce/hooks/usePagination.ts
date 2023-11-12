import { useState } from 'react';
export const usePagination = () => {
    const [page,setPage] = useState(1)
    const [itemPage, setItemPage] = useState(6)

    const finalIndex = page * itemPage 
    const initialIndex = finalIndex - itemPage 

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