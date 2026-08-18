import SuccessStoryCard from "../components/SuccessStoryCard";
import DashboardCard from "../components/DashboardCard";
import { successStories } from "../data/sampleData";

function HallOfImprovements() {
  const studentsHelped = successStories.reduce(function (sum, story) {
    return sum + story.students;
  }, 0);

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h1>Hall of Improvements</h1>
          <p>
            Real campus problems that were reported by students and completely solved by the
            departments. Each card shows the problem, the action taken and the final result.
          </p>
        </div>

        <div className="grid grid-3 mb">
          <DashboardCard value={successStories.length} label="Major improvements" />
          <DashboardCard value={studentsHelped.toLocaleString()} label="Students benefited" />
          <DashboardCard value="18 days" label="Average project time" />
        </div>

        <div className="grid grid-2">
          {successStories.map(function (story) {
            return <SuccessStoryCard key={story.id} story={story} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HallOfImprovements;
