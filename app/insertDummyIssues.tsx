import { PrismaClient } from "@prisma/client";
import { issueData } from "./dummyIssuesData";

const prisma = new PrismaClient();

async function main() {
  await prisma.issue.createMany({
    data: issueData,
    skipDuplicates: true,
  });
  console.log("✅ 30 issues inserted successfully");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

const InsertDummyIssues = () => {
  return <></>;
};

export default InsertDummyIssues;
