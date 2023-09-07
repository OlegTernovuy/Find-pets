import React, { useEffect } from 'react'
import { Search } from '../components/pets/Search'
import { CategoryFind } from '../components/layout/CategoryFind'
import { PetsCards } from '../components/pets/PetsCards'
import { Hero } from '../components/layout/Hero'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchPets } from '../store/actions/petsActions'

export const MainPage = () => {

  const { loading, error } = useAppSelector(state => state.pets)

  return (
    <div className='w-full'>
        <Hero/>
        <Search/>
        <CategoryFind/>
        {loading && <p className='text-center text-2xl text-white'>Loading...</p>}
        {error && <p className='text-center text-2xl text-red-700'>{error}</p>}
        <PetsCards/>
    </div>
  )
}
