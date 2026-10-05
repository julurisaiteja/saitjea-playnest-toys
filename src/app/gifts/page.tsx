"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { items } from "@/lib/data";
import { AddButton } from "@/components/AddButton";

const ages = ["3–5", "6–8", "9–12"];
const interests = ["Build", "Story", "Outdoor", "Sensory"];

export default function GiftsPage() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);

  const picks = useMemo(() => {
    if (!age || !interest) return [];
    return items.filter((_, i) => i % 3 === interests.indexOf(interest)).slice(0, 4);
  }, [age, interest]);

  return (
    <div data-style="pop-art-kids" className="dots mx-auto max-w-3xl px-5 py-16 md:px-8">
      <h1 className="font-display text-6xl">Gift finder</h1>
      <p className="mt-2 font-bold">Step {step + 1} of 3</p>
      {step === 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {ages.map((a) => (
            <button key={a} type="button" onClick={() => { setAge(a); setStep(1); }} className="comic-panel bg-surface px-5 py-3 font-bold">{a}</button>
          ))}
        </div>
      )}
      {step === 1 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {interests.map((x) => (
            <button key={x} type="button" onClick={() => { setInterest(x); setStep(2); }} className="comic-panel bg-accent2 px-5 py-3 font-bold">{x}</button>
          ))}
        </div>
      )}
      {step === 2 && (
        <div className="mt-8">
          <p className="font-bold">For {age} · loves {interest}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {picks.map((item) => (
              <div key={item.id} className="comic-panel flex gap-3 bg-surface p-3">
                <div className="relative h-20 w-20 shrink-0 border-2 border-ink">
                  <Image src={item.image} alt="" fill className="object-cover" sizes="80px" />
                </div>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <AddButton item={item} label="Gift" />
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="mt-6 text-sm underline" onClick={() => setStep(0)}>Start over</button>
        </div>
      )}
    </div>
  );
}
