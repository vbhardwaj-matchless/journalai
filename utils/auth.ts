import { currentUser } from '@clerk/nextjs/server';
import { prisma } from './db';

export const getUserByClerkId = async () => {
  const userId = await currentUser();
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId?.id as string,
    },
  });

  return user;
};
