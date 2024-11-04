import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';
import HistoryChart from '../../../components/HistoryChart';

const getData = async () => {
  const user = await getUserByClerkId();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
  const sum = analyses.reduce(
    (all, current) => all + current.sentimentScore,
    0
  );
  const average = Math.round(sum / analyses.length);
  return { analyses, average };
};

const History = async () => {
  const { analyses, average } = await getData();
  console.log({ analyses, average });
  return (
    <div className="w-full h-full">
      <div>{`Avg. Sentiment: ${average}`}</div>
      <div className="w-full h-full">
        <HistoryChart data={analyses} />
      </div>
    </div>
  );
};

export default History;
