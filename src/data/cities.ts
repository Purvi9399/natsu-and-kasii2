// src/data/cities.ts
export interface City {
  slug: string;
  name: string;
  description: string;
  accent: string; // primary accent color
  gradient: string; // hero background
  bestTime: string;
  savorStroll: { title: string; detail: string }[];
  postcards: { image: string; caption: string }[];
  thingsToDo: { title: string; detail: string }[];
  itineraryPrompt?: string; // optional custom pitch
}

export const cities: City[] = [
  {
    slug: 'berlin',
    name: 'Berlin',
    description:
      'A restless canvas of history and reinvention—graffiti-lined alleys, techno pulses, and sunlit brunches.',
    accent: '#D9447C',
    gradient: 'linear-gradient(135deg, #fde8f5 0%, #fff3eb 70%)',
    bestTime:
      'Late spring through early autumn. The city hums with open-air cafés, street art alive in golden light.',
    savorStroll: [
      {
        title: 'Vintage Brunch in Kreuzberg',
        detail: 'Start your day at a cafe filled with retro charm and soft jazz drifting from the speakers.',
      },
      {
        title: 'Hidden Gallery Walks',
        detail: 'Explore side streets for murals and pop-up installations—not on every tourist map.',
      },
      {
        title: 'Night Pulse',
        detail: 'Feel the nightlife shift from cool lounges to immersive beats—techno as ritual.',
      },
    ],
    postcards: [
      {
        image: '/images/berlin.png',
        caption: 'The dome’s glow at sunset—when old stones meet new voices.',
      },
      {
        image: '/images/berlin.png',
        caption: 'Spontaneous street-side coffee after a rainy wander.',
      },
    ],
    thingsToDo: [
      {
        title: 'Checkpoint Charlie & History Dives',
        detail: 'Layered narratives of division and reunification, both painful and hopeful.',
      },
      {
        title: 'Mauerpark Market',
        detail: 'Sunday flea finds, karaoke chaos, and people-watching at its best.',
      },
    ],
    itineraryPrompt:
      'Tell me the mood (adventure / chill / cultural), dates, and group size—let us craft the Berlin rhythm for you.',
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    description:
      'Fog-wreathed stone streets, old stories whispered in pubs, and the soft weight of history in every lane.',
    accent: '#6F4E7C',
    gradient: 'linear-gradient(135deg, #f0e6f7 0%, #f9f3ee 70%)',
    bestTime:
      'Spring (April–May) and early autumn—clear air, fewer crowds, and golden afternoons on the hilltops.',
    savorStroll: [
      {
        title: 'Royal Mile Morsels',
        detail: 'Taste local pastries between wandering the historic spine of the city.',
      },
      {
        title: 'Cozy Tea Corners',
        detail: 'Find a tearoom near a forgotten stairwell and linger over stories in china cups.',
      },
    ],
    postcards: [
      {
        image: '/images/edinburgh.png',
        caption: 'Castle silhouette at dusk, echoing tales of kings and rebels.',
      },
    ],
    thingsToDo: [
      {
        title: 'Arthur’s Seat Hike',
        detail: 'A morning climb for skyline views and quiet reflection.',
      },
      {
        title: 'Underground Vault Tour',
        detail: 'Explore the city’s hidden underside—equal parts eerie and grounding.',
      },
    ],
    itineraryPrompt:
      'What tone do you want—mysterious, relaxed, or story-chasing? Give us your dates and we’ll map a walk that feels like a memory.',
  },

  // Add other cities similarly...
];
