-- =========================================================
-- Seed published blog posts.
--
-- Matches the in-app fallback at src/lib/data/posts.ts so the
-- site has identical content whether Supabase is configured or
-- not. Idempotent via ON CONFLICT on the unique slug.
-- =========================================================

insert into public.posts (slug, title, title_bn, excerpt, category, reading_minutes, content, status, published_at)
values
(
  'the-thirty-minute-doctrine-of-tilawah',
  'The thirty-minute doctrine of tilawah',
  'তিলাওয়াতের ত্রিশ-মিনিট নীতিমালা',
  'If a family can hold one anchor in the day — one window of unhurried Quran — the rest of the rhythm tends to fall into place around it. A short note on why thirty minutes, and where to put them.',
  'Family',
  6,
  $md$
## The smallest possible commitment

When parents ask what one thing they can do at home to support a child in a hifz or nazera program, my answer is uninteresting and unchanged. Thirty minutes. Same time every day. The mushaf open. No phones in the room.

That is the whole prescription. It is small enough that no honest family can claim it is impossible. It is large enough that, repeated for a year, it changes the spiritual climate of a household.

## Why thirty, not sixty

Sixty minutes sounds devout and is rarely sustained. Thirty fits between maghrib and isha for most families. It survives an ill child, a late office day, a visit from in-laws. The doctrine is not heroism — it is stamina.

## Why a fixed time

A floating commitment becomes no commitment by Thursday. The brain does not negotiate with what is already on the calendar. Pick the slot — most families do well between maghrib and isha — and treat it the way you would treat salah itself: not optional, not movable for ordinary inconvenience.

## Where families fail

They try to make the thirty minutes "productive." A father takes the chance to coach pronunciation. A mother corrects an old mistake the child made last week. A grandparent recites a story.

That is not the thirty minutes. The thirty minutes is *tilawah only*. Reading. Listening. Sometimes nothing more than sitting with the mushaf in the same room, on the same rug, in the same lamplight. The corrections belong to the mu'allim. The teaching belongs to the madrasah. The household's job is to keep the practice alive — the place where a child learns that the Quran is a member of this family.

## A small honest test

For thirty days, hold the thirty minutes. Do not try to do anything heroic with them. Do not aim at a target. Do not record the page numbers. Just be there with the mushaf, in the same room, every day, at the same time.

At the end of the thirty days, ask your child — without prompting — what time tilawah is. If he answers with the time, the doctrine has worked. The Quran has become an object on his calendar, which means it has become an object in his life.

That is enough. The rest is downstream.
$md$,
  'published',
  '2025-09-12T07:00:00.000Z'
),
(
  'what-an-akhlaq-tracker-actually-looks-like',
  'What an akhlaq tracker actually looks like',
  'একটি বাস্তব আদব-ট্র্যাকার কেমন দেখায়',
  'Schools that say they "care about character" rarely measure it. A short, practical sketch of the akhlaq tracker we use, and what we learned from the first year of using it.',
  'Pedagogy',
  8,
  $md$
## What you do not measure, you do not respect

Every Islamic school in Bangladesh claims to care about character. Few can answer the simple question: *show me the column on the report where you tracked it last month*. If the column does not exist, the claim does not exist either.

This is not a complaint. It is a starting point.

## The four columns

We track four dimensions, weekly:

1. **Sidq** — truthfulness. Did the student lie this week, and if so, in what context? Was the correction received?
2. **Amanah** — trustworthiness with belongings, with information, with promises. Books returned. Errands completed. Confidence kept.
3. **Adab al-mu'allim** — manners with teachers. Posture in class. Form of address. Response to correction. Eye contact with elders.
4. **Adab al-rifaq** — manners with peers. Disputes. Generosity. Hilm under provocation.

Each column gets a one-line note, not a number. A number invites the student to optimize. A one-line note from a mu'allim — *brought back Khalid's pen without being asked* — invites the student to be seen.

## Weekly, not monthly

The mistake is to push akhlaq tracking to the end of a long cycle. The events go stale. The story dilutes. Weekly the mu'allim still remembers Tuesday. Monthly he only remembers the loud one.

## What we learned the first year

Three things, none of which we predicted.

First, the students who had previously been considered "calm" or "well-mannered" were not, on close examination, especially mannered — they were quiet. Quiet and mannered are different states. The tracker exposed this gently and let us coach the right thing.

Second, the loudest students were not the worst. The data showed they were often the most truthful — willing to admit a fault their quieter peers concealed. The tracker re-shaped how mu'allims read classroom temperament.

Third, parents read the akhlaq notes more carefully than the academic notes. They asked sharper questions. They committed to more concrete home action. The tracker did not just change the school. It changed the partnership.

## Print, fold, use this week

The tracker is one page, fits on a clipboard, and you can begin using it this week without permission from anyone — just print a simple four-column sheet (Sidq, Amanah, Adab al-mu'allim, Adab al-rifaq) and add a row per student per week.
$md$,
  'published',
  '2025-08-04T07:00:00.000Z'
),
(
  'small-cohorts-the-uncomfortable-decision',
  'Small cohorts — the uncomfortable decision',
  'ছোট দল — অস্বস্তিকর সিদ্ধান্ত',
  'Every other decision a madrasah makes — method, syllabus, residential program, parent communication — is downstream of one number: students per mu''allim. A note on the hardest cap to hold.',
  'Institutions',
  7,
  $md$
## The cap

We cap each mu'allim at twelve hifz students. Smaller for Nurani. Slightly larger for some Kitab cohorts. The number is non-negotiable.

It is the most uncomfortable decision the institution makes. It is also the only one that protects every other decision.

## Why twelve

The number is not theoretical. Twelve is the largest group in which a mu'allim can:

- Hear every student's sabaq daily, unhurriedly, with correction.
- Sit with each student weekly for a five-minute check-in that the student does not feel rehearsed for.
- Remember the previous week's mistakes without consulting his notes.
- Notice the student who is going quiet before the parents notice he is going quiet.

Above twelve, attention fragments. The mu'allim still teaches. The students still memorize. But the institution stops being a tarbiyyah and starts being a process.

## The cost

The cost is real. Twelve students per mu'allim means we can never grow as fast as a parent in Demra hopes when she calls. It means our waitlist is longer than our enrollment. It means our income per teacher is lower than at every comparable madrasah within ten kilometers.

These are not regrettable side effects of an otherwise good decision. They are the decision.

## The temptation

Every six months a well-meaning trustee proposes "just three more students per teacher." His math is sound. The marginal income is real. The marginal cost — half a sabaq missed per child per week — is invisible.

I say no the same way every time, in the same tone, with the same explanation. Eventually the trustees stop asking. That is when the institution is safe.

## A note for founders

If you are thinking of opening a madrasah and reading this, here is the one number to commit to before anything else: students per mu'allim. Pick a cap. Write it on the wall. Defend it against your own future temptation.

Everything else — building, curriculum, even mu'allim recruitment — is downstream. The cap is the institution.
$md$,
  'published',
  '2025-06-30T07:00:00.000Z'
),
(
  'what-i-tell-fathers-about-screens',
  'What I tell fathers about screens',
  'আমি বাবাদের যা বলি স্ক্রিন নিয়ে',
  'Fathers ask the screen question more than mothers. They want a rule. I do not give them a rule — I give them three commitments and one question to ask weekly.',
  'Family',
  6,
  $md$
## Fathers ask first

The screen question almost always comes from the father. It is asked in a particular tone — half exhausted, half hopeful — and the question underneath the question is always the same: *can you give me a rule I can enforce by Thursday?*

I cannot. I give them three commitments and one weekly question.

## Commitment one — your screen first

Before the rule for the child, the rule for the father. No screen during the thirty-minute tilawah window (see [the thirty-minute doctrine](/blog/the-thirty-minute-doctrine-of-tilawah)). No screen at the dinner table. No screen for the first hour after fajr.

A father who cannot do this himself has nothing to enforce. The child does not learn from announcements. He learns from what he watches.

## Commitment two — your wife's screen

Screen discipline is a household discipline, or it is nothing. The father who restricts his son while the household ambient is YouTube on autoplay is engaged in theater, not tarbiyyah. The conversation with the spouse — gentle, unhurried, joint — is the precondition. If that conversation cannot happen, the screen problem is not the actual problem.

## Commitment three — a single, named "third place"

Children with screen problems almost universally have a missing third place — somewhere that is not home and not school. A masjid where they have a relationship with the imam. A small sports group. A weekend qira'at circle. *Anything,* as long as it is regular, unmediated by a parent, and respected by the household.

Restricting screens without filling the void produces a sullen, restless boy. The third place fills it.

## The weekly question

One sentence, asked at the same time each week — Friday after asr is what I recommend. The father asks the son:

> *"What is the best thing you watched, listened to, or read this week?"*

That is the entire question. No follow-up about time spent. No follow-up about apps. Just: *what was the best thing?*

The child answers. The father listens. The conversation goes wherever it goes.

In one year, this question, asked weekly, will teach you more about your son than any monitoring app. It will also do something subtler: it will teach your son to curate. He will, over weeks, begin to choose what he watches with the answer in mind. He will not tell you this. You will see it.

## A note on tone

Do not panic about screens. Do not surrender to them. Do not preach. The household sets a tone — calm, deliberate, not anxious — and the children pick up the tone before they pick up the rules.
$md$,
  'published',
  '2025-04-21T07:00:00.000Z'
),
(
  'tarbiyyah-is-not-a-curriculum',
  'Tarbiyyah is not a curriculum',
  'তরবিয়ত কোনো পাঠ্যক্রম নয়',
  'We say it casually — "our tarbiyyah is strong." Then we write a worksheet. A short note on the difference between a curriculum and a tarbiyyah, and why most institutions only have the first.',
  'Pedagogy',
  5,
  $md$
## Two words, used as if they were one

We use the words *manhaj* and *tarbiyyah* as if they were interchangeable. They are not. A *manhaj* is a curriculum — a planned sequence of subjects, texts, and evaluations. A *tarbiyyah* is a moral formation — the slow shaping of a soul by the company it keeps, the habits it forms, and the corrections it receives in love.

A madrasah can have a strong *manhaj* and a weak *tarbiyyah*. Many do. The signs are easy to read: students complete the syllabus, pass exams, and exit the institution with no detectable improvement in character.

## The difference, briefly

A *manhaj* is taught. A *tarbiyyah* is caught.

A *manhaj* lives in a syllabus document. A *tarbiyyah* lives in the mu'allim's tone of voice when a student is wrong, in the choice of who eats at his table, in whether the porichalok stops the office work to listen to a crying eight-year-old at the door.

A *manhaj* can be photocopied. A *tarbiyyah* cannot.

## What this means in practice

If the *tarbiyyah* is real, the institution will look uneconomical in places. The mu'allim will be paid to drink tea with students for an hour every week — and that hour will not appear on a productivity audit. The porichalok will spend a Tuesday morning on the phone with one parent about one boy — and there will be no line item for that in the budget.

If the *tarbiyyah* is not real, those hours and tuesdays will quietly disappear. The institution will gain efficiency and lose its soul on the same line of the balance sheet. The students will, in a way no one can quite name, become more accomplished and less formed.

## A small test

Walk through any madrasah on a Thursday afternoon. If you see mu'allims with their students — not in the classroom, not with a book in hand, but sitting with them, eating with them, listening to a complaint about a friend with the patience of a father — you are inside a real *tarbiyyah*.

If you see only a clean schedule and quiet halls, you are inside a strong *manhaj*. That is not nothing. It is just not everything.
$md$,
  'published',
  '2025-02-15T07:00:00.000Z'
)
on conflict (slug) do update set
  title           = excluded.title,
  title_bn        = excluded.title_bn,
  excerpt         = excluded.excerpt,
  category        = excluded.category,
  reading_minutes = excluded.reading_minutes,
  content         = excluded.content,
  status          = excluded.status,
  published_at    = excluded.published_at,
  updated_at      = now();
