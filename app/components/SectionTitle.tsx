export default function SectionTitle({ eyebrow, title, text, light=false }: { eyebrow:string; title:string; text?:string; light?:boolean }) {
  return <div className={`max-w-2xl ${light?'text-white':''}`}>
    <p className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${light?'text-white/70':'text-[#7b675b]'}`}>{eyebrow}</p>
    <h2 className="serif text-4xl leading-tight md:text-5xl">{title}</h2>
    {text && <p className={`mt-5 text-base leading-8 ${light?'text-white/80':'text-[#65756f]'}`}>{text}</p>}
  </div>
}
