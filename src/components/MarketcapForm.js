import React, {useState} from 'react'

function MarketcapForm() {
    const [input, setInput] = useState('');

  return (
    <form className='marketcap-form'>
        <input
        type='number'
        placeholder='Enter Current Price'
        value={input}
        name='current-price'
        className='current-price-input' 
        />
        <input
        type='number'
        placeholder='Enter Circulating Supply'
        value={input}
        name='circulating-supply'
        className='circulating-supply-input'
        />
        <button  className='enter-button'>
            Calculate
        </button>


    </form>
  )
}

export default MarketcapForm







 

