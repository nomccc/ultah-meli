import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Halaman2 = () => {
  const [namaMeli, setNama] = useState('')
  const [gorengan, setGorengan] = useState(0)
  const [error, setError] = useState()
  const navigate = useNavigate()

  const nama = 'mellyana candra'

  

  function checkNama(e) {
    e.preventDefault()
    if (namaMeli == nama || namaMeli == 'Mellyana Candra') {
      navigate('/halaman3')
    } else {
      setError('SALAAAHHHHH')
      setGorengan (gorengan + 5);
    }
  }

  return (
    <div className="flex flex-col mx-auto my-20 w-3/5 justify-center items-center h-auto">
    <p className="my-10 font-bold text-center text-4xl">
      Sebutkan nama yg lagi ultah! Kalo salah bayar gorengan
    </p>
    <form action="" onSubmit={(e)=> {
      checkNama(e)
    }}>
    <input type="text" placeholder='nama' className='p-3 border-2' onChange={(e) => {
      setNama(e.target.value)
      }
    }/>

    <button className='my-8 bg-yellow-400 w-full p-2 rounded-2xl'
    >Tekan ini kalo dah ngetik</button>
    </form>
    <p>{error}</p>
    <div>
      <p>gorengan = {gorengan} rebu</p>
    </div>
    <img src="/img/duduk.jpeg" className="mt-20 animate-bounce " width={200} alt="foto salam" />
  </div>
  )
}

export default Halaman2