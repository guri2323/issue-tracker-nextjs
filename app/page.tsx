import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination itemCount={100} pageSize={10} currentPage={2} />;
}

export const metadata = {
  title: "Issue-Tracker - Dashboard",
  description: "View Summary of project issues",
};
