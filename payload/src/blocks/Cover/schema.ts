import type { Block } from 'payload';

export const Cover: Block = {
  slug: 'cover',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'richText',
      required: true
    },
    {
      name: 'subheading',
      label: 'Subheading',
      type: 'text',
    }
  ]
}