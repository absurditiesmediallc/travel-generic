export const SITE = {
  website: "https://travel.af.mom/", // replace this with your deployed domain
  author: "Olivia",
  profile: "https://travel.af.mom/",
  desc: "See the world, your corner of it, whatever you like. I'll help you get there without much fuss.",
  title: "Olivia Travels",
  ogImage: "oliviatravels.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Contact",
    url: "https://google.com",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Detroit", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
