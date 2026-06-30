export type Essay = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  displayDate: string;
  readingTime: string;
  issue: string;
};

export const essays: Essay[] = [
  {
    slug: "the-quiet-luxury-of-attention",
    title: "The Quiet Luxury of Attention",
    dek: "We have mistaken speed for richness. A case for the long, slow, deliberate act of noticing — and what it returns to us.",
    date: "2026-06-26",
    displayDate: "June 26, 2026",
    readingTime: "9 min read",
    issue: "Issue 41",
  },
  {
    slug: "rooms-that-remember",
    title: "Rooms That Remember",
    dek: "On houses, hauntings, and the architecture of memory — why some spaces hold us long after we have left them.",
    date: "2026-06-19",
    displayDate: "June 19, 2026",
    readingTime: "7 min read",
    issue: "Issue 40",
  },
  {
    slug: "against-the-feed",
    title: "Against the Feed",
    dek: "The infinite scroll promised abundance and delivered amnesia. A meditation on choosing edges, endings, and the dignity of less.",
    date: "2026-06-12",
    displayDate: "June 12, 2026",
    readingTime: "11 min read",
    issue: "Issue 39",
  },
  {
    slug: "the-grammar-of-elegance",
    title: "The Grammar of Elegance",
    dek: "Restraint is not the absence of expression but its highest form. Notes toward a personal aesthetics of enough.",
    date: "2026-06-05",
    displayDate: "June 5, 2026",
    readingTime: "8 min read",
    issue: "Issue 38",
  },
  {
    slug: "letters-to-a-younger-reader",
    title: "Letters to a Younger Reader",
    dek: "What I would tell someone beginning a life with books — about patience, re-reading, and the company of difficult pages.",
    date: "2026-05-29",
    displayDate: "May 29, 2026",
    readingTime: "6 min read",
    issue: "Issue 37",
  },
];

export type Note = {
  date: string;
  body: string;
};

export const notes: Note[] = [
  {
    date: "June 28",
    body: "A morning of fog over the city. The skyline edits itself down to suggestion. There is a kind of grace in what we are spared from seeing all at once.",
  },
  {
    date: "June 24",
    body: "Reread a single paragraph four times this evening — not because it was difficult, but because it was correct. Some sentences ask to be inhabited rather than passed through.",
  },
  {
    date: "June 21",
    body: "The most luxurious thing I own is an empty hour. No screen, no errand, no second person. I am learning, slowly, to stop apologising for it.",
  },
  {
    date: "June 17",
    body: "Elegance, I think, is mostly subtraction performed with confidence. The hard part is never the cut. It is trusting the silence the cut leaves behind.",
  },
  {
    date: "June 13",
    body: "A reader wrote to say a letter arrived on the exact morning she needed it. I have stopped believing in coincidence and started believing in attention as a form of timing.",
  },
  {
    date: "June 9",
    body: "Bought flowers for no occasion. The florist asked who they were for. For Tuesday, I said. She wrapped them in paper the colour of cream.",
  },
];
