import Link from 'next/link';
import EntryCard from '../../../components/EntryCard';
import NewEntryCard from '../../../components/NewEntryCard';
import { getUserByClerkId } from '../../../utils/auth';
import { prisma } from '../../../utils/db';
import Question from '../../../components/Question';

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();
  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="my-8">
        <Question />
      </div>
      <div className="grid grid-cols-3 gap-4 p-10">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
