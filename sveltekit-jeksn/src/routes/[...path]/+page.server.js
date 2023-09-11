import createClient from '$lib/prismicio';

export async function load({ fetch, request, params }) {
  const uid = params.path.split('/').at(-1) || 'homepage';

  const client = createClient({ fetch, request });

  const document = await client.getByUID('page', uid);

  return { document };
}