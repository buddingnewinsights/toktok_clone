import {defineType} from 'sanity'

const postedBy = defineType({
  name: 'postedBy',
  title: 'PostedBy',
  type: 'reference',
  to: [{type: 'user'}],
})

export default postedBy
