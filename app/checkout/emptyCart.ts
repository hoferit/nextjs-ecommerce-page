'use server';

import { cookies } from 'next/headers';

export async function emptyCart() {
  await cookies().set({
    name: 'cart',
    value: '',
    expires: new Date('2016-10-05'),
    path: '/',
  });
}
