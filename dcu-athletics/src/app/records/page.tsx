"use client";
import { useMemo, useState } from "react";

type RecordItem = {
  event: string;
  athlete: string;
  college: string;
  mark: string;
  date: string;
};

type RecordSection = {
  title: string;
  items: RecordItem[];
};

const indoorsMale: RecordSection = {
  title: "Indoors Male Records",
  items: [
    { event: "60m", athlete: "Joseph Ojewumi (OYD)", college: "DCU", mark: "6.77", date: "8th Feb 2019" },
    { event: "60mH", athlete: "Matthew Behan", college: "DCU", mark: "7.97", date: "9th Feb 2018" },
    { event: "200m", athlete: "Mark Smyth", college: "DCU", mark: "21.02", date: "28th Jan 2023" },
    { event: "400m", athlete: "Jack Raftery", college: "DCU", mark: "46.98", date: "28th Jan 2023" },
    { event: "800m", athlete: "Joe Warne", college: "DCU", mark: "1:51.44", date: "1st Feb 2013" },
    { event: "1500m", athlete: "David Mc Carthy", college: "DCU", mark: "3:46.37", date: "7th Feb 2014" },
    { event: "2000mW", athlete: "Cian McManamon", college: "DCU", mark: "7:41.08", date: "10th Feb 2017" },
    { event: "3000m", athlete: "Michael Murphy", college: "DCU", mark: "8:14.74", date: "9th Feb 2025" },
    { event: "12,4,8,16", athlete: "Feidhlim Kelly", college: "DCU", mark: "10:35.07", date: "14th Feb 2009" },
    { event: "12,4,8,16", athlete: "Joe Warne", college: "DCU", mark: "10:35.07", date: "14th Feb 2009" },
    { event: "12,4,8,16", athlete: "Fergal Ellis", college: "DCU", mark: "10:35.07", date: "14th Feb 2009" },
    { event: "12,4,8,16", athlete: "Des Earls", college: "DCU", mark: "10:35.07", date: "14th Feb 2009" },
    { event: "4x200m", athlete: "Simon Essuman", college: "DCU", mark: "86.82", date: "15th Feb 2020" },
    { event: "4x200m", athlete: "Cillin Greene", college: "DCU", mark: "86.82", date: "15th Feb 2020" },
    { event: "4x200m", athlete: "Paul McDermott", college: "DCU", mark: "86.82", date: "15th Feb 2020" },
    { event: "4x200m", athlete: "Mark Smyth", college: "DCU", mark: "86.82", date: "15th Feb 2020" },
    { event: "Mixed 4x400m", athlete: "Darragh Masterson", college: "DCU", mark: "3:39.52", date: "9th Feb 2025" },
    { event: "Mixed 4x400m", athlete: "Oisin Kelly", college: "DCU", mark: "3:39.52", date: "9th Feb 2025" },
    { event: "LJ", athlete: "Eoin Hannon", college: "DCU", mark: "7.13", date: "15th Feb 2009" },
    { event: "TJ", athlete: "Francis Egan", college: "DCU", mark: "14.76", date: "5th Feb 2011" },
    { event: "HJ", athlete: "Barry Pender", college: "DCU", mark: "2.16", date: "4th Feb 2012" },
    { event: "PV", athlete: "Matthew Callinan Keenan", college: "DCU", mark: "4.72", date: "29th Jan 2022" },
    { event: "SP", athlete: "Eoin Sheridan", college: "DCU", mark: "15.55", date: "9th Feb 2018" },
    { event: "35lbWfD", athlete: "Luke Mangan", college: "DCU", mark: "9.39", date: "5th Feb 2011" },
    { event: "CE", athlete: "Michael Bowler (OYD)", college: "DCU", mark: "3835", date: "12th Feb 2016" },
  ],
};

const tfMale: RecordSection = {
  title: "T&F Male Records",
  items: [
    { event: "100m", athlete: "Michael Farrelly", college: "DCU", mark: "10.65", date: "11th to 12th Apr 2025" },
    { event: "110mH", athlete: "Matthew Behan", college: "DCU", mark: "14.16", date: "13th to 14th Apr 2018" },
    { event: "200m", athlete: "Mark Smyth", college: "DCU", mark: "20.95", date: "21st to 22nd Apr 2023" },
    { event: "400m", athlete: "Jack Raftery", college: "DCU", mark: "46.59", date: "21st to 22nd Apr 2023" },
    { event: "400mH", athlete: "John Fagan", college: "DCU", mark: "53.29", date: "24th Apr 2010" },
    { event: "800m", athlete: "Eoin Everard", college: "DCU", mark: "1:52.04", date: "14th Apr 2007" },
    { event: "1500m", athlete: "Danny Darcy", college: "DCU", mark: "3:51.41", date: "14th Apr 2007" },
    { event: "3000mSC", athlete: "Sean McGinley", college: "DCU", mark: "8:56.90", date: "21st to 22nd Apr 2023" },
    { event: "3000mW", athlete: "Matthew Glennon", college: "DCU", mark: "11:45.69", date: "11th to 12th Apr 2025" },
    { event: "5000m", athlete: "Michael Murphy", college: "DCU", mark: "14:18.04", date: "11th to 12th Apr 2025" },
    { event: "10000m", athlete: "Mark Christie", college: "DCU", mark: "29:52.95", date: "13th Apr 2007" },
    { event: "4x100m", athlete: "Michael Farrelly", college: "DCU", mark: "41.23", date: "8th to 9th Apr 2022" },
    { event: "4x100m", athlete: "Mark Smyth", college: "DCU", mark: "41.23", date: "8th to 9th Apr 2022" },
    { event: "4x100m", athlete: "Charles Okafor", college: "DCU", mark: "41.23", date: "8th to 9th Apr 2022" },
    { event: "4x100m", athlete: "Paul McDermott", college: "DCU", mark: "41.23", date: "8th to 9th Apr 2022" },
    { event: "4x400m", athlete: "Dara Kervick", college: "DCU", mark: "3:16.64", date: "11th to 12th Apr 2014" },
    { event: "4x400m", athlete: "Eoin Mulhall", college: "DCU", mark: "3:16.64", date: "11th to 12th Apr 2014" },
    { event: "4x400m", athlete: "Timmy Crowe", college: "DCU", mark: "3:16.64", date: "11th to 12th Apr 2014" },
    { event: "4x400m", athlete: "Evan Mc Guire", college: "DCU", mark: "3:16.64", date: "11th to 12th Apr 2014" },
    { event: "Mixed 4x400m", athlete: "Darragh Masterson", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "Mixed 4x400m", athlete: "Darragh Masterson", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "Mixed 4x400m", athlete: "Stephen Kiernan", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "Mixed 4x400m", athlete: "Stephen Kiernan", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "LJ", athlete: "Eoin Hannon", college: "DCU", mark: "7.40", date: "23rd Apr 2010" },
    { event: "TJ", athlete: "Eoin Kelly", college: "DCU", mark: "14.82", date: "24th Apr 2010" },
    { event: "HJ", athlete: "Kourosh Foroughi (OYD)", college: "DCU", mark: "2.12", date: "11th to 12th Apr 2014" },
    { event: "PV", athlete: "Conor Callinan", college: "DCU", mark: "4.45", date: "11th to 12th Apr 2025" },
    { event: "SP", athlete: "Eoin Sheridan", college: "DCU", mark: "14.74", date: "5th to 6th Apr 2019" },
    { event: "DT", athlete: "Eoin Sheridan", college: "DCU", mark: "53.72", date: "5th to 6th Apr 2019" },
    { event: "HT", athlete: "Adam King", college: "DCU", mark: "63.51", date: "7th to 8th Apr 2017" },
    { event: "JT", athlete: "Stephen Rice", college: "DCU", mark: "61.18", date: "7th to 8th Apr 2017" },
    { event: "35lbWfD", athlete: "Luke Mangan", college: "DCU", mark: "9.93", date: "30th Apr 2011" },
    { event: "CE", athlete: "Michael Bowler", college: "DCU", mark: "3580", date: "10th to 11th Apr 2015" },
  ],
};

const indoorsFemale: RecordSection = {
  title: "Indoors Female Records",
  items: [
    { event: "60m", athlete: "Sarah Murray", college: "DCU", mark: "7.46", date: "12th Feb 2016" },
    { event: "60mH", athlete: "Catherine McManus", college: "DCU", mark: "8.44", date: "6th Feb 2015" },
    { event: "200m", athlete: "Stephanie Creaner", college: "DCU", mark: "23.82", date: "6th Feb 2015" },
    { event: "400m", athlete: "Sophie Becker", college: "DCU", mark: "54.76", date: "9th Feb 2018" },
    { event: "800m", athlete: "Nadia Power", college: "DCU", mark: "2:08.28", date: "8th Feb 2019" },
    { event: "1500m", athlete: "Nadia Power", college: "DCU", mark: "4:30.22", date: "9th Feb 2018" },
    { event: "1500mW", athlete: "Laura Reynolds", college: "DCU", mark: "6:17.04", date: "5th Feb 2011" },
    { event: "3000m", athlete: "Aoife O'Cuill", college: "DCU", mark: "9:34.42", date: "29th Jan 2022" },
    { event: "12,4,8,16", athlete: "Susan McManus", college: "DCU", mark: "12:33.83", date: "14th Feb 2009" },
    { event: "12,4,8,16", athlete: "Roisin Anglim", college: "DCU", mark: "12:33.83", date: "14th Feb 2009" },
    { event: "12,4,8,16", athlete: "Nicola Hackett", college: "DCU", mark: "12:33.83", date: "14th Feb 2009" },
    { event: "12,4,8,16", athlete: "Ciara Durkan", college: "DCU", mark: "12:33.83", date: "14th Feb 2009" },
    { event: "4x200m", athlete: "Catherine McManus", college: "DCU", mark: "98.54", date: "6th Feb 2015" },
    { event: "4x200m", athlete: "Stephanie Creaner", college: "DCU", mark: "98.54", date: "6th Feb 2015" },
    { event: "4x200m", athlete: "Cliodhna Manning", college: "DCU", mark: "98.54", date: "6th Feb 2015" },
    { event: "4x200m", athlete: "Sarah Murray", college: "DCU", mark: "98.54", date: "6th Feb 2015" },
    { event: "Mixed 4x400m", athlete: "Aimee Doherty", college: "DCU", mark: "3:39.52", date: "9th Feb 2025" },
    { event: "Mixed 4x400m", athlete: "Aisling Stratford", college: "DCU", mark: "3:39.52", date: "9th Feb 2025" },
    { event: "LJ", athlete: "Lauren Callaghan", college: "DCU", mark: "6.19", date: "28th Jan 2023" },
    { event: "TJ", athlete: "Saragh Buggy", college: "DCU", mark: "13.18", date: "15th Feb 2020" },
    { event: "HJ", athlete: "Cathriona Farrell (OYD)", college: "DCU", mark: "1.81", date: "7th Feb 2014" },
    { event: "PV", athlete: "Nikita Savage", college: "DCU", mark: "3.00", date: "1st Feb 2013" },
    { event: "SP", athlete: "Michaela Walsh (OYD)", college: "DCU", mark: "15.54", date: "28th Jan 2023" },
    { event: "20lbWfD", athlete: "Sophie Parkinson Brown", college: "DCU", mark: "8.66", date: "12th Feb 2016" },
    { event: "CE", athlete: "Elizabeth Morland", college: "DCU", mark: "3985", date: "9th Feb 2018" },
  ],
};

const tfFemale: RecordSection = {
  title: "T&F Female Records",
  items: [
    { event: "100m", athlete: "Sarah Murray", college: "DCU", mark: "11.77", date: "15th Apr 2016" },
    { event: "100mH", athlete: "Lilly-Ann O'Hora (OYD)", college: "DCU", mark: "14.08", date: "13th to 14th Apr 2018" },
    { event: "200m", athlete: "Cliodhna Manning", college: "DCU", mark: "24.16", date: "7th to 8th Apr 2017" },
    { event: "400m", athlete: "Cliodhna Manning (OYD)", college: "DCU", mark: "54.24", date: "13th to 14th Apr 2018" },
    { event: "400mH", athlete: "Brona Furlong", college: "DCU", mark: "59.41", date: "24th Apr 2010" },
    { event: "800m", athlete: "Sarah Lane", college: "DCU", mark: "2:11.77", date: "21st to 22nd Apr 2023" },
    { event: "1500m", athlete: "Avril Deegan", college: "DCU", mark: "4:33.99", date: "5th to 6th Apr 2019" },
    { event: "1500mW", athlete: "Kate Veale (OYD)", college: "DCU", mark: "6:14.48", date: "13th to 14th Apr 2018" },
    { event: "3000m", athlete: "Linda Byrne", college: "DCU", mark: "9:42.45", date: "24th Apr 2010" },
    { event: "3000mSC", athlete: "Fionnuala Britton", college: "DCU", mark: "10:07.08", date: "13th Apr 2007" },
    { event: "5000m", athlete: "Linda Byrne (OYD)", college: "DCU", mark: "16:45.41", date: "24th Apr 2009" },
    { event: "4x100m", athlete: "Catherine McManus", college: "DCU", mark: "46.12", date: "11th to 12th Apr 2014" },
    { event: "4x100m", athlete: "Stephanie Creaner", college: "DCU", mark: "46.12", date: "11th to 12th Apr 2014" },
    { event: "4x100m", athlete: "Sarah Murray", college: "DCU", mark: "46.12", date: "11th to 12th Apr 2014" },
    { event: "4x100m", athlete: "Louise Kiernan (OYD)", college: "DCU", mark: "46.12", date: "11th to 12th Apr 2014" },
    { event: "4x400m", athlete: "Sinead Kelly", college: "DCU", mark: "3:45.60", date: "25th Apr 2009" },
    { event: "4x400m", athlete: "Gemma Hynes", college: "DCU", mark: "3:45.60", date: "25th Apr 2009" },
    { event: "4x400m", athlete: "Claire Bergin", college: "DCU", mark: "3:45.60", date: "25th Apr 2009" },
    { event: "4x400m", athlete: "Brona Furlong", college: "DCU", mark: "3:45.60", date: "25th Apr 2009" },
    { event: "Mixed 4x400m", athlete: "Aisling Stratford", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "Mixed 4x400m", athlete: "Aisling Stratford", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "Mixed 4x400m", athlete: "Sarah Lane", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "Mixed 4x400m", athlete: "Sarah Lane", college: "DCU", mark: "3:39.66", date: "11th to 12th Apr 2025" },
    { event: "LJ", athlete: "Sarah Mc Carthy", college: "DCU", mark: "6.24", date: "10th to 11th Apr 2015" },
    { event: "TJ", athlete: "Saragh Buggy", college: "DCU", mark: "12.63", date: "16th Apr 2016" },
    { event: "HJ", athlete: "Ciara Kennelly", college: "DCU", mark: "1.80", date: "5th to 6th Apr 2024" },
    { event: "PV", athlete: "Nikita Savage", college: "DCU", mark: "3.00", date: "30th Apr 2011" },
    { event: "SP", athlete: "Michaela Walsh (OYD)", college: "DCU", mark: "14.86", date: "21st to 22nd Apr 2023" },
    { event: "DT", athlete: "Anna Gavigan", college: "DCU", mark: "50.15", date: "11th to 12th Apr 2025" },
    { event: "HT", athlete: "Michaela Walsh", college: "DCU", mark: "59.90", date: "8th to 9th Apr 2022" },
    { event: "JT", athlete: "Elizabeth Morland", college: "DCU", mark: "40.66", date: "13th to 14th Apr 2018" },
    { event: "JTo", athlete: "Corina O'Connell", college: "DCU", mark: "25.77", date: "25th to 26th Apr 1997" },
    { event: "16lbWfD", athlete: "Sophie Parkinson Brown", college: "DCU", mark: "8.49", date: "16th Apr 2016" },
    { event: "20lbWfD", athlete: "Zoe Mohan", college: "DCU", mark: "8.26", date: "8th to 9th Apr 2022" },
    { event: "CE", athlete: "Sarah Mc Carthy", college: "DCU", mark: "3357", date: "11th to 12th Apr 2014" },
  ],
};

type Gender = "Male" | "Female";
type Arena = "Indoors" | "T&F";

type FlatRecord = RecordItem & { gender: Gender; arena: Arena };

function badgeify(athlete: string) {
  const badges: { label: string; title: string }[] = [];
  if (athlete.includes("(OYD)")) badges.push({ label: "OYD", title: "Outside Year of Degree" });
  return badges;
}

function toCsv(rows: FlatRecord[]) {
  const header = ["Arena", "Gender", "Event", "Athlete", "College", "Mark", "Date"].join(",");
  const escape = (v: string) => '"' + v.replace(/"/g, '""') + '"';
  const body = rows
    .map(r => [r.arena, r.gender, r.event, r.athlete, r.college, r.mark, r.date].map(escape).join(","))
    .join("\n");
  return header + "\n" + body;
}

export default function RecordsPage() {
  const [arena, setArena] = useState<Arena>("Indoors");
  const [gender, setGender] = useState<Gender>("Male");
  const [eventFilter, setEventFilter] = useState("");
  const [sortBy, setSortBy] = useState<"event" | "mark" | "date">("event");

  const flatData = useMemo<FlatRecord[]>(() => {
    const rows: FlatRecord[] = [];
    (indoorsMale.items).forEach(i => rows.push({ ...i, gender: "Male", arena: "Indoors" }));
    (tfMale.items).forEach(i => rows.push({ ...i, gender: "Male", arena: "T&F" }));
    (indoorsFemale.items).forEach(i => rows.push({ ...i, gender: "Female", arena: "Indoors" }));
    (tfFemale.items).forEach(i => rows.push({ ...i, gender: "Female", arena: "T&F" }));
    return rows;
  }, []);

  const filtered = useMemo(() => {
    const e = eventFilter.trim().toLowerCase();
    const subset = flatData.filter(r => r.arena === arena && r.gender === gender && (!e || r.event.toLowerCase().includes(e)));
    const sorted = [...subset].sort((a, b) => {
      if (sortBy === "event") return a.event.localeCompare(b.event);
      if (sortBy === "date") return a.date.localeCompare(b.date);
      return a.mark.localeCompare(b.mark);
    });
    return sorted;
  }, [flatData, arena, gender, eventFilter, sortBy]);

  const eventsForSelect = useMemo(() => {
    const setEvents = new Set<string>();
    flatData.filter(r => r.arena === arena && r.gender === gender).forEach(r => setEvents.add(r.event));
    return Array.from(setEvents).sort();
  }, [flatData, arena, gender]);

  const downloadCsv = () => {
    const csv = toCsv(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dcu_records_${arena}_${gender}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-blue-700">Club Records</h1>
      <p className="text-sm text-gray-600 mb-6">Best performances by DCU athletes while competing at IUAA events.</p>

      <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm font-medium">Arena</label>
          <div className="inline-flex rounded-full border overflow-hidden">
            <button onClick={() => setArena("Indoors")} className={`px-3 py-1 text-sm ${arena === "Indoors" ? "bg-blue-700 text-white" : "bg-white"}`}>Indoors</button>
            <button onClick={() => setArena("T&F")} className={`px-3 py-1 text-sm ${arena === "T&F" ? "bg-blue-700 text-white" : "bg-white"}`}>Outdoor (T&F)</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm font-medium">Gender</label>
          <div className="inline-flex rounded-full border overflow-hidden">
            <button onClick={() => setGender("Male")} className={`px-3 py-1 text-sm ${gender === "Male" ? "bg-blue-700 text-white" : "bg-white"}`}>Men</button>
            <button onClick={() => setGender("Female")} className={`px-3 py-1 text-sm ${gender === "Female" ? "bg-blue-700 text-white" : "bg-white"}`}>Women</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm font-medium" htmlFor="eventSelect">Event</label>
          <select id="eventSelect" value={eventFilter} onChange={(e) => setEventFilter(e.target.value)} className="px-3 py-1 border rounded-md">
            <option value="">All events</option>
            {eventsForSelect.map(ev => <option key={ev} value={ev}>{ev}</option>)}
          </select>
        </div>
        <div className="flex flex-wrap items-center gap-2 ml-auto">
          <label className="text-sm font-medium" htmlFor="sortBy">Sort by</label>
          <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="px-3 py-1 border rounded-md">
            <option value="event">Event</option>
            <option value="date">Date</option>
            <option value="mark">Mark</option>
          </select>
          <button onClick={downloadCsv} className="px-3 py-1 rounded-md border bg-gray-50 hover:bg-gray-100">Download CSV</button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow mb-8">
        <table className="min-w-full">
          <caption className="text-left text-xl font-semibold p-4 border-b">{arena} {gender} Records</caption>
          <thead>
            <tr className="text-left border-b">
              <th className="p-3">Event</th>
              <th className="p-3">Athlete</th>
              <th className="p-3">College</th>
              <th className="p-3">Mark</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, idx) => (
              <tr key={`${r.event}-${r.athlete}-${idx}`} className="border-b last:border-0 align-top">
                <td className="p-3 whitespace-nowrap">{r.event}</td>
                <td className="p-3">
                  <span className="mr-2">{r.athlete.replace(" (OYD)", "")}</span>
                  {badgeify(r.athlete).map(b => (
                    <span key={b.label} title={b.title} className="align-middle inline-block text-[10px] px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 mr-1">{b.label}</span>
                  ))}
                </td>
                <td className="p-3 whitespace-nowrap">{r.college}</td>
                <td className="p-3 font-medium whitespace-nowrap">{r.mark}</td>
                <td className="p-3 whitespace-nowrap">{r.date}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-sm text-gray-600">No records match your filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow mb-8">
        <table className="min-w-full">
          <caption className="text-left text-xl font-semibold p-4 border-b">Most appearances for Dublin City University</caption>
          <thead>
            <tr className="text-left border-b">
              <th className="p-3">Rank</th>
              <th className="p-3">Athlete</th>
              <th className="p-3">Date Range</th>
              <th className="p-3">Appearances</th>
            </tr>
          </thead>
          <tbody>
            {[
              { rank: 1, athlete: "Brona Furlong", range: "10th Dec 2005 to 15th Nov 2014", appearances: 62 },
              { rank: 2, athlete: "Shane Aston", range: "7th Feb 2014 to 13th Apr 2018", appearances: 58 },
              { rank: 3, athlete: "Joe Warne", range: "18th Nov 2006 to 10th Apr 2015", appearances: 57 },
              { rank: 4, athlete: "Jack Forde", range: "29th Jan 2022 to 11th Apr 2025", appearances: 52 },
              { rank: 5, athlete: "Jennifer Reddy", range: "2nd Dec 2006 to 23rd Apr 2010", appearances: 52 },
              { rank: 6, athlete: "Catherine McManus", range: "5th Feb 2011 to 7th Apr 2017", appearances: 50 },
              { rank: 7, athlete: "Kourosh Foroughi", range: "13th Feb 2010 to 11th Apr 2014", appearances: 49 },
              { rank: 8, athlete: "Leona Byrne", range: "10th Dec 2005 to 23rd Apr 2010", appearances: 48 },
              { rank: 9, athlete: "Jennifer McKenna", range: "13th Dec 1996 to 25th Apr 2003", appearances: 37 },
              { rank: 10, athlete: "Michael Bowler", range: "1st Feb 2013 to 15th Apr 2016", appearances: 37 },
              { rank: 11, athlete: "Karen Dunne", range: "4th Feb 2012 to 10th Apr 2015", appearances: 36 },
              { rank: 12, athlete: "Christopher Crowley", range: "2nd Dec 2006 to 23rd Apr 2010", appearances: 36 },
              { rank: 13, athlete: "Sarah Murray", range: "1st Feb 2013 to 7th Apr 2017", appearances: 34 },
              { rank: 14, athlete: "Niamh McCorry", range: "29th Jan 2022 to 5th Apr 2024", appearances: 33 },
              { rank: 15, athlete: "Eric Brady", range: "14th Feb 2009 to 10th Apr 2015", appearances: 33 },
              { rank: 16, athlete: "Eoin Kelly", range: "2nd Dec 2006 to 12th Apr 2013", appearances: 33 },
              { rank: 17, athlete: "Feidhlim Kelly", range: "17th Nov 2007 to 4th Feb 2012", appearances: 32 },
              { rank: 18, athlete: "Sarah Mc Carthy", range: "7th Feb 2014 to 15th Feb 2020", appearances: 32 },
              { rank: 19, athlete: "Claire Brady", range: "10th Dec 2005 to 24th Apr 2009", appearances: 32 },
              { rank: 20, athlete: "Sinead Mc Donough", range: "6th Feb 2015 to 9th Feb 2018", appearances: 32 },
            ].map((r) => (
              <tr key={r.rank} className="border-b last:border-0">
                <td className="p-3">{r.rank}</td>
                <td className="p-3">{r.athlete}</td>
                <td className="p-3 whitespace-nowrap">{r.range}</td>
                <td className="p-3">{r.appearances}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


