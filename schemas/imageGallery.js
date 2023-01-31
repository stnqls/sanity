import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          hotspot: true,
          fields: [
            {
              name: 'alt',
              title: 'alt',
              type: 'string',
              options: {
                isHighlighted: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required().max(4),
    }),
  ],
})
