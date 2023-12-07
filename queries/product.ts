import { groq } from 'next-sanity';

export const productBody = groq`{
  _id,
  _rev,
  _type,
  _createdAt,
  _updatedAt,
  name,
  slug {
    _type,
    current
  },
  description,
  basePrice,
  discountedPrice,
  image {
    asset -> {
      _id,
      url
    }
  },
  reason,
  condition
}`;

export const getProductBySlugQuery = groq`*[_type == "product" && slug.current == $slug && !(_id in path('drafts.**'))][0] ${productBody}`;

export const getAllProductsQuery = groq`*[_type == "product" && !(_id in path('drafts.**'))] ${productBody}`;
