import { NextResponse } from 'next/server';
import { getUserByClerkId } from '../../../utils/auth';
import { prisma } from '../../../utils/db';
import { revalidatePath } from 'next/cache';
import { analyze } from '@/utils/ai';

export const POST = async () => {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write your entry here',
    },
  });

  const analysis = await analyze(entry.content);
  await prisma.analysis.create({
    data: {
      userId: user.id,
      entryId: entry.id,
      ...analysis,
    },
  });

  revalidatePath('/journal');

  return NextResponse.json({ data: entry });
};
