"use client";

import { useMemo, useState } from "react";

type ZodiacKey =
  | "Rat"
  | "Ox"
  | "Tiger"
  | "Rabbit"
  | "Dragon"
  | "Snake"
  | "Horse"
  | "Goat"
  | "Monkey"
  | "Rooster"
  | "Dog"
  | "Pig";

type ZodiacData = {
  emoji: string;
  summary: string;
  personality: string;
  love: string;
  career: string[];
  fortune: string;
  bestMatches: string[];
  challengingMatches: string[];
};

type CompatibilityResult = {
  score: number;
  label: string;
  description: string;
};

const zodiacOrder: ZodiacKey[] = [
  "Rat","Ox","Tiger","Rabbit","Dragon","Snake",
  "Horse","Goat","Monkey","Rooster","Dog","Pig"
];

const zodiacDetails: Record<ZodiacKey, ZodiacData> = {
  Rat: {
    emoji: "🐭",
    summary: "Quick-minded, adaptable, and resourceful.",
    personality: "You are clever, observant, and good at spotting opportunities.",
    love: "Attentive but cautious with trust.",
    career: ["Business","Sales","Research"],
    fortune: "This year brings useful connections and steady progress.",
    bestMatches: ["Dragon","Monkey"],
    challengingMatches: ["Horse"]
  },
  Ox: {
    emoji: "🐮",
    summary: "Reliable and disciplined.",
    personality: "You value stability and persistence.",
    love: "Loyal but reserved emotionally.",
    career: ["Finance","Engineering"],
    fortune: "Steady growth through patience.",
    bestMatches: ["Snake","Rooster"],
    challengingMatches: ["Goat"]
  },
  Tiger: {
    emoji: "🐯",
    summary: "Bold and charismatic.",
    personality: "You lead naturally and act with confidence.",
    love: "Passionate but independent.",
    career: ["Leadership","Entrepreneur"],
    fortune: "Opportunities for growth but avoid overconfidence.",
    bestMatches: ["Horse","Dog"],
    challengingMatches: ["Monkey"]
  },
  Rabbit: {
    emoji: "🐰",
    summary: "Gentle and intuitive.",
    personality: "You seek harmony and emotional balance.",
    love: "Warm and supportive.",
    career: ["Design","Teaching"],
    fortune: "Peaceful year with stable progress.",
    bestMatches: ["Goat","Pig"],
    challengingMatches: ["Rooster"]
  },
  Dragon: {
    emoji: "🐲",
    summary: "Confident and visionary.",
    personality: "You inspire and lead with energy.",
    love: "Exciting but intense.",
    career: ["Startup","Strategy"],
    fortune: "Big opportunities but stay focused.",
    bestMatches: ["Rat","Monkey"],
    challengingMatches: ["Dog"]
  },
  Snake: {
    emoji: "🐍",
    summary: "Strategic and thoughtful.",
    personality: "You analyze deeply and act carefully.",
    love: "Selective and deep.",
    career: ["Law","Consulting"],
    fortune: "Careful planning pays off.",
    bestMatches: ["Ox","Rooster"],
    challengingMatches: ["Pig"]
  },
  Horse: {
    emoji: "🐴",
    summary: "Energetic and free.",
    personality: "You love movement and independence.",
    love: "Exciting but needs space.",
    career: ["Sales","Travel"],
    fortune: "New opportunities ahead.",
    bestMatches: ["Tiger","Dog"],
    challengingMatches: ["Rat"]
  },
  Goat: {
    emoji: "🐐",
    summary: "Creative and empathetic.",
    personality: "You value emotion and beauty.",
    love: "Caring and gentle.",
    career: ["Art","Care"],
    fortune: "Creative growth year.",
    bestMatches: ["Rabbit","Pig"],
    challengingMatches: ["Ox"]
  },
  Monkey: {
    emoji: "🐵",
    summary: "Smart and playful.",
    personality: "You adapt quickly and think creatively.",
    love: "Fun but inconsistent.",
    career: ["Tech","Marketing"],
    fortune: "Opportunities require focus.",
    bestMatches: ["Rat","Dragon"],
    challengingMatches: ["Tiger"]
  },
  Rooster: {
    emoji: "🐔",
    summary: "Organized and sharp.",
    personality: "You value precision and clarity.",
    love: "Honest but direct.",
    career: ["Finance","Admin"],
    fortune: "Growth through discipline.",
    bestMatches: ["Ox","Snake"],
    challengingMatches: ["Rabbit"]
  },
  Dog: {
    emoji: "🐶",
    summary: "Loyal and sincere.",
    personality: "You value fairness and trust.",
    love: "Devoted but cautious.",
    career: ["Law","Healthcare"],
    fortune: "Stable progress.",
    bestMatches: ["Tiger","Horse"],
    challengingMatches: ["Dragon"]
  },
  Pig: {
    emoji: "🐷",
    summary: "Warm and kind.",
    personality: "You are generous and relaxed.",
    love: "Affectionate and steady.",
    career: ["Creative","Community"],
    fortune: "Emotionally rewarding year.",
    bestMatches: ["Rabbit","Goat"],
    challengingMatches: ["Snake"]
  },
};

function getZodiac(year:number){
  return zodiacOrder[((year-4)%12+12)%12];
}

function getCompatibility(a: ZodiacKey, b: ZodiacKey): CompatibilityResult {
  if(a===b) return {score:85,label:"Strong Match",description:"Very similar energy and values."};

  if(zodiacDetails[a].bestMatches.includes(b)){
    return {score:92,label:"Excellent Match",description:"Natural synergy and balance."};
  }

  if(zodiacDetails[a].challengingMatches.includes(b)){
    return {score:48,label:"Challenging Match",description:"Needs effort and communication."};
  }

  return {score:70,label:"Balanced Match",description:"Stable with mutual understanding."};
}

export default function KoreanZodiacCalculatorClient(){
  const [birthDate,setBirthDate]=useState("");
  const [partnerBirthDate,setPartnerBirthDate]=useState("");
  const [submitted,setSubmitted]=useState(false);
  const [compatibilitySubmitted,setCompatibilitySubmitted]=useState(false);

  const currentYear = new Date().getFullYear();

  const result = useMemo(()=>{
    if(!birthDate) return null;
    const year=new Date(birthDate).getFullYear();
    const animal=getZodiac(year);
    return {year,animal,details:zodiacDetails[animal]};
  },[birthDate]);

  const compatibilityResult = useMemo(()=>{
    if(!birthDate||!partnerBirthDate) return null;

    const y1=new Date(birthDate).getFullYear();
    const y2=new Date(partnerBirthDate).getFullYear();

    const a=getZodiac(y1);
    const b=getZodiac(y2);

    return {
      y1,y2,a,b,
      comp:getCompatibility(a,b)
    };
  },[birthDate,partnerBirthDate]);

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

      <input type="date" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} className="w-full mb-3 p-3 bg-black/30 rounded"/>
      <input type="date" value={partnerBirthDate} onChange={(e)=>setPartnerBirthDate(e.target.value)} className="w-full mb-3 p-3 bg-black/30 rounded"/>

      <button onClick={()=>setSubmitted(true)} className="bg-white text-black px-4 py-2 rounded mr-2">My Zodiac</button>
      <button onClick={()=>setCompatibilitySubmitted(true)} className="border px-4 py-2 rounded">Compatibility</button>

      {submitted && result && (
        <div className="mt-6">
          <h2>{result.details.emoji} {result.animal}</h2>
          <p>{result.details.summary}</p>
          <p>{currentYear} Fortune: {result.details.fortune}</p>
        </div>
      )}

      {compatibilitySubmitted && compatibilityResult && (
        <div className="mt-6">
          <h2>{compatibilityResult.a} × {compatibilityResult.b}</h2>
          <p>{compatibilityResult.comp.score}/100</p>
          <p>{compatibilityResult.comp.label}</p>
          <p>{compatibilityResult.comp.description}</p>
        </div>
      )}

    </div>
  );
}