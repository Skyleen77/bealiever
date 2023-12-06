import { getUserByUsernameQuery } from '@/queries/user';
import { SanityClient } from 'next-sanity';
import slugify from 'react-slugify';

const getRandomChar = () => {
  let string = '0123456789-_';
  let randomIndex = Math.floor(Math.random() * string.length);
  let randomChar = string[randomIndex];

  return randomChar;
};

export const getFinalUsername = async (
  username: string | null | undefined,
  client: SanityClient,
  generateUsername: () => string,
) => {
  let testUsername = slugify(username || generateUsername());
  let finalUsername: string | null = null;

  while (finalUsername === null) {
    const user = await client.fetch(getUserByUsernameQuery, {
      username: testUsername,
    });

    if (!user) {
      finalUsername = testUsername;
    } else {
      testUsername += getRandomChar();
    }
  }

  return finalUsername;
};
