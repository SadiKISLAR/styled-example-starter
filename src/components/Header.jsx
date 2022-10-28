import React from 'react'
import Button from './styles/Button.styled'
import { Logo } from './styles/Header.styled'

const Header = () => {
  return (
    <div>
        <div>
            <Logo src="../../public/images/logo.png" alt="" />
            <div>
                <Button color="#A62440">Apply Courses</Button>
                <Button bg="#A62440">Talk to Adviser</Button>
            </div>
        </div>
        <div>
            <div>
                <h1></h1>
                <p></p>
                <Button>Start Your New Carier</Button>
            </div>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Header