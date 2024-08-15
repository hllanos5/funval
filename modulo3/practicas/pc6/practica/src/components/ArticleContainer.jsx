import React from 'react'
import { Article } from './Article'

export function ArticleContainer() {
  return (
    <section className='mt-6 md:flex gap-10'>
      <Article 
      img='/images/image-retro-pcs.jpg'
      number='01'
      title='Reviving Retro PCs'
      text= 'What happens when old PCs are given modern upgrades?'
      />

      <Article 
      img='/images/image-top-laptops.jpg'
      number='02'
      title='Top 10 Laptops of 2022'
      text= 'Our best picks for various needs and budgets.'/>

      <Article 
      img='/images/image-gaming-growth.jpg'
      number='03'
      title='The Growth of Gaming'
      text= 'How the pandemic has sparked fresh opportunities.'/>
    </section>
  )
}