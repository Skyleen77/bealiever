import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION;
const token = process.env.SANITY_TOKEN;

export const clientCDN = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
  ignoreBrowserTokenWarning: true,
});

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
