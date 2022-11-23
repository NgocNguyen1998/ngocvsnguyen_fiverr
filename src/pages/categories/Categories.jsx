import React from 'react'
import { useEffect } from 'react'
import CategoriesBanner from './CategoriesBanner'
import './categories.css'
import CategoriesSection from './CategoriesSection'
import CategoriesBucket from './CategoriesBucket'
const Categories = () => {
    useEffect(() => {
        const inputcheck = document.body.querySelector('.inputcheck')
        const backgroundcheck = document.body.querySelector('.backgroundcheck')
        const subcheck = document.body.querySelector('.subcheck')
        inputcheck.style.display = 'block';
        subcheck.style.display = 'block';
        backgroundcheck.style.backgroundColor = 'white';
      })
  return (
    <div className='py-9'>
        <CategoriesBanner/>
        <CategoriesSection/>
        <CategoriesBucket/>
    </div>
  )
}

export default Categories