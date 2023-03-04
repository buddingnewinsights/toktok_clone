import {createClient}  from '@sanity/client';

export const client = createClient({
  projectId: 'gv69ml1p',
  dataset: 'production',
  apiVersion: '2023-03-03',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
