import React, { useState } from 'react'

const QRcodeGenerator = () => {
    const [search, setSearch] = useState('')
    const [qr, setQr] = useState('')

    const fetchQrCode = async (value) => {
        try {
            const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`)
            const data = await fetch(response.url)
            console.log(data)
            setQr(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-5'>
            <div className='bg-white shadow-lg rounded-lg p-8 max-w-sm w-full'>
                <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>QR Code Generator</h1>
                <div className='flex flex-col items-center gap-y-4'>
                    <input
                        type="text"
                        className='border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-500'
                        name='qr-code'
                        value={search}
                        onChange={handleInputChange}
                        placeholder='Enter your value here'
                    />
                    <button
                        className='bg-purple-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400'
                        onClick={() => fetchQrCode(search)}
                    >
                        Generate
                    </button>
                </div>
                <div className='mt-8 h-40 w-40 mx-auto border border-gray-300 rounded-lg shadow-lg flex items-center justify-center bg-gray-50'>
                    {qr ? (
                        <img
                            src={`${qr.url}`}
                            alt='Generated QR code'
                            className='h-auto w-auto'
                        />
                    ) : (
                        <span className='text-gray-400'>QR Code will appear here</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default QRcodeGenerator
