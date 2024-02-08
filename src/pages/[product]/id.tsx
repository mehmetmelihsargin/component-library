import React from 'react'



export default function Product ({params}:any) {
    console.log(params)
    return <div>blog sayfası: {params.product}</div>
}