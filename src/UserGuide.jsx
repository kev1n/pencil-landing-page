const chapters = [
  {
    id: "ctec", site: "Paper.nu", title: "Compare instructors with CTECs",
    summary: "Read ratings, reported hours, and student feedback where you plan your schedule.",
    steps: [
      <>Click <strong>Analytics</strong> or a CTEC rating chip on the section’s schedule card.</>,
      <>Open <strong>Overview</strong> for ratings and reported hours. Use <strong>Comments</strong> for student feedback or <strong>Terms</strong> to see results by quarter.</>,
    ],
  },
  {
    id: "combinations", site: "Paper.nu", title: "Build a schedule with Lazy Mode",
    summary: "Compare schedules that fit without overlaps, then put the ones with the lightest estimated workload first.",
    steps: [
      <>Add every section you’d consider to your Paper.nu calendar, including alternatives for the same course. Then switch on <strong>Combinations</strong> above the grid.</>,
      <>Open <strong>Sort</strong> and choose <strong>Lazy mode (least hours/week)</strong>. Pencil puts the schedules with the lowest estimated out-of-class hours first.</>,
      <>Set the <strong>Min</strong> and <strong>Max</strong> credit range. If a section is a must, click its pin on the schedule card.</>,
      <>Use the <strong>← / →</strong> arrows to compare schedules. Switch Combinations off to see all of your original sections again.</>,
    ],
    note: "Lazy Mode uses reported CTEC workload. Check the Out of Class chip in the banner for the workload breakdown. Pencil estimates missing hours from the other classes in that combination. Schedules with no workload data go last.",
  },
  {
    id: "prerequisites", site: "Paper.nu", title: "Check prerequisites before enrolling",
    summary: "See what Pencil can verify from your CAESAR course history and what you still need to check.",
    steps: [
      <>Sign in to CAESAR and open <strong>Course History</strong> once. In Paper.nu, open <strong>Search</strong>, clear your query, and switch on <strong>Prereqs (Beta)</strong>.</>,
      <>Search for a course. Hover or click its <strong>prereq badge</strong> to see the requirement and any missing classes. An hourglass means a prerequisite is in progress. A question mark means Pencil couldn’t verify eligibility.</>,
      <>Turn on <strong>Show Only Prereq Fulfilled</strong> above the results to narrow the list. Use <strong>Hide Taken</strong> separately to hide courses you’ve already completed.</>,
    ],
    note: "The filter can’t verify every requirement, such as instructor consent or class standing. Check the official course listing before enrolling.",
  },
  {
    id: "class-search", site: "CAESAR", title: "Find a section and add it to your cart",
    summary: "Search by course code, title, or topic, then check the details for the section you want.",
    steps: [
      <>Open <strong>Class Search</strong> in CAESAR, select <strong>Sharper Search</strong>, and pick your quarter.</>,
      <>Enter a query and click the <strong>sections</strong> row under the course you want.</>,
      <>Click <strong>Details</strong> for seats, notes, and requirements, or <strong>Add to cart</strong> to save that section in CAESAR. Open your cart when it’s time to enroll.</>,
    ],
  },
  {
    id: "export", site: "Paper.nu", title: "Export your schedule",
    summary: "Take your class schedule to your calendar or copy it as text.",
    steps: [
      <>Choose <strong>Export to calendar</strong> for a calendar file or <strong>Copy schedule as Markdown</strong> for a text version.</>,
      <>For calendar export, pick your calendar app, click <strong>Download .ics</strong>, and follow the import steps.</>,
    ],
  },
  {
    id: "registration", site: "Paper.nu + CAESAR", title: "Find your registration time",
    summary: "See when you personally can start registering and add the time to Google Calendar.",
    steps: [
      <>Click <strong>Enrollment Dates</strong> next to <strong>About</strong> on Paper.nu, or use the button in the CAESAR header.</>,
      <>Check <strong>Your registration appointments</strong>. Click <strong>Add to Google Calendar</strong> to open a draft at that appointment’s start time.</>,
    ],
    note: "Requires Pencil 0.9.15 or later. If the dates don’t load, connect to Northwestern Wi-Fi or VPN, sign in to CAESAR, then reopen Enrollment Dates.",
  },
];

function GuideVideo({ id, title }) {
  const video = `/guide-media/${id}.mp4`;
  return (
    <video className="guide-video" controls playsInline preload="none" poster={`/guide-media/${id}.jpg`} aria-label={title}>
      <source src={video} type="video/mp4" />
      <a href={video}>Download the walkthrough</a>
    </video>
  );
}

export default function UserGuide() {
  return (
    <div className="guide-page">
      <a className="guide-skip" href="#guide-main">Skip to the guide</a>
      <header className="guide-top">
        <div className="wrap guide-top-inner">
          <a className="brand" href="/">pencil.nu</a>
          <a href="/">Back to Pencil ↗</a>
        </div>
      </header>
      <main className="wrap" id="guide-main">
        <div className="guide-hero">
          <p className="guide-kicker">The Pencil field guide</p>
          <h1>Plan your quarter<br />with <em>Pencil.</em></h1>
          <p>Start with CTECs on Paper.nu, then try the tools for planning and registration. Each short video shows where to click and has instructions on screen.</p>
        </div>
        <div className="guide-layout">
          <nav className="guide-index" aria-label="Guide chapters">
            <p>On this page</p>
            <ol>{chapters.map(({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol>
          </nav>
          <div className="guide-chapters">
            {chapters.map(({ id, site, title, summary, steps, note }, index) => (
              <section id={id} key={id} className="guide-chapter" aria-labelledby={`${id}-title`}>
                <p className="guide-chapter-kicker">{String(index + 1).padStart(2, "0")} / {site}</p>
                <h2 id={`${id}-title`}>{title}</h2>
                <p className="guide-summary">{summary}</p>
                <GuideVideo id={id} title={title} />
                <ol className="guide-steps">{steps.map((step, stepIndex) => <li key={stepIndex}>{step}</li>)}</ol>
                {note && <p className="guide-note">{note}</p>}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
