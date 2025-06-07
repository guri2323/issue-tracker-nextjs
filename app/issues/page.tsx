import prisma from "@/prisma/client";
import IssueActions from "./issueActions";
import { Issue, Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssuesTable from "./IssuesTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue; page: string };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const statuses = new Set(Object.values(Status));

  const status = statuses.has(params.status) ? params.status : undefined;

  const where = { status };

  const orderBy = params.orderBy
    ? {
        [params.orderBy]: "asc",
      }
    : undefined;

  const page = parseInt(params.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy: orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where,
  });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssuesTable searchParams={params} issues={issues} />
      <Pagination
        pageSize={pageSize}
        itemCount={issueCount}
        currentPage={page}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Issues",
  description: "List of issues",
};

export default IssuesPage;
