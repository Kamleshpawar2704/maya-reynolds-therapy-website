'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header(){
 const [open,setOpen]=useState(false);
 const links=[['About','about'],['Services','services'],['Our Office','office'],['FAQs','faqs']];
 return <header className="sticky top-0 z-50 border-b border-[#dfe5de] bg-[#fffdf9]/95 backdrop-blur">
  <div className="container-x flex h-[76px] items-center justify-between">
   <a href="#top" className="serif text-2xl font-bold tracking-tight">Maya Reynolds <span className="font-normal text-[#7b675b]">Therapy</span></a>
   <nav className="hidden items-center gap-8 md:flex">{links.map(([label,id])=><a key={id} href={'#'+id} className="text-sm text-[#52625c] transition hover:text-[#47665b]">{label}</a>)}<a href="#contact" className="rounded-full bg-[#47665b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#38534a]">Book a consultation</a></nav>
   <button aria-label="Open menu" onClick={()=>setOpen(!open)} className="md:hidden">{open?<X/>:<Menu/>}</button>
  </div>
  {open && <nav className="border-t border-[#dfe5de] bg-[#fffdf9] px-5 pb-6 md:hidden">{links.map(([label,id])=><a onClick={()=>setOpen(false)} key={id} href={'#'+id} className="block border-b border-[#e6ebe5] py-4 text-sm">{label}</a>)}<a onClick={()=>setOpen(false)} href="#contact" className="mt-5 block rounded-full bg-[#47665b] px-5 py-3 text-center text-sm font-semibold text-white">Book a consultation</a></nav>}
 </header>
}
