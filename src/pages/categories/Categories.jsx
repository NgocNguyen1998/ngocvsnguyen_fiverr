import React from 'react'
import { useEffect } from 'react'
import CategoriesBanner from './CategoriesBanner'
import './categories.css'
import CategoriesSection from './CategoriesSection'
import CategoriesBucket from './CategoriesBucket'
import CategoriesRelate from './CategoriesRelate'
import { useParams } from 'react-router-dom'
const Categories = () => {
  const params = useParams()
  console.log("params: ", params.ids);
  useEffect(() => {
    const inputcheck = document.body.querySelector('.inputcheck')
    const backgroundcheck = document.body.querySelector('.backgroundcheck')
    const subcheck = document.body.querySelector('.subcheck')
    inputcheck.style.display = 'block';
    subcheck.style.display = 'block';
    backgroundcheck.style.backgroundColor = 'white';
    backgroundcheck.style.position = 'fixed';
  })

  return (
    <div className='pt-40'>
      <CategoriesBanner />
      <CategoriesSection />
      <CategoriesBucket />
      <CategoriesRelate />
    </div>
  )
}

export default Categories