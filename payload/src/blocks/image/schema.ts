import type { Block } from 'payload'

export const Image: Block = {
  slug: 'image',
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}