import Image from 'next/image';
import { ArrowRight, Check, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import Header from './components/Header';

const images = {
  hero: '/images/Dr. Maya Reynolds.png',
  intro: '/images/Intro.jpg',
  anxiety: '/images/Anxiety.jpg',
  trauma: '/images/Trauma.jpg',
  burnout: '/images/Burnout.jpg',
  office1: '/images/office1.jpeg',
  office2: '/images/office2.jpeg',
  portrait: '/images/Dr. Maya Reynolds.png',
};

const services = [
  {
    title: 'Anxiety & Panic',
    image: images.anxiety,
    text: 'Create more steadiness when worry, tension, overthinking, or panic begin to take over. We will explore the patterns underneath the anxiety and build practical ways to feel more regulated.',
  },
  {
    title: 'Trauma Therapy',
    image: images.trauma,
    text: 'Process difficult experiences carefully and at a pace that feels safe. Trauma work emphasizes safety, stabilization, regulation, and rebuilding a stronger sense of trust in yourself.',
  },
  {
    title: 'Burnout & Perfectionism',
    image: images.burnout,
    text: 'For professionals, entrepreneurs, and creatives who are tired of pushing through. Therapy can help you reconnect with yourself and develop more sustainable ways of living and working.',
  },
];

const faqs = [
  ['What can I expect from therapy with Dr. Reynolds?', 'Sessions are warm, collaborative, and grounded. They are structured enough to feel supportive while leaving room for reflection and depth.'],
  ['What approaches do you use?', 'Dr. Reynolds integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.'],
  ['Do you work with trauma?', 'Yes. Trauma is an important part of the practice, including single-incident trauma and more complex, long-standing patterns connected to childhood, relationships, or chronic stress.'],
  ['Do you offer online sessions?', 'Yes. Dr. Reynolds offers secure telehealth sessions for clients located in California, as well as in-person therapy from her Santa Monica office.'],
  ['Who do you work with?', 'The practice focuses on adults, including high-achieving professionals, entrepreneurs, creatives, and people navigating anxiety, trauma, burnout, perfectionism, and high internal pressure.'],
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      {/* Hero: mirrors the original site's opening hierarchy while using Maya's content and a new visual direction. */}
      <section className="overflow-hidden bg-[#edf1e9]">
        <div className="container-x grid min-h-[690px] items-center gap-12 py-14 md:grid-cols-[1.02fr_.98fr] md:py-20">
          <div className="fade-up max-w-xl">
            <p className="eyebrow">In-person in Santa Monica · Telehealth across California</p>
            <h1 className="serif mt-5 text-5xl leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Therapy for Anxiety, Trauma & Burnout in Santa Monica
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#5f6e68]">
              A warm, grounded space for adults living with anxiety, trauma, burnout, perfectionism, and the pressure to keep everything together.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">Begin a conversation <ArrowRight className="ml-2 inline" size={16} /></a>
              <a href="#about" className="btn-secondary">Explore the practice</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5f6e68]">
              <span><Check className="mr-2 inline" size={16} />Warm & collaborative</span>
              <span><Check className="mr-2 inline" size={16} />Evidence-informed</span>
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-[48%_48%_12%_12%/24%_24%_9%_9%] shadow-2xl md:h-[610px]">
            <Image src={images.hero} alt="Quiet natural landscape representing a calm space for reflection" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#fffdf9]/90 p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8c6d5c]">Dr. Maya Reynolds, PsyD</p>
              <p className="mt-1 text-sm text-[#34453f]">Licensed Clinical Psychologist · Santa Monica, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / about */}
      <section id="about" className="section-pad">
        <div className="container-x grid items-center gap-14 md:grid-cols-2">
          <div className="relative h-[520px] overflow-hidden rounded-[30px] bg-[#e3eadf]">
            <Image src={images.intro} alt="Peaceful moment for reflection" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <p className="eyebrow">A place to slow down</p>
            <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">You can look like you’re doing fine and still need support.</h2>
            <p className="mt-6 leading-8 text-[#5f6e68]">
              Dr. Maya Reynolds works with adults who are thoughtful, self-aware, and often high-achieving—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
            <p className="mt-5 leading-8 text-[#5f6e68]">
              Her work creates room to understand both the emotional and physiological sides of what you are experiencing, while developing insight, resilience, and a stronger relationship with yourself over time.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="soft-card"><Heart className="mb-4 text-[#8c6d5c]" size={22} /><p className="text-sm font-semibold">Warm & human</p></div>
              <div className="soft-card"><ShieldCheck className="mb-4 text-[#526c5d]" size={22} /><p className="text-sm font-semibold">Trauma-informed</p></div>
              <div className="soft-card"><Sparkles className="mb-4 text-[#8c6d5c]" size={22} /><p className="text-sm font-semibold">Collaborative</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we help: preserves the original homepage's audience section. */}
      <section className="section-pad bg-[#f6f3ec]">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Who I work with</p>
            <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">Support for adults carrying more than they let others see.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ['Adults with anxiety', 'For adults experiencing constant worry, panic, tension, difficulty sleeping, or the feeling that they are always bracing for something to go wrong.'],
              ['Professionals, entrepreneurs & creatives', 'For people living under high internal pressure who feel disconnected from themselves after years of pushing through stress.'],
              ['Adults healing from past experiences', 'For people whose earlier experiences continue to affect relationships, confidence, safety, regulation, or their sense of self.'],
            ].map(([title, text], i) => (
              <article key={title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/[.04]">
                <p className="number-label">0{i + 1}</p>
                <h3 className="serif mt-3 text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f6e68]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / services */}
      <section id="services" className="section-pad">
        <div className="container-x">
          <p className="eyebrow">Areas of focus</p>
          <h2 className="serif mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">Practical tools, deeper work, and a pace that respects your nervous system.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <article key={service.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[.06]">
                <div className="relative h-64">
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-7">
                  <p className="number-label">0{i + 1}</p>
                  <h3 className="serif mt-3 text-3xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f6e68]">{service.text}</p>
                  <a href="#contact" className="mt-6 inline-block text-sm font-bold text-[#526c5d]">Talk about your goals <ArrowRight className="ml-1 inline" size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#526c5d] py-24 text-white">
        <div className="container-x grid gap-10 md:grid-cols-[.82fr_1.18fr] md:items-end">
          <div>
            <p className="eyebrow light">How we work</p>
            <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">Grounded enough to feel safe. Deep enough to create change.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/80">Dr. Reynolds takes a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive while still leaving space for reflection and depth.</p>
            <p className="mt-5 text-lg leading-8 text-white/80">Her work integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques to address both the emotional and physiological sides of what clients are experiencing.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Safety first', 'Evidence-informed', 'Whole-person care'].map(item => <div key={item} className="border-t border-white/20 pt-4 text-sm font-semibold">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-pad bg-[#f6f3ec]">
        <div className="container-x grid gap-12 md:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">What we may explore</p>
            <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">Understanding what is keeping you stuck.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ['Anxiety', 'Worry, panic, physical tension, sleep difficulties, and feeling constantly on alert.'],
              ['Trauma', 'Single-incident or complex experiences that continue to shape safety, relationships, and daily life.'],
              ['Burnout', 'The exhaustion and disconnection that can follow years of high pressure and pushing through.'],
              ['Perfectionism', 'High internal standards and pressure that make slowing down or feeling “enough” difficult.'],
              ['High internal pressure', 'The experience of appearing functional while carrying significant emotional strain underneath.'],
              ['Self-connection', 'Building insight, resilience, regulation, and a more sustainable relationship with yourself.'],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-[#d6ddd5] pt-5">
                <h3 className="serif text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#65756f]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapist */}
      <section className="section-pad">
        <div className="container-x grid items-center gap-12 md:grid-cols-[.82fr_1.18fr]">
          <div className="relative h-[570px] overflow-hidden rounded-[30px]">
            <Image
  src={images.portrait}
  alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 40vw"/>
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-3 text-xs text-[#53635d] backdrop-blur">Dr. Maya Reynolds, PsyD

Licensed Clinical Psychologist · Santa Monica, CA.</div>
          </div>
          <div>
            <p className="eyebrow">Meet Dr. Maya Reynolds, PsyD</p>
            <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">Practical support with room for depth.</h2>
            <p className="mt-6 leading-8 text-[#5f6e68]">I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.</p>
            <p className="mt-5 leading-8 text-[#5f6e68]">I work with adults who are navigating anxiety, panic, trauma, burnout, perfectionism, and high internal pressure. If you are looking for practical tools alongside depth-oriented work, therapy may be a good next step.</p>
            <div className="mt-8 rounded-2xl bg-[#edf1e9] p-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#8c6d5c]">Credentials & setting</p><p className="mt-3 text-sm leading-7 text-[#52635c]">Licensed Clinical Psychologist (PsyD) · Santa Monica, California · In-person and secure California telehealth</p></div>
          </div>
        </div>
      </section>

      {/* New custom section required by assignment */}
      <section id="office" className="section-pad bg-[#edf1e9]">
        <div className="container-x">
          <p className="eyebrow">New section · Our Office</p>
          <div className="mt-4 grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <h2 className="serif text-4xl leading-tight md:text-5xl">A quiet, private space designed to feel calm and grounding.</h2>
            <p className="max-w-xl text-lg leading-8 text-[#5f6e68]">Dr. Reynolds offers in-person therapy from her Santa Monica office. The space is described as quiet and private, with natural light and a comfortable, uncluttered environment that helps clients feel more at ease when they arrive.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-[1.25fr_.75fr] md:grid-rows-2">
            <div className="relative min-h-[510px] overflow-hidden rounded-3xl md:row-span-2"><Image src={images.office1} alt="Bright, uncluttered therapy office" fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" /></div>
            <div className="relative min-h-[240px] overflow-hidden rounded-3xl"><Image src={images.office2} alt="Warm office interior detail" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" /></div>
            <div className="rounded-3xl bg-white p-8 shadow-sm"><p className="eyebrow">Santa Monica</p><h3 className="serif mt-3 text-3xl">A place to arrive without having to perform.</h3><p className="mt-3 text-sm leading-7 text-[#5f6e68]">123th Street 45 W, Santa Monica, CA 90401</p><p className="mt-2 text-sm leading-7 text-[#5f6e68]">In-person sessions and secure telehealth for clients located in California.</p></div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="section-pad">
        <div className="container-x rounded-[36px] bg-[#f6f3ec] p-9 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div><p className="eyebrow">Start here</p><h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">You do not have to wait until things feel unbearable.</h2><p className="mt-5 max-w-xl leading-8 text-[#5f6e68]">If you are ready to explore therapy, a first conversation can help you decide whether this approach feels like the right fit.</p></div>
            <div className="rounded-3xl bg-white p-7 shadow-sm"><p className="text-sm font-semibold text-[#526c5d]">Book a consultation</p><p className="mt-2 text-sm leading-7 text-[#5f6e68]">Connect to discuss your goals, availability, and whether in-person or telehealth care is the better fit.</p><a href="mailto:maya@example.com" className="btn-primary mt-6 block text-center">Request a consultation</a></div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section-pad bg-[#fdfbf7]">
        <div className="container-x grid gap-12 md:grid-cols-[.72fr_1.28fr]">
          <div><p className="eyebrow">FAQs</p><h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">Questions before you begin.</h2><p className="mt-5 leading-7 text-[#65756f]">A first step can feel easier when you know what to expect.</p></div>
          <div className="divide-y divide-[#dce3db]">{faqs.map(([q, a]) => <details key={q} className="group py-6"><summary className="cursor-pointer list-none pr-8 text-base font-semibold">{q}<span className="float-right text-[#8c6d5c]">+</span></summary><p className="mt-4 max-w-2xl text-sm leading-7 text-[#65756f]">{a}</p></details>)}</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#253a32] py-24 text-white">
        <div className="container-x grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div><p className="eyebrow light">Take the next step</p><h2 className="serif mt-4 text-4xl leading-tight md:text-6xl">There is room for you here.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Whether you are dealing with anxiety, healing from trauma, or trying to find a more sustainable way to live and work, therapy can be a place to slow down and reconnect.</p></div>
          <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10"><p className="text-xs font-bold uppercase tracking-[.18em] text-white/60">Dr. Maya Reynolds, PsyD</p><p className="mt-3 text-sm leading-7 text-white/80">123th Street 45 W<br/>Santa Monica, CA 90401<br/><br/>In-person in Santa Monica · Secure telehealth across California</p><a href="mailto:maya@example.com" className="mt-6 block rounded-full bg-white px-6 py-4 text-center text-sm font-bold text-[#253a32]">Request a consultation</a></div>
        </div>
      </section>

      <footer className="bg-[#1b2b26] py-10 text-white"><div className="container-x flex flex-col justify-between gap-5 md:flex-row md:items-center"><div><p className="serif text-2xl">Maya Reynolds, PsyD</p><p className="mt-1 text-sm text-white/50">Licensed Clinical Psychologist · Santa Monica, California</p></div><p className="text-xs text-white/40">© {new Date().getFullYear()} Maya Reynolds Therapy · Privacy · Accessibility</p></div></footer>
    </main>
  );
}
