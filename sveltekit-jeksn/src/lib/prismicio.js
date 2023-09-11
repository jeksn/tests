import * as prismic from '@prismicio/client'

const repoName = 'sveltekit-jeksn'

const routes = [
  {
    type: 'page',
    uid: 'homepage',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
]

const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    routes,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}

export default createClient
