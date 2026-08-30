import React, { useState } from 'react'
import getProduct from './Service/Products'
import { useQuery } from '@tanstack/react-query'

const Tanstack = () => {
     const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProduct()
    })

    const [page, setPage] = useState(1)
    const perPage=5
    const startIndex=(page-1)* perPage
    

   
    if (isLoading) {
        return <h1>Loading.....</h1>
    }
    const currentPage=data.slice(startIndex,startIndex+perPage)
    
console.log(currentPage)

    return (
        <div>

            <h1>Page: {page}</h1>

            {
                currentPage.map((pro) => (
                    <div key={pro.id}>
                        <h1>{pro.name}</h1>
                    </div>
                ))
            }

            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                Previous
            </button>

            <button
                onClick={() => setPage(page + 1)}
                disabled={page===Math.ceil(data.length)/perPage}
            >
                Next
            </button>

        </div>
    )
}

export default Tanstack