import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, FileText, BriefcaseBusiness, Video, Megaphone, Calculator, Home, Star, ShieldCheck } from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: Home,
    title: 'Listing Support',
    description: 'Listing paperwork, property details, photoshoot coordination, signage, lockboxes, vendor requests, launch timelines, and MLS preparation.'
  },
  {
    icon: Calculator,
    title: 'Finance Assistance',
    description: 'Commission tracking, invoices, payment confirmations, reimbursements, disbursement details, closing documentation, and file follow-ups.'
  },
  {
    icon: Megaphone,
    title: 'Marketing Support',
    description: 'Branded graphics, social content, website and blog updates, organized marketing assets, online presence support, and database updates.'
  },
  {
    icon: Video,
    title: 'YouTube Podcast Editing',
    description: 'Long-form podcast cleanup, publish-ready video preparation, highlight selection, content repurposing, and short-form reels or clips.'
  }
];

const skills = [
  'Listing Coordination', 'MLS Listing Preparation', 'Vendor Coordination', 'Photoshoot Booking', 'Signage Booking',
  'Finance Administration', 'Commission Tracking', 'Invoice Support', 'Transaction File Management', 'Marketing Support',
  'Social Media Management', 'Graphic Design', 'Website & Blog Updates', 'YouTube Podcast Editing', 'Short-Form Reels',
  'Content Repurposing', 'Administrative Operations', 'Google Workspace', 'Microsoft Office', 'Canva', 'Adobe Photoshop',
  'Squarespace', 'WordPress', 'Asana', 'Slack', 'Notion', 'Sisu'
];

const experience = [
  {
    company: 'Virtual Professionals',
    role: 'Real Estate Virtual Assistant',
    date: 'November 2023 - Present',
    summary: 'Agency-based client support across listing coordination, finance assistance, marketing support, and YouTube podcast editing.'
  },
  {
    company: 'BLGU Calinan Poblacion',
    role: 'Administrative Clerk',
    date: 'July 2022 - November 2023',
    summary: 'Managed schedules, prepared reports and official records, organized case files, and supported day-to-day administrative operations.'
  },
  {
    company: 'Freelance Experience (Upwork)',
    role: 'Virtual Assistant',
    date: 'February 2021 - February 2022',
    summary: 'Supported Squarespace blog editing, research, data entry, Instagram management, graphics, and recurring administrative tasks.'
  }
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-bold tracking-tight">Gea Mae Ganata</a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 hover:bg-cyan-300">Hire Me</a>
          </div>
          <a href="#contact" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 md:hidden">Contact</a>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Virtual Assistant • Listing Support • Finance • Marketing • Video Editing
            </p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Organized support that keeps your real estate work moving.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I help busy teams stay on top of listings, finance tasks, marketing details, admin workflows, and YouTube podcast content so nothing slips through the cracks.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:geamaeganata1996@gmail.com" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Work With Me <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                View Services
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-2xl bg-slate-900 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-2xl font-bold text-slate-950">G</div>
                <div>
                  <h2 className="text-2xl font-bold">Gea Mae Ganata</h2>
                  <p className="text-slate-300">Detail-oriented Virtual Assistant</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                {[
                  'Trusted with confidential client work',
                  'Experienced with fast-moving real estate operations',
                  'Strong follow-up, organization, and remote collaboration',
                  'Comfortable managing multiple workstreams and deadlines'
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-4 text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-3 lg:px-8">
          <div><p className="text-3xl font-bold text-cyan-300">4+</p><p className="text-slate-300">Core service areas</p></div>
          <div><p className="text-3xl font-bold text-cyan-300">2023</p><p className="text-slate-300">Current agency support role started</p></div>
          <div><p className="text-3xl font-bold text-cyan-300">Remote-ready</p><p className="text-slate-300">Reliable support for distributed teams</p></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-semibold text-cyan-300">What I can help with</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">Support built for busy teams and growing businesses.</h2>
          <p className="mt-4 text-slate-300">From listing launches to payment tracking and content updates, I bring structure, follow-through, and accuracy to everyday operations.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300"><Icon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="bg-slate-900/70 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-semibold text-cyan-300">Core Skills</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">Tools, tasks, and strengths I bring to every project.</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
              <ShieldCheck className="h-5 w-5 text-cyan-300" /> Confidential and detail-focused
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-semibold text-cyan-300">Experience</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">A background in admin, real estate support, marketing, and content operations.</h2>
        </div>
        <div className="mt-12 grid gap-6">
          {experience.map((item) => (
            <article key={item.company} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:flex md:items-start md:justify-between md:gap-10">
              <div>
                <p className="text-sm font-semibold text-cyan-300">{item.date}</p>
                <h3 className="mt-2 text-2xl font-bold">{item.company}</h3>
                <p className="mt-1 text-slate-300">{item.role}</p>
              </div>
              <p className="mt-5 max-w-2xl text-slate-300 md:mt-0">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center md:p-14">
          <Star className="mx-auto h-10 w-10 text-cyan-300" />
          <h2 className="mt-6 text-4xl font-bold tracking-tight">Need a dependable VA who can support more than one lane?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">I can help you keep listing tasks organized, finance items tracked, marketing assets updated, and video content moving from raw recording to publish-ready clips.</p>
          <a href="mailto:geamaeganata1996@gmail.com" className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Let’s Talk <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Gea Mae Ganata</h2>
            <p className="mt-3 max-w-xl text-slate-300">Virtual Assistant specializing in real estate operations, finance support, listing coordination, marketing assistance, and YouTube podcast editing.</p>
          </div>
          <div className="space-y-3 text-slate-300 md:text-right">
            <p className="flex items-center gap-2 md:justify-end"><Mail className="h-4 w-4 text-cyan-300" /> geamaeganata1996@gmail.com</p>
            <p className="flex items-center gap-2 md:justify-end"><Phone className="h-4 w-4 text-cyan-300" /> 0985-545-9579</p>
            <p className="flex items-center gap-2 md:justify-end"><MapPin className="h-4 w-4 text-cyan-300" /> Calinan, Davao City</p>
            <p className="flex items-center gap-2 md:justify-end"><FileText className="h-4 w-4 text-cyan-300" /> Resume available upon request</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
