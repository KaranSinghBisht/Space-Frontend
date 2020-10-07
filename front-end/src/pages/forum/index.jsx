import React from 'react'

import { DefaultLayout } from '../../layouts/DefaultLayout'
import ForumPost from './ForumPost'

export const Forum = () => {
  return (
    <DefaultLayout>
      <p>This will be the forum page</p>
      <ForumPost />
    </DefaultLayout>
  )
}
