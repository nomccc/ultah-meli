import React from 'react'
import ReactPlayer from 'react-player'

const Halaman3 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-3/5'>
      <ReactPlayer  width={240} height={140}   url={'/videos/video1.mp4'} controls={true}/>
      </div>
      <div  className='flex flex-col items-center justify-center'>
      <p className=' animate-ping font-bold text-red-500 text-3xl   my-8'>HABEDE MELI</p>
      <p className='px-5 text-xl'>Semoga tahun ini jadi tahun yang baik buat kamu yaw. Bismillah makin shalihah, panjang umur, sehat selalu, dilancarkan segala urusannya sama Allah</p>
      </div>
      <div className='flex flex-row mt-16'>
      <img className='animate-bounce' src="img/meliglitch.jpg" width={150} alt="" />
      <img className='animate-spin' src="img/roy.jpg" width={150} alt="" />
      </div>
    <div>
      <img src="img/melijempol.jpg" className='animate-pulse' width={200} alt="" />
    </div>
      {/* <video src="/videos/video1.mp4"></video> */}
    </div>
    )
}

export default Halaman3