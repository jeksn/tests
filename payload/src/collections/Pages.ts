import { CollectionConfig } from 'payload';

// In my tutorial video, the auto complete wasn’t working, so I added the following manually
import { Cover } from '@/blocks/Cover/schema';
import { Image } from '@/blocks/image/schema';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    // Adding layout settings with blocks
    {
      name: 'layout',
      type: 'blocks',
      label: 'Layout',
      blocks: [Cover, Image],
    }
  ]
}