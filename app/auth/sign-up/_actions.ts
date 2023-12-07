'use server';

import { emailRegex, passwordRegex } from '@/utils/regex';
import { generateFromEmail, generateUsername } from 'unique-username-generator';
import bcrypt from 'bcrypt';
import { uuid } from '@sanity/uuid';
import { getFinalUsername } from '@/utils/username';
import { client } from '@/lib/client';
import { getUserByEmailQuery } from '@/queries/user';

export async function register(formData: FormData, type: UserType) {
  const entreprise = formData.get('company') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const repeatPassword = formData.get('repeat-password') as string;

  if (!email || !password || !repeatPassword) {
    return {
      status: 422,
      data: {
        error: "L'email et le mot de passe sont requis",
      },
    };
  }

  if (type === 'commercant' && !entreprise) {
    return {
      status: 422,
      data: {
        error: "Le nom de l'entreprise est requis",
      },
    };
  }

  if (password !== repeatPassword) {
    return {
      status: 422,
      data: {
        error: 'Les mots de passe ne correspondent pas',
      },
    };
  }

  if (!emailRegex.test(email)) {
    return {
      status: 422,
      data: {
        error: "L'email n'est pas valide",
      },
    };
  }

  if (!passwordRegex.test(password)) {
    return {
      status: 422,
      data: {
        error:
          'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial',
      },
    };
  }

  const existingUser = await client.fetch(getUserByEmailQuery, {
    email,
  });

  if (existingUser) {
    return {
      status: 422,
      data: {
        error: 'Un compte existe déjà avec cet email',
      },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const name = generateFromEmail(email, 6);

  const username = await getFinalUsername(name, client, generateUsername);

  const user = await client.create({
    _id: `user.${uuid()}`,
    _type: 'user',
    email,
    name: name,
    username: {
      _type: 'slug',
      current: username,
    },
    password: hashedPassword,
    image: '',
    role: type === 'commercant' ? 1 : 0,
    company: type === 'commercant' ? entreprise : '',
  });

  if (!user) {
    return {
      status: 500,
      data: {
        error: 'Une erreur est survenue lors de la création du compte',
      },
    };
  }

  return {
    status: 200,
  };
}
