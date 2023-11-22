'use client'

import React, { useState } from 'react'
import { Add } from '@mui/icons-material';

const AddProduct = () => {
    const [showModal, setShowModal] = useState(false)
    const [nameEdit, setName] = useState("");
    const [categoryEdit, setCategory] = useState("");
    const [priceEdit, setPrice] = useState("");
    const [imageURLEdit, setImageUrl] = useState("");
    const [ratingEdit, setRating] = useState("");
    const [descEdit, setDesc] = useState("");
    const [shortDescEdit, setShortDesc] = useState("");
    const [backgroundURLEdit, setBackgroundUrl] = useState("");
    const [screenshotsEdit0, setScreenshots0] = useState("");
    const [screenshotsEdit1, setScreenshots1] = useState("");
    const [screenshotsEdit2, setScreenshots2] = useState("");
    const [screenshotsEdit3, setScreenshots3] = useState("");
    const [screenshotsEdit4, setScreenshots4] = useState("");
    const [minimumRequirements, setMinimumRequirements] = useState("")
    const [recommendedRequirements, setRecommendedRequirements] = useState("")
    
    const handleSave = async (e: any) => {
        e.preventDefault()

        try {
            const res = await fetch(`/api/products`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                }, 
                body: JSON.stringify({
                    name: nameEdit,
                    category: categoryEdit,
                    price: priceEdit,
                    imageURL: imageURLEdit,
                    rating: ratingEdit,
                    desc:descEdit,
                    backgroundURL:backgroundURLEdit,
                    shortDesc:shortDescEdit,
                    screenshots: [
                        screenshotsEdit0, screenshotsEdit1, screenshotsEdit2, screenshotsEdit3, screenshotsEdit4
                    ],
                    requirements: [
                        minimumRequirements, recommendedRequirements
                    ],
                })
            })

            if (!res.ok) {
                console.log('failed to update')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-end'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg my-2" onClick={() => setShowModal(true)}>
                Add new
                <Add/>
            </button>
            {
                showModal ? (
                    <div className="fixed inset-0 flex items-center justify-center z-20">
                        <div className="bg-neutral-900 bg-opacity-75 fixed inset-0"></div>
                        <div className="bg-neutral-800 p-6 rounded-lg z-10 h-2/3 overflow-y-scroll" style={{width: '50%'}}>
                            <h2 className="text-2xl font-bold mb-4">Add item</h2>

                            <label className="block mb-2">Name:</label>
                            <input
                                type="text"
                                value={nameEdit}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                            <label className="block mb-2">Price:</label>
                            <input
                                type="number"
                                value={priceEdit}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                            <label className="block mb-2">Category:</label>
                            <input
                                type="text"
                                value={categoryEdit}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                            <label className="block mb-2">Rating:</label>
                            <input
                                type="number"
                                value={ratingEdit}
                                onChange={(e) => setRating(e.target.value)}
                                className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                            <label className="block mb-2">ImageURL:</label>
                            <input
                                type="text"
                                value={imageURLEdit}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                            <label className="block mb-2">BackgroundURL:</label>
                            <input
                                type="text"
                                value={backgroundURLEdit}
                                onChange={(e) => setBackgroundUrl(e.target.value)}
                                className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                           <label className="block mb-2">Short description:</label>
                            <textarea
                                value={shortDescEdit}
                                onChange={(e) => setShortDesc(e.target.value)}
                                className="resize-y w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                            <label className="block mb-2">Long description:</label>
                            <textarea
                                value={descEdit}
                                onChange={(e) => setDesc(e.target.value)}
                                className="resize-y w-full rounded-lg p-2 mb-4 bg-neutral-700"
                            />

                            <label className="block mb-2">Screenshots:</label>
                            <div>
                                <input
                                    type="text"
                                    value={screenshotsEdit0}
                                    onChange={(e) => setScreenshots0(e.target.value)}
                                    className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                                />

                                <input
                                    type="text"
                                    value={screenshotsEdit1}
                                    onChange={(e) => setScreenshots1(e.target.value)}
                                    className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                                />

                                <input
                                    type="text"
                                    value={screenshotsEdit2}
                                    onChange={(e) => setScreenshots2(e.target.value)}
                                    className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                                />

                                <input
                                    type="text"
                                    value={screenshotsEdit3}
                                    onChange={(e) => setScreenshots3(e.target.value)}
                                    className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                                />

                                <input
                                    type="text"
                                    value={screenshotsEdit4}
                                    onChange={(e) => setScreenshots4(e.target.value)}
                                    className="w-full rounded-lg p-2 mb-4 bg-neutral-700"
                                />
                                
                            </div>

                            <label className="block mb-2">Requirements:</label>
                            <div>
                                <textarea
                                    value={minimumRequirements}
                                    onChange={(e) => setMinimumRequirements(e.target.value)}
                                    className="resize-y w-full rounded-lg p-2 mb-4 bg-neutral-700"
                                />

                                <textarea
                                    value={recommendedRequirements}
                                    onChange={(e) => setRecommendedRequirements(e.target.value)}
                                    className="resize-y w-full rounded-lg p-2 mb-4 bg-neutral-700"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={(e) => {
                                        handleSave(e)
                                        setShowModal(false)
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                                    Save
                                </button>
                                <button onClick={() => setShowModal(false)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
        
    )
}

export default AddProduct