import { groq } from 'next-sanity';

export const userBody = groq`{
  _id,
  _rev,
  _type,
  _createdAt,
  _updatedAt,
  name,
  username {
    _type,
    current
  },
  email,
  emailVerified,
  image,
  password,
  role
}`;

export const getUserByUsernameQuery = groq`*[_type == "user" && username.current == $username && !(_id in path('drafts.**'))][0] ${userBody}`;

export const getUserByEmailQuery = groq`*[_type == "user" && email == $email && !(_id in path('drafts.**'))][0] ${userBody}`;
export const getAccountByUserByEmailQuery = groq`*[_type == "account" && user->email == $email && !(_id in path('drafts.**'))][0] {
  providerId,
  providerAccountId,
}`;
