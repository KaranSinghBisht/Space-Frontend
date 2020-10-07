import React from 'react'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import CardContent from '../../components/ContentCard'
export const Home = () => {
  return (
    <>
      <DefaultLayout>
        <p>This will be the home page</p>
        <div style={{ float: 'left' }}>
          <CardContent />
        </div>
      </DefaultLayout>
    </>
  )
}
