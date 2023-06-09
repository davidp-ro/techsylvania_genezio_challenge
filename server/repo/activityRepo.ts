/**
 * We'll just pretend that this is an actual database, as I did not figure out
 * that in order to use env vars all I had to do was to have a .env...
 */

import { Activity } from "../models/activity";

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
  },
  {
    id: 7,
    name: "Morning Vibes",
    description: "Listen to a morning playlist, picked for you",
    type: "embed.iframe",
    imageHref: "/activities/music.jpg",
    isInteractive: true,
    interactionName: "embed.spotify",
  },
  {
    id: 8,
    name: "Take a guess",
    description: "Play some good old wordle",
    type: "embed.iframe",
    imageHref: "/activities/wordle.jpg",
    isInteractive: true,
    interactionName: "embed.games",
  },
];

export const AFTERNOON_ACTIVITIES: Activity[] = [
  {
    id: 10,
    name: "Regex Generator",
    description: "Generate a regex for a task",
    type: "code.automation",
    imageHref: "/activities/regex.jpg",
    isInteractive: true,
    interactionName: "openai.regex",
  },
  {
    id: 4,
    name: "Generate a random password",
    description: "Generate a random password",
    type: "code.automation",
    imageHref: "/activities/pass.jpg",
    isInteractive: true,
    interactionName: "generate.password",
  },
  {
    id: 9,
    name: "Are you hungry?",
    description: "Get a new recipe",
    type: "chore.cook",
    imageHref: "/activities/recipe.jpg",
    isInteractive: true,
    interactionName: "view.recipes",
  },
  {
    id: 3,
    name: "Go for a walk",
    description: "Take a walk around the block",
    type: "body.exercise",
    imageHref: "/activities/walk.jpg",
    isInteractive: false,
  },
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
  {
    id: 9,
    name: "Are you hungry?",
    description: "Get a new recipe",
    type: "chore.cook",
    imageHref: "/activities/recipe.jpg",
    isInteractive: true,
    interactionName: "view.recipes",
  },
  {
    id: 8,
    name: "Take a guess",
    description: "Play some good old wordle",
    type: "embed.iframe",
    imageHref: "/activities/wordle.jpg",
    isInteractive: true,
    interactionName: "embed.games",
  },
  {
    id: 11,
    name: "Evening Pages",
    description: "Write for a bit, maybe about your day",
    type: "mind.journaling",
    imageHref: "/activities/writing.jpg",
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
  {
    id: 12,
    name: "Go to sleep",
    description: "You should probably go rest now",
    type: "mind.meditation",
    imageHref: "/activities/sleep.jpg",
    isInteractive: false,
  },
];
