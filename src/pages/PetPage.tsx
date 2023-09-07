import React from 'react'
import { useParams } from 'react-router'

export const PetPage = () => {
    const params = useParams<'id'>()
  return (
    <div>Pet {params.id}</div>
  )
}