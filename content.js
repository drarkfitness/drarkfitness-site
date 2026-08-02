/* ============================================================
   DR. ARK FITNESS — EDIT THIS FILE
   ============================================================

   This is the ONLY file you need to change for prices, FAQs,
   client results, and contact details.

   RULES — read once, then you will not break anything:

   1. Only change text INSIDE the "quote marks".
   2. Never delete a quote mark, comma, or curly bracket.
   3. If your text contains an apostrophe, that is fine.
   4. After editing, commit the file. The site updates in ~30 seconds.

   ============================================================ */

const CONTENT = {

  /* ----------------------------------------------------------
     1. PRICE
     ---------------------------------------------------------- */

  price: "PKR 80,000",
  priceNote: "16 weeks · everything included",

  /* This same price is shown in the FAQ answer below too —
     remember to change it in both places. */


  /* ----------------------------------------------------------
     2. PROGRAM NAME AND LENGTH
     ---------------------------------------------------------- */

  programName: "The 16-Week Rebuild with Dr. ARK",
  programLength: "16 weeks",


  /* ----------------------------------------------------------
     3. CONTACT DETAILS
     ---------------------------------------------------------- */

  whatsappNumber: "923329999875",        /* no +, no spaces */
  whatsappDisplay: "+92 332 9999875",
  email: "drarkfitness@gmail.com",
  instagram: "dr.arkfitness",
  tiktok: "drarkfitness",
  city: "Peshawar, Pakistan",


  /* ----------------------------------------------------------
     4. CLIENT RESULTS
     ---------------------------------------------------------- 

     To ADD a client: copy one whole block from { to },
     paste it after the last one, and edit it.

     To REMOVE a client: delete the whole block from { to },
     including the comma after it.

     For photos: upload them to the images folder on GitHub,
     then write the filename here, e.g. "images/client1-before.jpg"
     Leave the photo fields empty ("") to show a grey placeholder.
  */

  clients: [

    {
      name: "[First name or initials]",
      age: "[age]",
      duration: "16 weeks",
      headline: "",        /* one strong line, in their words, e.g. "Fitter than I have been in ten years" */
      video: "",           /* a video testimonial link (YouTube/Vimeo), or leave empty */
      quote: "[Their strongest line, exactly as they said it]",
      before: "[What they had tried before and why it did not work]",
      changed: "[The two or three main things you did differently]",
      result: "[What happened, in plain words]",
      photoBefore: "",
      photoAfter: "",
      /* Numbers — leave "" to hide that row */
      weightStart: "",
      weightEnd: "",
      weightUnit: "kg",     /* "kg" or "lb" */
      waistStart: "",
      waistEnd: "",
      waistUnit: "in",      /* "in" or "cm" */
      hba1cStart: "",
      hba1cEnd: ""
    },

    {
      name: "[First name or initials]",
      age: "[age]",
      duration: "16 weeks",
      headline: "",        /* one strong line, in their words, e.g. "Fitter than I have been in ten years" */
      video: "",           /* a video testimonial link (YouTube/Vimeo), or leave empty */
      quote: "[Short quote in their own words]",
      before: "[Context]",
      changed: "[What you did]",
      result: "[Outcome]",
      photoBefore: "",
      photoAfter: "",
      weightStart: "",
      weightEnd: "",
      weightUnit: "kg",     /* "kg" or "lb" */
      waistStart: "",
      waistEnd: "",
      waistUnit: "in",      /* "in" or "cm" */
      hba1cStart: "",
      hba1cEnd: ""
    },

    {
      name: "[First name or initials]",
      age: "[age]",
      duration: "16 weeks",
      headline: "",        /* one strong line, in their words, e.g. "Fitter than I have been in ten years" */
      video: "",           /* a video testimonial link (YouTube/Vimeo), or leave empty */
      quote: "[Short quote in their own words]",
      before: "[Context]",
      changed: "[What you did]",
      result: "[Outcome]",
      photoBefore: "",
      photoAfter: "",
      weightStart: "",
      weightEnd: "",
      weightUnit: "kg",     /* "kg" or "lb" */
      waistStart: "",
      waistEnd: "",
      waistUnit: "in",      /* "in" or "cm" */
      hba1cStart: "",
      hba1cEnd: ""
    }

  ],


  /* ----------------------------------------------------------
     5. YOUR PHOTOS
     ----------------------------------------------------------
     Upload to the images folder, then put the filename here.
     Leave empty ("") to show a grey placeholder.
  */

  photoHero: "",       /* e.g. "images/hero.jpg" */
  photoAbout: "",      /* e.g. "images/about.jpg" */
  videoUrl: "",        /* YouTube embed link, or leave empty */


  /* ----------------------------------------------------------
     6. QUESTIONS AND ANSWERS
     ----------------------------------------------------------

     To ADD a question: copy a line, paste it below, edit it.
     To REMOVE one: delete the whole line including the comma.
     Order on the page is the same as the order here.
  */

  faqs: [

    { q: "Can I eat rice and roti?",
      a: "Yes. Rice and roti did not make you gain weight. Eating more than your body uses did. We work out how much you can have and when to have it." },

    { q: "Is this for women too?",
      a: "Yes. Most of the plan is the same for everyone. What changes is training, calories, and things like PCOS, periods and pregnancy history, which are all taken into account." },

    { q: "Can I build muscle and lose fat at the same time?",
      a: "Yes, especially if you are new to proper training or coming back after a break. It needs enough protein, real resistance training, and a sensible calorie level — which is exactly how the plan is built." },

    { q: "What is the daily monitoring?",
      a: "You log your workouts, meals and a few habits in the app. It takes under two minutes. I see it daily, so when something needs changing it gets changed immediately instead of a week later." },

    { q: "Which app do you use?",
      a: "Trainerize at the moment, with our own app coming. Everything sits in one place — your plan, your workouts, your logs and your progress." },

    { q: "Why sixteen weeks and not twelve?",
      a: "Twelve weeks gets you started. Sixteen gets you a change you can actually see, and gives the new habits enough time to stop feeling like effort." },

    { q: "I have paid a coach before and it did not work.",
      a: "Ask yourself what you actually got. Usually one plan, sent once, with nobody watching and nobody checking whether something else was getting in the way." },

    { q: "How much time does this take?",
      a: "Two to four hours a week for training, plus about two minutes a day in the app." },

    { q: "Do I need blood tests?",
      a: "Not always. If you have recent reports, bring them. If your history suggests tests would help, we arrange them early on." },

    { q: "Do I need a gym?",
      a: "No. The plan is built around what you have. Home training works if it is programmed properly." },

    { q: "I am not in Pakistan. Can I still do this?",
      a: "Yes. Everything runs online and clients join from wherever they are." },

    { q: "What does it cost?",
      a: "PKR 80,000 for the full sixteen weeks, everything included. Founding group pricing, small number of places." },

    { q: "What happens after sixteen weeks?",
      a: "You get a written plan for keeping your results and running it yourself. If you want lighter ongoing support, we talk about it near the end." }

  ]

};
