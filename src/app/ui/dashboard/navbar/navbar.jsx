'use client'

import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'

const Navbar = () => {

  const pathname = usePathname()

  return (
    <div className={styles.container}></div>
  )
}

export default Navbar
