import type { Project } from "./utils/types";

export const projects: Project[] = [
  {
    id: "overlaps-of-the-three",
    title: "Overlaps of the three",
    year: 2020,
    description: "Analytics product for the overlap of three datasets",
    types: ["vis", "product", "eng", "analytics"],
    data: ["social"],
    isPrivate: true,
  },
  {
    id: "best-bookshelf",
    title: "Best bookshelf",
    year: 2017,
    description:
      "Data visualization of yearly best books by the New York Times",
    url: "https://projects.tany.kim/best-bookshelf/",
    types: ["vis", "eng"],
    data: ["other"],
    notes: [
      {
        location: "Medium",
        action: "Read",
        type: "post",
        links: [
          "https://medium.com/@tanykim/best-bookshelf-data-visualization-adapting-real-world-objects-with-d3-js-ca420b5d79cc",
        ],
      },
    ],
  },
  {
    id: "interactive-knitting-patterns",
    title: "Interactive knitting patterns",
    year: 2023,
    description: "Crafting new areas where knitting meets coding",
    url: "https://knitting.tany.kim/",
    types: ["product", "eng"],
    notes: [
      {
        location: "Ravelry",
        action: "Check out",
        type: "profile",
        links: ["https://www.ravelry.com/designers/tanyoung-kim"],
      },
    ],
  },
  {
    id: "master-swim-workout",
    title: "Master swim workout",
    year: 2023,
    description: "Workout plan app for master swimmers in two minutes",
    url: "https://tanykim.github.io/master-swim-workout",
    types: ["product", "eng"],
  },
  {
    id: "shades-of-exercise",
    title: "Shades of exercise",
    year: 2020,
    description: "Data visualization of yearly exercise log",
    url: "http://tany.kim/exercise/",
    types: ["vis", "eng"],
    data: ["personal", "sports"],
  },
  {
    id: "fans-or-enemies",
    title: "Fans or enemies",
    year: 2017,
    description: "Data visualization of sports fans's behavior on social media",
    types: ["vis", "eng", "analytics", "research"],
    data: ["sports", "social"],
    notes: [
      {
        location: "VIS 2017",
        action: "Read",
        type: "poster paper",
        links: ["http://tany.kim/files/shared_fans_cameraReady.pdf"],
      },
    ],
  },
  {
    id: "swimmers-history",
    title: "Swimmers' history",
    year: 2017,
    description:
      "Data visualization of major international swimming competitions",
    url: "http://tany.kim/swimmers-history/",
    types: ["vis", "eng"],
    data: ["sports"],
    notes: [
      {
        location: "Medium",
        action: "Read",
        type: "post",
        links: [
          "https://medium.com/@tanykim/data-visualization-of-elite-swimmers-competition-results-part-1-datasets-bd09b68154c2",
          "https://medium.com/@tanykim/data-visualization-of-elite-swimmers-competition-results-part-2-design-dc86d77946b8",
          "https://medium.com/@tanykim/data-visualization-of-elite-swimmers-competition-results-part-3-insights-7ec5862f48a7",
        ],
      },
    ],
  },
  {
    id: "10-years-of-twitter",
    title: "10 years of twitter",
    year: 2016,
    description: "Data Visualization of +102K Tweets of a Course of 10 Years",
    url: "http://tany.kim/twitter",
    types: ["vis", "eng", "analytics"],
    data: ["personal", "social"],
    notes: [
      {
        location: "Medium",
        action: "Read",
        type: "post",
        links: [
          "https://medium.com/@tanykim/side-project-10-years-of-twitter-8fd5724f7b1a",
        ],
      },
    ],
  },
  {
    id: "quantify-your-year",
    title: "Quantify your year",
    year: 2016,
    description: "Data visualization of personal year in numbers",
    url: "http://tany.kim/quantify-your-year",
    types: ["vis", "eng", "analytics"],
    data: ["personal", "sports", "social", "other"],
  },
  {
    id: "julie-and-julia",
    title: "Julie & Julia",
    year: 2016,
    description: "Search and text visualization of a movie script",
    url: "http://tany.kim/julie-and-julia/",
    types: ["vis", "eng", "analytics"],
    data: ["other"],
    notes: [
      {
        location: "Medium",
        action: "Read",
        type: "post",
        links: [
          "https://medium.com/@tanykim/julie-julia-film-script-search-and-text-visualization-f4e32273a65c",
        ],
      },
    ],
  },
  {
    id: "team-usa",
    title: "Team USA",
    year: 2018,
    description:
      "Data visualization 2016 & 2018 Olympics Team USA athletes by sport and age",
    url: "http://tany.kim/team-usa/",
    types: ["vis", "eng", "analytics"],
    data: ["sports"],
  },
  {
    id: "bear-match",
    title: "Bear match",
    year: 2017,
    description: "Data visualization of a personal or duo's beer drinking data",
    url: "http://beer.tany.kim/",
    types: ["vis", "eng", "analytics", "research"],
    data: ["personal", "social"],
    notes: [
      {
        location: "VIS 2016",
        action: "Read",
        type: "poster paper",
        links: ["http://tany.kim/files/beer_cameraReady.pdf"],
      },
    ],
  },
  {
    id: "road-to-masterpiece",
    title: "Road to masterpiece",
    year: 2016,
    description:
      "Data visualization of 61 film directors' career on the way to the Oscar's best director",
    url: "http://tany.kim/masterpiece/",
    types: ["vis", "eng", "analytics"],
    data: ["other"],
  },
  {
    id: "commute",
    title: "Commute",
    year: 2014,
    description:
      "Data visualization of commuting patterns collected via a location tracking app",
    types: ["vis", "eng", "analytics", "research"],
    data: ["personal"],
    notes: [
      {
        location: "VIS 2015",
        action: "Read",
        type: "poster paper",
        links: ["http://tany.kim/papers/commute_cameraReady.pdf"],
      },
    ],
  },
  {
    id: "very-personal-film-logs",
    title: '"Very personal" film logs',
    year: 2013,
    description: "Data visualization of personal film logs of 10 years",
    url: "http://tany.kim/very-personal-film-logs/",
    types: ["vis", "eng", "analytics"],
    data: ["personal", "other"],
  },
  {
    id: "coded-visualization",
    title: "Coded visualization",
    year: 2013,
    description:
      "Ph.D. dissertation on the rhetoric and aesthetics of data-based cultural interface",
    types: ["research"],
    notes: [
      {
        location: "Ph.D. dissertation",
        action: "Download",
        type: "here",
        links: ["http://tany.kim/files/tanykim_dissertation.pdf"],
      },
    ],
  },
];
