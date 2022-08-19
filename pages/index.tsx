/* eslint-disable */

import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {
  return (
    <div className='flex flex-col px-6 pt-1 flex-grow'>
        <h5 className='my-3 font-medium'>
          I am currently pursuing Informatics from Gunadarma University. 
        </h5>
        <div className='p-4 mt-5 bg-gray-400 flex-grow'
             style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h6 className='my-3 text-xl font-bold tracking-wide'>
            What I Offer
          </h6>
          <div className='grid lg:grid-cols-2 gap-6'>
            {services.map(service=>(
              <div className='lg:col-span-1 bg-gray-200 rounded-lg'>
              <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
    </div>

  )
}

export default index

/*export const getServerSideProps = async (
    context: GetServerSidePropsContext
  ) => {
  //Calculation 

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  console.log('SERVER', services);

  return {
    props:{
      services: data.services,
    },
  }
}*/

export const getStaticProps = async (
  context: GetStaticPropsContext
) => {
//Calculation 

const res = await fetch('http://localhost:3000/api/services')
const data = await res.json()

console.log('SERVER', services);

return {
    props:{
      services: data.services,
    },
  }
}