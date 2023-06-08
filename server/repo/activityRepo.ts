// We'll just pretend that this is an actual database.
//
// TODO: Feedback for genezio - I can't figure out how to have env vars so
// I opted to not use an actual db.. Sorry if I just missed something in the docs!

export const MORNING_ACTIVITIES: Activity[] = [
  {
    id: 1,
    name: "Morning Pages",
    description: "Write 3 pages of stream of consciousness writing",
    type: "mind.journaling",
    imageHref: "/activities/writing.jpg",
    isInteractive: false,
  },
  {
    id: 2,
    name: "Keep up with the news",
    description: "Get today's Hacker News top 10",
    type: "code.research",
    imageHref: "/activities/news.jpg",
    isInteractive: true,
    interactionName: "fetch.hackernews",
  }
];

export const AFTERNOON_ACTIVITIES: Activity[] = [
  {
    id: 3,
    name: "Go for a walk",
    description: "Take a walk around the block",
    type: "body.exercise",
    imageHref: "/activities/walk.jpg",
    isInteractive: false,
  },
  {
    id: 4,
    name: "Generate a random password",
    description: "Generate a random password",
    type: "code.automation",
    imageHref: "/activities/pass.jpg",
    isInteractive: true,
    interactionName: "generate.password",
  }
];

export const EVENING_ACTIVITIES: Activity[] = [
  {
    id: 5,
    name: "Read a book",
    description: "Read a book for 30 minutes",
    type: "mind.journaling",
    imageHref: "/activities/read.jpg",
    isInteractive: false,
  },
];

export const NIGHT_ACTIVITIES: Activity[] = [
  {
    id: 6,
    name: "Meditate",
    description: "Meditate for 10 minutes",
    type: "mind.meditation",
    imageHref: "/activities/meditate.jpg",
    isInteractive: false,
  },
];
