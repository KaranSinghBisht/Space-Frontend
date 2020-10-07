import React from 'react'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import { Card } from '../../components/Card'

export const Home = () => {
  return (
    <DefaultLayout>
      <p>This will be the home page</p>
      <Card></Card>
    </DefaultLayout>
  )
}
