import React from 'react'
import { SectionCard } from '../../components/SectionCard'
import { DefaultLayout } from '../../layouts/DefaultLayout'
export const Home = () => {
  return (
    <DefaultLayout>
      <p>This will be the home page</p>
      <SectionCard />
    </DefaultLayout>
  )
}
