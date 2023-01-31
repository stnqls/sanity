import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Url',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'href',
    },
  },
})
