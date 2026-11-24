/**
 * CLIENT CONFIGURATION
 * --------------------
 * Change client-specific content here. Keep quotation marks and commas intact.
 */

// demo values: replace per customer
const DEMO_CONTACT = {
  phoneDisplay: "+44 7700 900123",
  phoneTel: "+447700900123",
  whatsappDigits: "447700900123",
  email: "rsvp@example.com",
};

window.INVITATION_CONFIG = {
  site: {
    title: "Charlotte & Henry — Wedding Invitation",
    description:
      "You are warmly invited to celebrate the wedding of Charlotte Mowbray and Henry Cavendish.",
  },

  couple: {
    brideInitial: "C",
    groomInitial: "H",
    bride: {
      name: "Charlotte Mowbray",
      relation: "Daughter of",
      parents: "Mr & Mrs Edward Mowbray",
    },
    groom: {
      name: "Henry Cavendish",
      relation: "Son of",
      parents: "Mr & Mrs Richard Cavendish",
    },
  },

  copy: {
    verse: "Holy Matrimony",
    verseTranslation:
      "",
    welcomeLine: "We request the honour of your\npresence at the wedding of",
    invitation:
      "",
    heroClosing:
      "as they begin their forever in\nfaith and love.",
    welcomeTitle: "A Blessed Beginning",
    welcomeBody:
      "With hearts full of gratitude, we warmly invite you to join us as we celebrate this beautiful beginning with the love, joy, and blessings of our families.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can’t wait to celebrate with you.",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2027-10-16T16:00:00+01:00",
    date: "October 16, 2027",
    day: "Saturday",
    time: "04:00 PM",
    timezone: "BST",
  },

  media: {
    // Replace these two files inside the /media folder.
    introVideo: "./media/intro-placeholder.mp4",
    introPoster:
      "./media/intro-placeholder.webp",
    music: "./media/music-placeholder.mp3",

    // Replace gallery URLs with your own hosted files or image URLs.
    gallery: [
      {
        src: "./media/gallery/01.webp",
        alt: "A couple beneath a white garden arch at dusk",
        caption: "",
      },
      {
        src: "./media/gallery/02.webp",
        alt: "A bride and groom touching hands with their wedding rings",
        caption: "",
      },
      {
        src: "./media/gallery/03.webp",
        alt: "A bride and groom holding hands on a lawn at golden hour",
        caption: "",
      },
    ],
  },

  program: [
    {
      time: "03:30 PM",
      title: "Guest Arrival",
      note: "",
    },
    {
      time: "04:00 PM",
      title: "Wedding Ceremony",
      note: "Holy Matrimony & vows",
    },
    {
      time: "05:00 PM",
      title: "Drinks Reception",
      note: "Canapés & photographs",
    },
    {
      time: "06:30 PM",
      title: "Wedding Breakfast",
      note: "A feast shared with love",
    },
  ],

  venue: {
    name: "Ashcombe House",
    address:
      "Ashcombe Road, Dorking, Surrey",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dorking%2C%20Surrey",
  },

dressCode: {
  title: "Black Tie Welcome",
  description:
    "Morning suits, black tie, cocktail dresses, and floor-length gowns are all welcome. We kindly ask guests to avoid overly casual attire and white or ivory.",
  swatches: [
    "#7A1F2B",
    "#234638",
    "#C49A56",
    "#7A4968",
    "#31506B",
  ],
},

  preWeddingEvents: [
    {
      name: "Bridal Shower",
      date: "October 9",
      time: "2:00 PM",
      location: "Bride’s Family Home",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Dorking%2C%20Surrey",
    },
    {
      name: "Rehearsal Dinner",
      date: "October 15",
      time: "7:00 PM",
      location: "Groom's Family Home",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Dorking%2C%20Surrey",
    },
    {
      name: "Evening Party",
      date: "October 16",
      time: "7:30 PM",
      location: "Fernhill Barn, Dorking",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Dorking%2C%20Surrey",
    },
  ],

  rsvp: {
    deadline: "Kindly respond by September 18, 2027",
    contact: `For assistance, call ${DEMO_CONTACT.phoneDisplay}`,
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "Dietary notes or a message for the couple",
    },
  },

theme: {
  ivory: "#F1E3CE",       /* warm candlelit cream */
  plum: "#3A070C",        /* deepest burgundy */
  lavender: "#6F0B17",    /* wine red */
  mauve: "#A51520",       /* rose/crimson accent */
  lilac: "#D0B294",       /* warm nude / muted beige */
  champagne: "#C9A35F",   /* antique gold */
},
};
