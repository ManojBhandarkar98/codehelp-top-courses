import React from 'react'

function Spinner() {
    return (
        <div className="flex flex-col items-center space-y-2">
            <div className='spinner'>
                <div className="text-bgDark text-lg font-semibold">Loading...</div>
            </div>
        </div>
    )
}
export default Spinner;