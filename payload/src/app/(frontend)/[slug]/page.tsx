import type { Metadata } from 'next'

// import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
// import { homeStatic } from '@/endpoints/seed/home-static'

import type { Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
// import { RenderHero } from '@/heros/RenderHero'
// import { generateMeta } from '@/utilities/generateMeta'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export default function Page() {

  return (
    <article className="pt-16 pb-24">
      hej
      <RenderBlocks blocks={[]} />
    </article>
  )
}   