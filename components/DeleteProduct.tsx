'use client'

import React from 'react'

interface DeleteProductProps {
    _id:string;
}

const DeleteProduct = ({_id}:DeleteProductProps) => {

    const handleDelete = async () => {
        const confirmed = confirm('Are you are?')

        if (confirmed) {
            await fetch(`/api/products/${_id}`, {
                method: "DELETE"
            })
        }
    }
    return (
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded ml-4">Delete</button>
    )
}

export default DeleteProduct