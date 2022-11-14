import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menu, setMenu] = useState<string>('menu')

  const handleMenu = () => {
    setIsOpen(!isOpen)

    const timer = setTimeout(() => {
      menu === 'menu' ? setMenu('close') : setMenu('menu')
      clearTimeout(timer)
    }, 400)
  }

  return (
    <div id='menu'>
      <div className={`burger ${isOpen ? 'is-open' : ''}`} onClick={() => handleMenu()}>
        <p>{menu}</p>
      </div>
      <nav className={`${isOpen ? 'is-open' : ''}`}>
        <ul>
          {/* <li data-testid='navToHome'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/admin'>Admin</NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
