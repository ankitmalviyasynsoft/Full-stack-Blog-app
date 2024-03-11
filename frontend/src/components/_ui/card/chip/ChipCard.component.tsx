import React, { useEffect, useState } from 'react'
import { ChipProps } from './ChipCard.type'
import { Chip } from '@mui/material'
import Link from 'next/link'

export default function ChipCard(props: ChipProps) {
  const { categoryData } = props


  return (
    <Link href={`/category/search-blog/${categoryData.title}`}>
      <Chip key={categoryData._id} label={categoryData.title} size="medium" variant="outlined" color='info' />
    </Link>
  )
}
