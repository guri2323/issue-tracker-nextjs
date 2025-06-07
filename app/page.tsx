import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  return <LatestIssues />;
}

export const metadata = {
  title: "Issue-Tracker - Dashboard",
  description: "View Summary of project issues",
};
