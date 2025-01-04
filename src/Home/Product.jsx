import React from 'react'

function Product() {
  return (
    <div className='h-auto bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-[length:300%_300%] animate-gradientMove'>
      <h2 className='text-4xl text-center text-blue-700'>All Products</h2>

    <div className='grid grid-cols-1 p-2 mt-10 mb-10 md:grid-cols-2 lg:grid-cols-2'>
      {[...Array(2)].map((_,index)=>(
      
      <div key={index} className='flex flex-col items-center justify-center p-10 mx-auto border border-blue-400 rounded-lg h-72 w-60 bg-gradient-to-r from-orange-200 via-white to-green-200'>
      <p>Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. The consciousness of loving and being loved brings a warmth and a richness to life that nothing else can bring.</p>
      </div>
  ))}

    </div>
    </div>
  )
}

export default Product




