import React from 'react'

const Header = () => {
  let jumiaColor = {
    color:'#f68b1e'
  }
  return (
    
    <>
      <header>
        <div className='ads-container'>
          <div className="ads container"></div>
        </div>
        <div className='sell-on-jumia'>
          <div className="container h-100 d-flex px-0">
            <div className='d-flex align-items-center col-5 gap-2'>
              <img src="/images/logo2.png" alt="" height={12}/>
              <span><a href="" className='onHover-underline' style={jumiaColor}>Sell on Jumia</a></span>
            </div>
            <div className='d-flex align-items-center col-7 gap-3'>
              <img src="/images/logo.png" alt="" height={30}/>
              <img src="/images/jumia-pay-white.png" alt="" className='color-onHover' height={12}/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header