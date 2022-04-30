/* eslint-disable */

import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import { services } from '../data'

const index = ({services}) => {
  console.log(services)
  return (
    <div className='p-4'>
        <h1>Bye bye world</h1>
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