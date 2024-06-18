import React from 'react'

const Result = ({result}) => {
    return (
        <div className="flex justify-center">
            <div className="bg-gray-400 text-white p-6 rounded m-4">
                {result}
            </div>
        </div>
    )
}

export default Result
    