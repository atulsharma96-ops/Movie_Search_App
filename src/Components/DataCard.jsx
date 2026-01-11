import React, { useState } from 'react'

const PLACEHOLDER = "https://placehold.co/300x200?text=No+Image";

const DataCard = ({ id, imgSrc, altTitle, moviTitle, rating, description }) => {

    const [showMore, setShowMore] = useState(false)

    const isLong = description && description.length > 50
    const shortDescription = isLong ? description.slice(0, 50) : description

    return (
        <div>
            <div className=' bg-black text-gray-300 p-3 mt-5 rounded-md hover:-translate-y-2 transition-all duration-300'>
                <div className='lg:max-w-64 shadow rounded-lg p-1 hover:bg-zinc-800 transition-all duration-300'
                    key={id}>
                    <div className=' flex justify-center h-[35vh]'>
                        <img
                            className='rounded-lg object-cover'
                            src={`https://image.tmdb.org/t/p/w200${imgSrc}`}
                            alt={altTitle}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = PLACEHOLDER;
                            }}
                        />
                    </div>
                    <div><h2 className='text-xl font-bold'>{moviTitle}</h2>
                        <p className='font-semibold '>Rating : {rating} ⭐</p>
                        <p className=''>
                            {showMore ? description : shortDescription}
                            {isLong && (<span onClick={() => { setShowMore(!showMore) }} className='px-2 rounded-md cursor-pointer text-blue-700 underline'>
                                {showMore ? "Read Less" : "Read More"}
                            </span>)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCard
