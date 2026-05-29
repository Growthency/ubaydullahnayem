export type BlogPost = {
  slug: string;
  title: string;
  title_bn?: string;
  excerpt: string;
  excerpt_bn?: string;
  category: string;
  category_bn?: string;
  reading_minutes: number;
  published_at: string;
  status: "draft" | "published";
  content: string;
  content_bn?: string;
};

const md = (s: string) => s.trim();

export const fallbackPosts: BlogPost[] = [
  {
    slug: "the-thirty-minute-doctrine-of-tilawah",
    title: "The thirty-minute doctrine of tilawah",
    title_bn: "তিলাওয়াতের ত্রিশ-মিনিট নীতিমালা",
    excerpt:
      "If a family can hold one anchor in the day — one window of unhurried Quran — the rest of the rhythm tends to fall into place around it. A short note on why thirty minutes, and where to put them.",
    excerpt_bn:
      "একটি পরিবার যদি দিনে একটিমাত্র নোঙর ধরে রাখতে পারে — অস্থিরতাহীন কুরআনের একটি জানালা — তাহলে বাকি ছন্দ তার চারপাশে গুছিয়ে আসে। কেন ত্রিশ মিনিট, আর কোথায় রাখবেন — তা নিয়ে একটি ছোট নোট।",
    category: "Family",
    category_bn: "পরিবার",
    reading_minutes: 6,
    published_at: "2025-09-12T07:00:00.000Z",
    status: "published",
    content: md(`
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

For thirty days, hold the thirty minutes. Do not try to do anything heroic with them. Just be there with the mushaf, in the same room, every day, at the same time.

At the end of the thirty days, ask your child — without prompting — what time tilawah is. If he answers with the time, the doctrine has worked. The Quran has become an object on his calendar, which means it has become an object in his life.

That is enough. The rest is downstream.
`),
    content_bn: md(`
## সবচেয়ে ছোট অঙ্গীকার

হিফয বা নাজেরা পড়ুয়া সন্তানকে ঘরে সাহায্য করতে অভিভাবকেরা যখন জিজ্ঞেস করেন "একটিমাত্র কাজ কী করতে পারি", আমার উত্তর একঘেয়ে এবং অপরিবর্তিত। ত্রিশ মিনিট। প্রতিদিন একই সময়ে। মুসহাফ খোলা। ঘরে কোনো ফোন নয়।

এটাই পুরো ব্যবস্থাপত্র। এটা এত ছোট যে কোনো সৎ পরিবার একে অসম্ভব বলতে পারবে না। আবার এত বড় যে এক বছর ধরে চললে এটি ঘরের আধ্যাত্মিক আবহাওয়া বদলে দেয়।

## কেন ত্রিশ, ষাট নয়

ষাট মিনিট শুনতে ধার্মিক মনে হয়, কিন্তু খুব কমই টিকে থাকে। ত্রিশ মিনিট বেশিরভাগ পরিবারের জন্য মাগরিব ও ইশার মাঝে ঠিকঠাক বসে যায়। অসুস্থ সন্তান, অফিসে দেরি, শ্বশুরবাড়ির মেহমান — সব কিছুতেই টিকে থাকে। এই নীতি বীরত্ব নয় — এটি ধৈর্যশক্তি।

## কেন নির্দিষ্ট সময়

ভাসমান অঙ্গীকার বৃহস্পতিবারের মধ্যেই অঙ্গীকারহীন হয়ে যায়। ক্যালেন্ডারে যা আগে থেকে লেখা, মস্তিষ্ক তার সাথে দরকষাকষি করে না। সময়টা বেছে নিন — বেশিরভাগ পরিবারের মাগরিব ও ইশার মাঝে ভালো হয় — এবং সালাতের মতোই তাকে দেখুন: ঐচ্ছিক নয়, সাধারণ অসুবিধায় সরানোর নয়।

## পরিবার কোথায় ব্যর্থ হয়

তারা ত্রিশ মিনিটকে "ফলপ্রসূ" করার চেষ্টা করে। বাবা সুযোগ নিয়ে উচ্চারণ শেখাতে বসেন। মা গত সপ্তাহের পুরোনো ভুল ধরিয়ে দেন। দাদা একটি গল্প শোনান।

ওটা ত্রিশ মিনিট নয়। ত্রিশ মিনিট হলো *শুধুই তিলাওয়াত*। পড়া। শোনা। কখনো শুধু একই ঘরে, একই জায়নামাজে, একই প্রদীপের আলোয় মুসহাফ নিয়ে বসে থাকা। সংশোধন মুয়াল্লিমের কাজ। শেখানো মাদরাসার কাজ। ঘরের কাজ অভ্যাসটিকে জীবিত রাখা — যেখানে সন্তান শেখে কুরআন এই পরিবারের একজন সদস্য।

## একটি ছোট সৎ পরীক্ষা

ত্রিশ দিন ধরে ত্রিশ মিনিট ধরে রাখুন। বীরত্বপূর্ণ কিছু করার চেষ্টা করবেন না। শুধু মুসহাফ নিয়ে, একই ঘরে, প্রতিদিন, একই সময়ে উপস্থিত থাকুন।

ত্রিশ দিন শেষে সন্তানকে — না বলে দিয়েই — জিজ্ঞেস করুন তিলাওয়াতের সময় কখন। সে যদি সময়টা বলে দেয়, নীতিটি কাজ করেছে। কুরআন তার ক্যালেন্ডারের একটি বিষয় হয়ে উঠেছে — অর্থাৎ তার জীবনের একটি বিষয় হয়ে উঠেছে।

এটুকুই যথেষ্ট। বাকিটা এর পরে আপনাআপনি আসে।
`),
  },
  {
    slug: "what-an-akhlaq-tracker-actually-looks-like",
    title: "What an akhlaq tracker actually looks like",
    title_bn: "একটি বাস্তব আদব-ট্র্যাকার কেমন দেখায়",
    excerpt:
      "Schools that say they 'care about character' rarely measure it. A short, practical sketch of the akhlaq tracker we use, and what we learned from the first year of using it.",
    excerpt_bn:
      "যেসব প্রতিষ্ঠান বলে তারা 'চরিত্রের যত্ন নেয়', তারা খুব কমই তা পরিমাপ করে। আমরা যে আদব-ট্র্যাকার ব্যবহার করি তার একটি সংক্ষিপ্ত, প্রায়োগিক রূপরেখা — এবং প্রথম বছরে যা শিখেছি।",
    category: "Pedagogy",
    category_bn: "শিক্ষাপদ্ধতি",
    reading_minutes: 8,
    published_at: "2025-08-04T07:00:00.000Z",
    status: "published",
    content: md(`
## What you do not measure, you do not respect

Every Islamic school in Bangladesh claims to care about character. Few can answer the simple question: *show me the column on the report where you tracked it last month*. If the column does not exist, the claim does not exist either.

This is not a complaint. It is a starting point.

## The four columns

We track four dimensions, weekly:

1. **Sidq** — truthfulness. Did the student lie this week, and if so, in what context? Was the correction received?
2. **Amanah** — trustworthiness with belongings, with information, with promises.
3. **Adab al-mu'allim** — manners with teachers. Posture, form of address, response to correction.
4. **Adab al-rifaq** — manners with peers. Disputes, generosity, hilm under provocation.

Each column gets a one-line note, not a number. A number invites the student to optimize. A one-line note from a mu'allim invites the student to be seen.

## Weekly, not monthly

The mistake is to push akhlaq tracking to the end of a long cycle. The events go stale. Weekly, the mu'allim still remembers Tuesday. Monthly, he only remembers the loud one.

## What we learned the first year

The students considered "calm" were often just quiet — quiet and mannered are different states. The loudest students were not the worst; they were often the most truthful. And parents read the akhlaq notes more carefully than the academic ones, asking sharper questions and committing to more concrete home action.

## Print, fold, use this week

The tracker is one page, fits on a clipboard, and you can begin using it this week — just print a simple four-column sheet (Sidq, Amanah, Adab al-mu'allim, Adab al-rifaq) and add a row per student per week.
`),
    content_bn: md(`
## যা আপনি পরিমাপ করেন না, তাকে আপনি সম্মানও করেন না

বাংলাদেশের প্রতিটি ইসলামি প্রতিষ্ঠান দাবি করে তারা চরিত্রের যত্ন নেয়। অথচ খুব কম প্রতিষ্ঠানই সহজ প্রশ্নটির উত্তর দিতে পারে: *গত মাসে রিপোর্টের যে ঘরে চরিত্র লিপিবদ্ধ করেছেন, সেটি দেখান*। ঘরটি যদি না থাকে, দাবিটিও নেই।

এটি অভিযোগ নয়। এটি একটি শুরুর বিন্দু।

## চারটি কলাম

আমরা সাপ্তাহিকভাবে চারটি মাত্রা লিপিবদ্ধ করি:

১. **সিদক** — সত্যবাদিতা। ছাত্র কি এই সপ্তাহে মিথ্যা বলেছে, কোন প্রসঙ্গে? সংশোধন কি গ্রহণ করেছে?
২. **আমানত** — জিনিস, তথ্য ও প্রতিশ্রুতির বিশ্বস্ততা।
৩. **আদাবুল মুয়াল্লিম** — উস্তাদের সাথে আচরণ। ভঙ্গি, সম্বোধন, সংশোধনে সাড়া।
৪. **আদাবুর রিফাক** — সঙ্গীদের সাথে আচরণ। বিবাদ, উদারতা, উসকানিতে সংযম।

প্রতিটি কলামে এক লাইনের নোট থাকে, কোনো নম্বর নয়। নম্বর ছাত্রকে কৌশল খুঁজতে শেখায়। মুয়াল্লিমের এক লাইনের নোট ছাত্রকে অনুভব করায় — তাকে দেখা হচ্ছে।

## সাপ্তাহিক, মাসিক নয়

ভুল হলো আদব-পর্যবেক্ষণকে দীর্ঘ চক্রের শেষে ঠেলে দেওয়া। ঘটনাগুলো বাসি হয়ে যায়। সাপ্তাহিক হলে মুয়াল্লিম মঙ্গলবারের কথা এখনো মনে রাখেন। মাসিক হলে শুধু সবচেয়ে শব্দময় ছাত্রটিকেই মনে থাকে।

## প্রথম বছরে যা শিখেছি

যাদের "শান্ত" ভাবা হতো, তারা অনেক সময় শুধু চুপচাপ — চুপচাপ আর সুশীল এক জিনিস নয়। সবচেয়ে শব্দময় ছাত্ররা সবচেয়ে খারাপ ছিল না; বরং প্রায়ই সবচেয়ে সত্যবাদী। আর অভিভাবকেরা একাডেমিক নোটের চেয়ে আদবের নোট মনোযোগ দিয়ে পড়েন — তীক্ষ্ণ প্রশ্ন করেন, ঘরে আরও সুনির্দিষ্ট পদক্ষেপ নেন।

## ছাপান, ভাঁজ করুন, এই সপ্তাহেই ব্যবহার করুন

ট্র্যাকারটি এক পৃষ্ঠার, ক্লিপবোর্ডে ধরে — এই সপ্তাহেই শুরু করতে পারেন। শুধু একটি সরল চার-কলামের শিট ছাপুন (সিদক, আমানত, আদাবুল মুয়াল্লিম, আদাবুর রিফাক) এবং প্রতি ছাত্রে প্রতি সপ্তাহে একটি সারি যোগ করুন।
`),
  },
  {
    slug: "small-cohorts-the-uncomfortable-decision",
    title: "Small cohorts — the uncomfortable decision",
    title_bn: "ছোট দল — অস্বস্তিকর সিদ্ধান্ত",
    excerpt:
      "Every other decision a madrasah makes — method, syllabus, residential program, parent communication — is downstream of one number: students per mu'allim. A note on the hardest cap to hold.",
    excerpt_bn:
      "একটি মাদরাসার অন্য সব সিদ্ধান্ত — পদ্ধতি, পাঠ্যক্রম, আবাসিক ব্যবস্থা, অভিভাবক যোগাযোগ — একটি সংখ্যার অধীন: প্রতি মুয়াল্লিমে ছাত্র সংখ্যা। সবচেয়ে কঠিন সীমা ধরে রাখা নিয়ে একটি নোট।",
    category: "Institutions",
    category_bn: "প্রতিষ্ঠান",
    reading_minutes: 7,
    published_at: "2025-06-30T07:00:00.000Z",
    status: "published",
    content: md(`
## The cap

We cap each mu'allim at twelve hifz students. Smaller for Nurani. The number is non-negotiable. It is the most uncomfortable decision the institution makes. It is also the only one that protects every other decision.

## Why twelve

Twelve is the largest group in which a mu'allim can hear every student's sabaq daily, sit with each one weekly, remember last week's mistakes without his notes, and notice the student going quiet before the parents do. Above twelve, attention fragments. The students still memorize, but the institution stops being a tarbiyyah and starts being a process.

## The cost

Twelve per mu'allim means we grow slower than a parent in Demra hopes, our waitlist is longer than our enrollment, and our income per teacher is lower than every comparable madrasah nearby. These are not regrettable side effects of the decision. They are the decision.

## The temptation

Every six months a well-meaning trustee proposes "just three more per teacher." His math is sound; the marginal income is real; the marginal cost — half a sabaq missed per child per week — is invisible. I say no the same way every time. Eventually the trustees stop asking. That is when the institution is safe.

## A note for founders

If you are opening a madrasah: pick a cap on students per mu'allim. Write it on the wall. Defend it against your own future temptation. Everything else is downstream. The cap is the institution.
`),
    content_bn: md(`
## সীমা

আমরা প্রতি মুয়াল্লিমের অধীনে সর্বোচ্চ বারো জন হিফয-ছাত্র রাখি। নুরানীতে আরও কম। এই সংখ্যা অনপোস। এটি প্রতিষ্ঠানের নেওয়া সবচেয়ে অস্বস্তিকর সিদ্ধান্ত। আবার এটাই একমাত্র সিদ্ধান্ত যা বাকি সব সিদ্ধান্তকে রক্ষা করে।

## কেন বারো

বারো হলো সেই সর্বোচ্চ দল, যেখানে একজন মুয়াল্লিম প্রতিদিন প্রত্যেকের সবক শুনতে পারেন, সাপ্তাহিকভাবে প্রত্যেকের পাশে বসতে পারেন, নোট না দেখে গত সপ্তাহের ভুল মনে রাখতে পারেন, এবং অভিভাবকের আগেই খেয়াল করতে পারেন কোন ছাত্র চুপ হয়ে যাচ্ছে। বারোর উপরে মনোযোগ ভেঙে যায়। ছাত্ররা তখনও মুখস্থ করে, কিন্তু প্রতিষ্ঠান আর তরবিয়ত থাকে না — একটি প্রক্রিয়া হয়ে যায়।

## মূল্য

প্রতি মুয়াল্লিমে বারো মানে — ডেমরার এক অভিভাবক যত দ্রুত আশা করেন আমরা তত দ্রুত বাড়ি না, আমাদের অপেক্ষমাণ তালিকা ভর্তির চেয়ে দীর্ঘ, এবং প্রতি শিক্ষকে আয় কাছের প্রতিটি তুলনীয় মাদরাসার চেয়ে কম। এগুলো সিদ্ধান্তের দুঃখজনক পার্শ্বপ্রতিক্রিয়া নয়। এগুলোই সিদ্ধান্ত।

## প্রলোভন

প্রতি ছয় মাসে এক শুভাকাঙ্ক্ষী ট্রাস্টি প্রস্তাব দেন "প্রতি শিক্ষকে আর মাত্র তিনজন বেশি"। তাঁর হিসাব নির্ভুল; প্রান্তিক আয় বাস্তব; প্রান্তিক ক্ষতি — প্রতি সন্তানে প্রতি সপ্তাহে অর্ধেক সবক হারানো — অদৃশ্য। আমি প্রতিবার একইভাবে না বলি। শেষমেশ ট্রাস্টিরা জিজ্ঞেস করা থামিয়ে দেন। তখনই প্রতিষ্ঠান নিরাপদ।

## প্রতিষ্ঠাতাদের জন্য একটি নোট

আপনি যদি মাদরাসা খুলতে যান: প্রতি মুয়াল্লিমে ছাত্রের একটি সীমা বেছে নিন। দেয়ালে লিখে রাখুন। নিজের ভবিষ্যৎ প্রলোভনের বিরুদ্ধে তা রক্ষা করুন। বাকি সব এর পরে আসে। সীমাটিই প্রতিষ্ঠান।
`),
  },
  {
    slug: "what-i-tell-fathers-about-screens",
    title: "What I tell fathers about screens",
    title_bn: "আমি বাবাদের যা বলি স্ক্রিন নিয়ে",
    excerpt:
      "Fathers ask the screen question more than mothers. They want a rule. I do not give them a rule — I give them three commitments and one question to ask weekly.",
    excerpt_bn:
      "মায়েদের চেয়ে বাবারাই স্ক্রিনের প্রশ্ন বেশি করেন। তাঁরা একটি নিয়ম চান। আমি নিয়ম দিই না — তিনটি অঙ্গীকার আর সপ্তাহে জিজ্ঞেস করার একটি প্রশ্ন দিই।",
    category: "Family",
    category_bn: "পরিবার",
    reading_minutes: 6,
    published_at: "2025-04-21T07:00:00.000Z",
    status: "published",
    content: md(`
## Fathers ask first

The screen question almost always comes from the father, in a particular tone — half exhausted, half hopeful. The question underneath is always the same: *can you give me a rule I can enforce by Thursday?* I cannot. I give them three commitments and one weekly question.

## Commitment one — your screen first

No screen during the thirty-minute tilawah window. No screen at the dinner table. No screen for the first hour after fajr. A father who cannot do this himself has nothing to enforce. The child learns from what he watches, not from announcements.

## Commitment two — your wife's screen

Screen discipline is a household discipline or it is nothing. The father who restricts his son while the household ambient is autoplay video is doing theater, not tarbiyyah. The gentle, joint conversation with the spouse is the precondition.

## Commitment three — a single, named "third place"

Children with screen problems almost always have a missing third place — somewhere that is not home and not school. A masjid relationship, a small sports group, a weekend qira'at circle. Restricting screens without filling the void produces a sullen, restless boy. The third place fills it.

## The weekly question

Friday after asr, the father asks: *"What is the best thing you watched, listened to, or read this week?"* No follow-up about time or apps. The child answers; the father listens. In a year this teaches you more about your son than any monitoring app — and quietly teaches him to curate.

## A note on tone

Do not panic. Do not surrender. Do not preach. The household sets a tone, and children pick up the tone before the rules.
`),
    content_bn: md(`
## বাবারাই আগে জিজ্ঞেস করেন

স্ক্রিনের প্রশ্নটি প্রায় সবসময় বাবার কাছ থেকে আসে — একটি বিশেষ সুরে, আধা ক্লান্ত, আধা আশাবাদী। ভেতরের প্রশ্নটি সবসময় একই: *এমন একটি নিয়ম দিন যা বৃহস্পতিবারের মধ্যে কার্যকর করতে পারি।* আমি পারি না। আমি তিনটি অঙ্গীকার আর সপ্তাহের একটি প্রশ্ন দিই।

## অঙ্গীকার এক — আগে আপনার স্ক্রিন

ত্রিশ মিনিটের তিলাওয়াতের সময় কোনো স্ক্রিন নয়। খাবার টেবিলে স্ক্রিন নয়। ফজরের পর প্রথম এক ঘণ্টা স্ক্রিন নয়। যে বাবা নিজেই এটা পারেন না, তাঁর কার্যকর করার কিছু নেই। সন্তান ঘোষণা থেকে শেখে না — সে শেখে আপনি কী দেখেন তা থেকে।

## অঙ্গীকার দুই — আপনার স্ত্রীর স্ক্রিন

স্ক্রিনের শৃঙ্খলা ঘরের শৃঙ্খলা, নয়তো কিছুই নয়। যে বাবা ছেলেকে সীমিত করেন অথচ ঘরের আবহ অটোপ্লে ভিডিও — তিনি অভিনয় করছেন, তরবিয়ত নয়। স্ত্রীর সাথে কোমল, যৌথ আলোচনাই পূর্বশর্ত।

## অঙ্গীকার তিন — একটি নির্দিষ্ট "তৃতীয় স্থান"

স্ক্রিন-সমস্যাগ্রস্ত শিশুদের প্রায় সবসময় একটি অনুপস্থিত তৃতীয় স্থান থাকে — এমন জায়গা যা ঘরও নয়, স্কুলও নয়। মসজিদের সম্পর্ক, ছোট একটি খেলার দল, সাপ্তাহিক একটি ক্বিরাত মজলিস। শূন্যতা না পূরণ করে স্ক্রিন সীমিত করলে একটি বিরক্ত, অস্থির ছেলে তৈরি হয়। তৃতীয় স্থান সেই শূন্যতা পূরণ করে।

## সপ্তাহের প্রশ্ন

শুক্রবার আসরের পর বাবা জিজ্ঞেস করেন: *"এই সপ্তাহে দেখা, শোনা বা পড়া সবচেয়ে ভালো জিনিসটি কী?"* সময় বা অ্যাপ নিয়ে কোনো পাল্টা প্রশ্ন নয়। সন্তান উত্তর দেয়; বাবা শোনেন। এক বছরে এটি যেকোনো মনিটরিং অ্যাপের চেয়ে আপনার ছেলে সম্পর্কে বেশি শেখাবে — এবং নীরবে তাকে বেছে নিতে শেখাবে।

## সুর নিয়ে একটি কথা

আতঙ্কিত হবেন না। আত্মসমর্পণ করবেন না। বক্তৃতা দেবেন না। ঘর একটি সুর তৈরি করে, আর শিশুরা নিয়মের আগেই সেই সুর ধরে ফেলে।
`),
  },
  {
    slug: "tarbiyyah-is-not-a-curriculum",
    title: "Tarbiyyah is not a curriculum",
    title_bn: "তরবিয়ত কোনো পাঠ্যক্রম নয়",
    excerpt:
      "We say it casually — 'our tarbiyyah is strong.' Then we write a worksheet. A short note on the difference between a curriculum and a tarbiyyah, and why most institutions only have the first.",
    excerpt_bn:
      "আমরা হালকাভাবে বলি — 'আমাদের তরবিয়ত শক্তিশালী।' তারপর একটি ওয়ার্কশিট লিখি। পাঠ্যক্রম ও তরবিয়তের পার্থক্য, এবং কেন বেশিরভাগ প্রতিষ্ঠানের কাছে কেবল প্রথমটিই আছে — তা নিয়ে একটি ছোট নোট।",
    category: "Pedagogy",
    category_bn: "শিক্ষাপদ্ধতি",
    reading_minutes: 5,
    published_at: "2025-02-15T07:00:00.000Z",
    status: "published",
    content: md(`
## Two words, used as if they were one

We use *manhaj* and *tarbiyyah* as if they were interchangeable. They are not. A *manhaj* is a curriculum — a planned sequence of subjects, texts, and evaluations. A *tarbiyyah* is a moral formation — the slow shaping of a soul by the company it keeps and the corrections it receives in love.

A madrasah can have a strong *manhaj* and a weak *tarbiyyah*. Many do. The signs are easy to read: students complete the syllabus, pass exams, and exit with no detectable improvement in character.

## The difference, briefly

A *manhaj* is taught. A *tarbiyyah* is caught. A *manhaj* lives in a syllabus document. A *tarbiyyah* lives in the mu'allim's tone of voice when a student is wrong, in who eats at his table, in whether the porichalok stops the office work to listen to a crying eight-year-old at the door. A *manhaj* can be photocopied. A *tarbiyyah* cannot.

## What this means in practice

If the *tarbiyyah* is real, the institution will look uneconomical in places. A mu'allim paid to drink tea with students for an hour each week; a porichalok spending a Tuesday morning on one boy. No line item for those. If the *tarbiyyah* is not real, those hours quietly disappear — and the students become more accomplished and less formed.

## A small test

Walk through a madrasah on a Thursday afternoon. If you see mu'allims sitting with students — eating, listening to a complaint about a friend with the patience of a father — you are inside a real *tarbiyyah*. If you see only a clean schedule and quiet halls, you are inside a strong *manhaj*. That is not nothing. It is just not everything.
`),
    content_bn: md(`
## দুটি শব্দ, যেন একটিই

আমরা *মানহাজ* ও *তরবিয়ত* এমনভাবে ব্যবহার করি যেন এরা একে অপরের বদলে চলে। তা নয়। *মানহাজ* হলো পাঠ্যক্রম — বিষয়, কিতাব ও মূল্যায়নের একটি পরিকল্পিত ধারাবাহিকতা। *তরবিয়ত* হলো নৈতিক গঠন — সঙ্গ এবং ভালোবাসায় পাওয়া সংশোধনের মাধ্যমে একটি আত্মার ধীর গঠন।

একটি মাদরাসার শক্তিশালী *মানহাজ* থাকতে পারে অথচ দুর্বল *তরবিয়ত*। অনেকেরই তাই। লক্ষণ পড়া সহজ: ছাত্ররা সিলেবাস শেষ করে, পরীক্ষায় পাশ করে, এবং চরিত্রে কোনো লক্ষণীয় উন্নতি ছাড়াই বেরিয়ে যায়।

## পার্থক্য, সংক্ষেপে

*মানহাজ* শেখানো হয়। *তরবিয়ত* ধরা পড়ে। *মানহাজ* থাকে সিলেবাসের কাগজে। *তরবিয়ত* থাকে — ছাত্র ভুল করলে মুয়াল্লিমের কণ্ঠস্বরে, কে তাঁর দস্তরখানে খায় তাতে, পরিচালক অফিসের কাজ থামিয়ে দরজায় কাঁদতে থাকা আট বছরের শিশুর কথা শোনেন কিনা তাতে। *মানহাজ* ফটোকপি করা যায়। *তরবিয়ত* যায় না।

## বাস্তবে এর অর্থ

*তরবিয়ত* সত্যিকারের হলে প্রতিষ্ঠান কোথাও কোথাও অর্থনৈতিকভাবে অলাভজনক দেখাবে। সপ্তাহে এক ঘণ্টা ছাত্রদের সাথে চা খেতে বেতন পাওয়া মুয়াল্লিম; এক ছেলের পেছনে মঙ্গলবার সকাল কাটানো পরিচালক। এসবের কোনো হিসাব-খাত নেই। *তরবিয়ত* সত্যিকারের না হলে সেই ঘণ্টাগুলো নীরবে হারিয়ে যায় — আর ছাত্ররা আরও দক্ষ অথচ কম গঠিত হয়ে ওঠে।

## একটি ছোট পরীক্ষা

বৃহস্পতিবার বিকেলে কোনো মাদরাসায় হেঁটে যান। যদি দেখেন মুয়াল্লিমরা ছাত্রদের সাথে বসে আছেন — খাচ্ছেন, বাবার ধৈর্যে বন্ধুর নামে অভিযোগ শুনছেন — আপনি একটি সত্যিকারের *তরবিয়তের* ভেতরে আছেন। যদি শুধু পরিষ্কার সময়সূচি আর নীরব হলঘর দেখেন, আপনি একটি শক্তিশালী *মানহাজের* ভেতরে আছেন। সেটাও কম নয়। শুধু সবটুকু নয়।
`),
  },
];
