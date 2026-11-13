/* =============================================================================
 * SAMPLE DATA — all of this is fictional.
 *
 * This file is the only place page content lives. A private copy can swap these
 * values for real ones later. Keep the object shape and field names unchanged
 * so the page in index.html keeps working.
 *
 * Nothing here is a real camp, real person, real booking, or real financial
 * figure. Names, dates, amounts and events were invented for layout work.
 * ============================================================================= */

window.OPS_HUB_DATA = {

  /* --- Camp and people ---------------------------------------------------- */
  campName: "Pinewood Camp",
  docTitle: "Ops Hub · Pinewood Camp",
  directorsTogether: "Alex & Sam",
  owners: {
    all: "All",
    primary: "Alex",
    secondary: "Sam",
    both: "Both"
  },
  ownerLabels: {
    All: "All",
    Alex: "Alex",
    Sam: "Sam",
    Both: "Both"
  },
  outgoing: "Jordan & Riley",
  outgoingShort: "J+R",

  /* --- Clock (frozen so the sample looks the same every time you open it) */
  timeZone: "America/Denver",
  now: "2026-06-18T18:30:00-06:00",
  handoverAt: "2026-07-03T00:00:00-06:00",
  handoverLabel: "Fri 3 Jul",
  updatedLabel: "Updated 6:30 pm",
  snapshot: "Public sample · design v1 · fictional data\nSnapshot as of Thu 18 Jun 2026, 6:30 pm",

  /* --- Hero --------------------------------------------------------------- */
  heroSub: "Jordan & Riley hand over on Fri 3 Jul.",
  mustDo: {
    title: "Tonight's must-do: send the handover email to Jordan & Riley",
    detail: "They leave Friday morning (19 Jun) and are away until 28 Jun.",
    hideFor: "Sam",
    jump: "ok",
    cta: "Review draft →"
  },

  /* --- Tile captions (counts are computed live from the lists below) ----- */
  tiles: {
    okDetail: "Drafts & holds",
    doDetail: "Tonight or first thing",
    headsDetail: "Good to know"
  },

  /* --- Approvals ---------------------------------------------------------- */
  approvals: [
    {
      id: "jr",
      owner: "Alex",
      pri: "urgent",
      priLabel: "Urgent · tonight",
      title: "Handover questions to Jordan & Riley",
      why: "They leave Friday morning (19 Jun) and are away until 28 Jun. Tonight is the last easy window.",
      kv: [
        ["To", "Jordan & Riley"],
        ["From", "Alex's inbox"],
        ["Status", "Drafted, not sent"]
      ],
      draft: [
        "Who covers the property and guests 1 Jul to 3 Jul (North Shore Orchestra in Pine Lodge 1–3 Jul, work day 2 Jul, your move-out).",
        "A one-page sheet for Pat & Casey (19–28 Jun): utility contacts, generator steps, lodge freeze checks, propane gauge.",
        "Facility status and whether winterizing, chimneys, The Ridge vent and the kitchen suppression service are done or booked before the 6 Jul wedding.",
        "Rentals and team asks folded in where they fit: Riverbend Youth check-in and turnover cleaning, the Cole & Park insurance certificate (~1 Jul), work day lead, Instagram access."
      ],
      phrase: "Send the J+R handover email"
    },
    {
      id: "morgan",
      owner: "Sam",
      pri: "normal",
      priLabel: "Reply",
      title: "Reply to Morgan: Trail Week 2027 dates",
      why: "Morgan corrected Trail Week to 10–12 Aug 2027. The website still says 9–13 Aug.",
      rec: {
        label: "Suggest:",
        text: "cut the “who updates the website” line. J+R said at 4:10 pm the site was down and they'll retry tonight or after 28 Jun. A change means a fresh draft in chat."
      },
      kv: [
        ["To", "Morgan; J+R on thread"],
        ["From", "Sam's inbox"],
        ["Subject", "Re: Trail Week date update"],
        ["Status", "Drafted, not sent"]
      ],
      draft: [
        "Thanks Morgan; confirms Trail Week is 10–12 Aug 2027.",
        "Asks J+R whether they or Sam will update the website."
      ],
      phrase: "Send the Morgan reply"
    },
    {
      id: "cc",
      owner: "Both",
      pri: "normal",
      priLabel: "Calendar",
      title: "Add Program Committee dates to your calendars",
      why: "Morgan confirmed the 2026–27 dates by email on 16 Jun. None are on either camp calendar yet.",
      kv: [
        ["Dates", "8 Jul, 12 Aug, 9 Sep, 14 Oct, 11 Nov, 9 Dec 2026; 13 Jan 2027"],
        ["When", "7:30 pm at the chair's"],
        ["Where", "Alex's and Sam's camp calendars"]
      ],
      draft: [
        "Seven holds titled “Program Committee”, 7:30 pm at the chair's.",
        "8 Jul agenda note: camper fees."
      ],
      note: "Hold titles and notes are proposed wording; worth a quick check.",
      phrase: "Add them"
    },
    {
      id: "chris",
      owner: "Alex",
      pri: "low",
      priLabel: "Low · can wait",
      title: "Heads-up to Chris (treasurer)",
      why: "Low priority. Nothing depends on it this week.",
      kv: [
        ["To", "Chris (treasurer)"],
        ["Status", "Drafted, not sent"]
      ],
      draft: [],
      note: "The wording isn't copied here. Read it on the draft card in the ops chat before approving.",
      phrase: "Send the Chris note"
    }
  ],

  /* --- Today -------------------------------------------------------------- */
  today: [
    {
      kind: "do",
      owner: "Alex",
      icon: "✉️",
      title: "Send the handover email before J+R leave Friday morning",
      detail: "Draft is ready in Needs your OK. After tonight, answers wait until 28 Jun."
    },
    {
      kind: "heads",
      owner: "Both",
      icon: "🏕️",
      title: "Riverbend Youth arrives Friday at 3 pm",
      detail: "Pine Lodge, 16 guests, paid in full. Leaves Sunday 11 am. Pat & Casey are on watch 19–28 Jun."
    },
    {
      kind: "heads",
      owner: "Sam",
      icon: "🌐",
      title: "Trail Week 2027 website fix is stuck",
      detail: "J+R tried at 4:10 pm; the site was down. They'll retry tonight, otherwise after 28 Jun. Website still shows 9–13 Aug."
    },
    {
      kind: "heads",
      owner: "Sam",
      icon: "💍",
      title: "21 Aug 2027 wedding wants a July walkthrough",
      detail: "Taylor Quinn asked at 2:40 pm. J+R replied that Sam sets the date. Sat 11 Jul is the only free Saturday at The Ridge. Nothing to do before 3 Jul.",
      tag: "After 3 Jul"
    },
    {
      kind: "heads",
      owner: "Sam",
      icon: "💳",
      title: "Reed & Walsh balance falls due while J+R are away",
      detail: "$5,000 owing for 20 Jul; about 24 Jun by the one-month rule (Rentals' count; CampBook shows no due date). Asked in the handover email.",
      unverified: "Due date estimated"
    },
    {
      kind: "heads",
      owner: "Both",
      icon: "🎟️",
      title: "Gala outing must be redeemed by 20 Jun",
      detail: "River day trip bought for the spring gala ($400). A J+R or Events question.",
      unverified: "Use not verified"
    }
  ],

  /* --- Team / bots -------------------------------------------------------- */
  bots: [
    {
      name: "Rentals",
      em: "🏡",
      st: "Active",
      c: "green",
      last: "18 Jun, 9:00 am",
      wait: true,
      doing: "Rentals handover asks: Riverbend Youth check-in and turnover, an on-site contact for North Shore Orchestra 1–3 Jul, the Cole & Park insurance certificate, July wedding balances, which rate card CampBook uses.",
      waiting: "The handover email going out (Alex)."
    },
    {
      name: "Property",
      em: "🔧",
      st: "Active",
      c: "green",
      last: "18 Jun, morning",
      wait: true,
      doing: "Four handover priorities: Pat & Casey sheet, utility checks, the spring systems review and the electrician's recommendations, June SOP work before the 6 Jul wedding.",
      waiting: "The handover email going out (Alex). No one named for cover 1–3 Jul."
    },
    {
      name: "Marketing",
      em: "📣",
      st: "Active",
      c: "green",
      last: "18 Jun, morning",
      wait: true,
      doing: "Holding the hiring push for 3 Jul (15 Jun post: 5 likes, 2 shares). Asking J+R for Instagram access and the design-software account, which is billed to Jordan. Social check is now a quiet backup.",
      waiting: "Say yes if you want a 2 Jul work day reminder drafted. Close date (20 Jul vs before 24 Jul) needs the hiring group."
    },
    {
      name: "Events",
      em: "🎉",
      st: "Active",
      c: "green",
      last: "18 Jun, morning",
      wait: true,
      doing: "Spring Work Day 2 Jul: still four signups, all on leaves; no public post yet. Holiday concert is still a yes/no.",
      waiting: "Your OK to draft work day lines and a church-bulletin blurb."
    },
    {
      name: "Growth Events",
      em: "📈",
      st: "Active",
      c: "green",
      last: "18 Jun, morning",
      wait: false,
      doing: "Seven internal revenue-idea drafts (retreats, micro-weddings, kitchen blocks, sabbatical weeks) aimed at the empty late-summer stretch. No numbers until real revenue is known.",
      waiting: "Which drafts the board is open to; now an 8 Jul Program Committee question."
    },
    {
      name: "Summer Camp",
      em: "⛺",
      st: "Watching",
      c: "grey",
      last: "18 Jun, morning",
      wait: true,
      doing: "Nothing new for Ops. The board asked the committee to work with you on counsellor social posts. Hiring stays with Morgan and the board.",
      waiting: "The Program Committee calendar holds (“add them”)."
    },
    {
      name: "Questions Log",
      em: "❓",
      st: "Active",
      c: "green",
      last: "18 Jun, 5:00 pm",
      wait: false,
      doing: "Logged Q41–Q44 tonight from Drive findings: first-aid restock, cabin heating, staff-file checklist, kitchen deep-clean. 40 open, 6 decided.",
      waiting: "Nothing from you; most open items are for J+R, Morgan or the board."
    },
    {
      name: "Drive Review",
      em: "🗂️",
      st: "Paused",
      c: "grey",
      last: "18 Jun, 5:15 pm · resumes 19 Jun, 9:00 am",
      wait: false,
      doing: "Reading Alex's camp Drive and sending findings to each bot as it goes. 400 files fully read so far. Sam's Drive isn't listed yet.",
      waiting: "Nothing."
    },
    {
      name: "Video Ideas",
      em: "🎬",
      st: "Scheduled",
      c: "green",
      last: "18 Jun, 4:30 pm",
      wait: false,
      doing: "Weekly ready-to-film write-ups every Monday about 9 am, alternating you two as host. First one 22 Jun. Suggests one video a week through July.",
      waiting: "Nothing."
    }
  ],

  /* --- Coming up ---------------------------------------------------------- */
  comingFoot: "Through the 9 Jul board meeting. Both camp calendars are otherwise empty.",
  coming: [
    { d: "Fri", n: "19", m: "Jun", t: "Riverbend Youth arrives, 3 pm", s: "Pine Lodge, 16 guests, paid. J+R away until 28 Jun." },
    { d: "Sat", n: "20", m: "Jun", t: "Gala outing redemption deadline", s: "Use not verified.", unv: true },
    { d: "Sun", n: "21", m: "Jun", t: "Riverbend Youth departs, 11 am", s: "Turnover cleaning not yet confirmed." },
    { d: "Mon", n: "22", m: "Jun", t: "First weekly video write-up", s: "Video Ideas, about 9 am." },
    { d: "~", n: "24", m: "Jun", t: "Reed & Walsh balance due", s: "$5,000, estimated by the one-month rule.", unv: true },
    { d: "Sun", n: "28", m: "Jun", t: "Jordan & Riley back", s: "Last week before handover." },
    { d: "Wed", n: "1", m: "Jul", t: "J+R move out · North Shore Orchestra arrives", s: "Pine Lodge 1–3 Jul, 12 people, paid. Cole & Park insurance certificate expected." },
    { d: "Sat", n: "2", m: "Jul", t: "Spring Work Day, 8 am", s: "Four signups so far." },
    { d: "Fri", n: "3", m: "Jul", t: "Handover day and move-in", s: "Staff applications open; summer giving day.", hl: true },
    { d: "Mon", n: "6", m: "Jul", t: "Cole & Park wedding", s: "Paid in full; insurance certificate still missing." },
    { d: "Wed", n: "8", m: "Jul", t: "Program Committee, 7:30 pm at the chair's", s: "Camper fees. Hold not yet on calendars." },
    { d: "Thu", n: "9", m: "Jul", t: "Board meeting", s: "At the chair's." }
  ],

  /* --- Handover checklist ------------------------------------------------- */
  handover: [
    { done: true,  owner: "Both", t: "Both camp inboxes and calendars connected", m: "Alex's and Sam's inboxes" },
    { done: true,  owner: "Sam",  t: "CampBook sign-in working", m: "Signed in as Sam, 10 Jun" },
    { done: true,  owner: "Alex", t: "Shared ops chat set up", m: "Both directors on the channel" },
    { done: false, owner: "Alex", t: "Handover questions sent to J+R", m: "Draft ready; send tonight" },
    { done: false, owner: "Both", t: "Cover named for 1–3 Jul", m: "Not in the 16 Jun minutes" },
    { done: false, owner: "Both", t: "SOP walkthrough with J+R booked (CampBook, sound board)", m: "Q18" },
    { done: false, owner: "Alex", t: "Keys, alarms, systems and vendor accounts moved over", m: "Q21: CampBook admin, waste collection and the design-software account still in J+R's names" },
    { done: false, owner: "Sam",  t: "Instagram login or Insights shared", m: "Public view hits a login wall" },
    { done: false, owner: "Sam",  t: "Website and volunteer-signup contacts switched to you", m: "Q9" },
    { done: false, owner: "Both", t: "3 Jul move-in vs 1 Aug written start reconciled", m: "Q22, with the board" },
    { done: false, owner: "Alex", t: "June property work confirmed (winterizing, chimneys, vent, pool)", m: "Q4, Q8, Q11" },
    { done: false, owner: "Both", t: "Program Committee dates on your calendars", m: "Waiting on “add them”" }
  ],

  /* --- Revenue (round, invented figures only) ---------------------------- */
  revenue: {
    meta: "Sample figures only",
    lastYearLabel: "Last year actual",
    lastYearAmount: "$80,000",
    lastYearNote: "Year-end statements",
    lastYearPctLabel: "40% of target",
    lastYearBar: 136,
    seasonLabel: "Apr–Jun",
    seasonAmount: "$40,000",
    seasonNote: "20 bookings, pre-tax",
    seasonPctLabel: "20% of target",
    seasonBar: 68,
    targetLabel: "Target",
    targetAmount: "$200,000",
    chartLabel: "Rental revenue versus 200,000 dollar target",
    kv: [
      ["Yearly target", "$200,000"],
      ["Gap, last year to target", "120,000 still to go"],
      ["Still owing in Jul", "$8,000"],
      ["July–August weddings", "Cole & Park 6 Jul · $0 owing\nReed & Walsh 20 Jul · $5,000\nNg/Foster 3 Aug · $3,000", "multi"],
      ["August", "Kitchen rentals 15–17 & 22–24 Aug, $500 each", "multi"],
      ["Next year booked", "Patel wedding, 21 Aug 2027"],
      ["Open gap", "Late summer has nothing else booked"]
    ],
    foot: "This year's full actual isn't known yet. An earlier ops figure was a budget number, not the statements (Q19)."
  },

  /* --- Board & committee -------------------------------------------------- */
  boardEvents: [
    { hl: true, month: "Jul", day: "8", title: "Program Committee · Wed 7:30 pm", sub: "At the chair's · camper fees · then monthly to 13 Jan" },
    { hl: false, month: "Jul", day: "9", title: "Board meeting", sub: "Thu 9 Jul at the chair's" },
    { hl: false, month: "Jun", day: "16", title: "Last board · Tue 16 Jun", sub: "The Ops Directors action row was blank" }
  ],
  asks: [
    { owner: "Sam",  t: "Counsellor social-post plan", s: "Board didn't approve it as written; the committee will work with you. Have a who-posts, who-approves plan before 3 Jul." },
    { owner: "Alex", t: "Pool help in spring", s: "Requested of Alex in the 16 Jun minutes." },
    { owner: "Both", t: "Cover for 1–3 Jul and the start-date mismatch", s: "Neither is settled in the minutes (Q22)." },
    { owner: "Alex", t: "Host next year's board property visits", s: "Who writes the schedule is open (Q33)." },
    { owner: "Alex", t: "Kitchen deep-clean before and after camp", s: "Kitchen group ask; you'd facilitate (Q44)." },
    { owner: "Both", t: "Which Growth Events ideas to package", s: "For the 8 Jul Program Committee." }
  ],

  /* --- Drive review ------------------------------------------------------- */
  drive: {
    meta: "4:15 pm, 18 Jun",
    pct: 40,
    doneLabel: "600 of 1,500 files",
    reviewed: "600",
    toRead: "900",
    media: "300",
    foot: "Alex's Drive only; Sam's isn't listed yet, so the total will grow. Reviewed includes 400 files read in full plus others checked and set aside (mostly sensitive). Next run Fri 19 Jun, 9:00 am."
  },

  /* --- Quick links (placeholders only) ----------------------------------- */
  links: [
    ["📊", "Director Dashboard", "Tasks, decisions, sources", "https://example.com/dashboard"],
    ["❓", "Questions Log", "40 open questions", "https://example.com/questions"],
    ["✅", "Master Task List", "Shared doc", "https://example.com/tasks"],
    ["📝", "Latest board agenda", "Shared doc", "https://example.com/agenda"],
    ["🗄️", "Board Documents", "Shared drive", "https://example.com/board-docs"],
    ["🏡", "Rentals Drive", "Shared drive", "https://example.com/rentals"],
    ["🔧", "Property Management", "Shared drive", "https://example.com/property"],
    ["🧠", "CampBook", "Bookings & payments", "https://example.com/campbook"],
    ["🌲", "Public website", "pinewoodcamp.example", "https://example.com/"]
  ],

  /* --- Copy used by the page chrome -------------------------------------- */
  toastCopied: "Copied — paste it into the ops chat to send",
  honest: "Approve copies the phrase. Paste it into the ops chat to send. Nothing sends from this page.",
  draftNoteFull: "Summary of the draft. The full wording is on its card in the ops chat.",
  ringCapPrefix: "Ring shows handover checklist:"
};
