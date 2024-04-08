import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

const minutesIn30Days = 30 * 24 * 60;

crons.interval(
  "delete any old files marked for deletion",
  { minutes: minutesIn30Days }, 
  internal.files.deleteAllFiles
);

export default crons;