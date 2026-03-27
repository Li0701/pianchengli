/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ITINERARY_DATA, GOURMET_DATA, INFO_DATA, DayItinerary, TimelineItem, GourmetSpot, InfoItem } from './data';

type Page = 'home' | 'day' | 'gourmet' | 'info';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const navigateToDay = (dayId: string) => {
    setSelectedDay(dayId);
    setCurrentPage('day');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedDay(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#181c21] font-['Manrope'] selection:bg-[#a1c9ff]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#F8F9FF]/80 backdrop-blur-md flex justify-between items-center px-6 h-16 border-none">
        <div className="flex items-center gap-3 cursor-pointer" onClick={navigateToHome}>
          <span className="material-symbols-outlined text-[#005ea3]">calendar_month</span>
          <h1 className="text-xl font-bold tracking-tighter text-[#005ea3] font-['Plus_Jakarta_Sans']">釜山：海岸記事</h1>
        </div>
        <div className="flex items-center gap-2 bg-[#f0e1c7] px-3 py-1.5 rounded-full shadow-sm">
          <span className="material-symbols-outlined text-[#a13a0f] text-sm">currency_exchange</span>
          <span className="text-xs font-bold text-[#221b0b]">1,000 KRW ≈ 22 TWD</span>
        </div>
      </header>

      <main className="pt-20 pb-32 max-w-screen-md mx-auto px-4 md:px-0">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HomeView onSelectDay={navigateToDay} onNavigate={setCurrentPage} />
            </motion.div>
          )}
          {currentPage === 'day' && selectedDay && (
            <motion.div key={`day-${selectedDay}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <DayDetailView 
                day={ITINERARY_DATA[selectedDay]} 
                onBack={navigateToHome} 
              />
            </motion.div>
          )}
          {currentPage === 'gourmet' && (
            <motion.div key="gourmet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <GourmetView />
            </motion.div>
          )}
          {currentPage === 'info' && (
            <motion.div key="info" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <InfoView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#F1F3FB]/90 backdrop-blur-lg rounded-t-[2rem] shadow-[0_-4px_20px_rgba(0,94,163,0.05)]">
        <NavItem 
          icon="home" 
          label="首頁" 
          active={currentPage === 'home'} 
          onClick={navigateToHome} 
        />
        <NavItem 
          icon="event_note" 
          label="行程" 
          active={currentPage === 'day' || (currentPage === 'home' && selectedDay === null)} 
          onClick={() => {
            if (selectedDay) setCurrentPage('day');
            else navigateToHome();
          }} 
        />
        <NavItem 
          icon="restaurant" 
          label="美食" 
          active={currentPage === 'gourmet'} 
          onClick={() => setCurrentPage('gourmet')} 
        />
        <NavItem 
          icon="info" 
          label="資訊" 
          active={currentPage === 'info'} 
          onClick={() => setCurrentPage('info')} 
        />
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: string, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90 rounded-[1.25rem] ${
        active ? 'bg-[#F0E1C7] text-[#A13A0F]' : 'text-[#005EA3]/50'
      }`}
    >
      <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' ${active ? 1 : 0}` }}>{icon}</span>
      <span className="text-[12px] font-semibold mt-1">{label}</span>
    </button>
  );
}

function HomeView({ onSelectDay, onNavigate }: { onSelectDay: (id: string) => void, onNavigate: (page: Page) => void }) {
  const [krw, setKrw] = useState<string>("10000");
  const [twd, setTwd] = useState<string>("220");
  const rate = 0.022;

  const handleKrwChange = (val: string) => {
    setKrw(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setTwd((num * rate).toFixed(0));
    } else {
      setTwd("");
    }
  };

  const handleTwdChange = (val: string) => {
    setTwd(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setKrw((num / rate).toFixed(0));
    } else {
      setKrw("");
    }
  };

  const krwPresets = ["1000", "5000", "10000", "50000"];
  const twdPresets = ["100", "500", "1000", "2000"];

  return (
    <div className="space-y-10">
      <section className="relative group">
        <div className="rounded-t-[4rem] rounded-br-[4rem] overflow-hidden h-[450px] shadow-[0_24px_48px_-12px_rgba(0,94,163,0.08)]">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDha8lzeH8OlwdKiw1FC5fS4-iqVTAi3YwNyun1r_AdY05eD8O2zpvw3JAzmmK2ifPyh1L2Xn__9G9ScFCC4TVwhMJ3jaIll4JJHiIXnjYEQM7JMEl_-fXfn_jVwrhXE0PST5h65-iNHn_VmGJCzEkmvS7Eq_vwTLzD9ozS95Bv9oa1FHGWMt6GJe0G9XvvW9_KfVgEumwn-s8jE_pyndpUZvvYQYtbUyFF3dfCX5YrKkFOo2oh3G-_WjXfc6xtyWb2u4ac2CbOFmOt" 
            alt="Busan Coastline"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#005ea3]/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <p className="font-['Plus_Jakarta_Sans'] tracking-widest text-sm mb-2 opacity-90 uppercase">THE COASTAL ARCHIVIST</p>
            <h2 className="text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-none">探索藍色<br/>釜山八日</h2>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ffdbcf] rounded-full flex items-center justify-center p-4 text-center transform rotate-12 shadow-lg">
          <span className="text-[#380c00] font-bold leading-tight text-sm">最佳<br/>推薦</span>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-[#005ea3]">行程導覽</h3>
            <p className="text-[#404752] text-sm">八天七夜，深度挖掘海洋城市之美</p>
          </div>
          <span className="text-[#a13a0f] font-bold font-['Plus_Jakarta_Sans'] text-lg">D1-D8</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(ITINERARY_DATA).map((dayId) => (
            <button 
              key={dayId}
              onClick={() => onSelectDay(dayId)}
              className="aspect-square bg-white p-6 rounded-xl flex flex-col justify-between items-start transition-all hover:bg-[#f0e1c7] hover:scale-95 duration-200 shadow-sm"
            >
              <span className="text-3xl font-bold font-['Plus_Jakarta_Sans'] text-[#005ea3]">{dayId}</span>
              <span className="text-sm font-semibold text-[#404752] text-left">{ITINERARY_DATA[dayId].title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-[#005ea3]">精選推薦</h3>
          <button onClick={() => onNavigate('gourmet')} className="text-sm font-bold text-[#a13a0f] flex items-center gap-1">
            查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => onNavigate('gourmet')}
            className="group relative overflow-hidden rounded-3xl h-64 shadow-md"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src={GOURMET_DATA[0].image} 
              alt="Gourmet"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-left">
              <span className="bg-[#ffdbcf] text-[#a13a0f] text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-2 uppercase tracking-wider">熱門美食</span>
              <h4 className="text-2xl font-bold">{GOURMET_DATA[0].title}</h4>
              <p className="text-sm opacity-80 line-clamp-1">{GOURMET_DATA[0].description}</p>
            </div>
          </button>
          <button 
            onClick={() => onNavigate('info')}
            className="group relative overflow-hidden rounded-3xl h-64 shadow-md"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxV08gf7b_er3kONtPCYxdXZwfARGzIoiMI8kn5bcLqyQ7FPleFNxvfRmOCpe0CkFayc4O1d1Lox1itOqqihxynH6ycDRQSTcpubwCFt6UwxbGokH6XVDLn0t-4l9Xxhay1JE8cNII3y4ce3fUHSn5Mb7W7nNyYoWf6Q0iemCdQZNf-MasMEtajRpfz6co5VmjT_eQDu6a_4fiyVNOWvqf5pNQ3R9oYUvIkjcmi_W3FGFxz7NkC8tyUnpqB0AOfNYvQ2Tu1mh4Ik--" 
              alt="Info"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-left">
              <span className="bg-[#a1c9ff] text-[#005ea3] text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-2 uppercase tracking-wider">實用資訊</span>
              <h4 className="text-2xl font-bold">{INFO_DATA[0].title}</h4>
              <p className="text-sm opacity-80 line-clamp-1">{INFO_DATA[0].content}</p>
            </div>
          </button>
        </div>
      </section>

      {/* Currency Converter Section */}
      <section className="bg-[#f1f3fb] rounded-[2rem] p-8 space-y-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#a13a0f]">payments</span>
          <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans']">匯率計算器</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-xs font-bold text-[#717783] uppercase ml-1">韓元 KRW</label>
              <div className="relative">
                <input 
                  className="w-full bg-white border-none rounded-2xl py-4 px-6 text-2xl font-bold text-[#005ea3] focus:ring-2 focus:ring-[#a1c9ff] transition-shadow outline-none" 
                  type="number" 
                  value={krw}
                  onChange={(e) => handleKrwChange(e.target.value)}
                />
                <span className="absolute right-6 bottom-4 text-[#717783] font-bold">₩</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {krwPresets.map(val => (
                  <button 
                    key={val} 
                    onClick={() => handleKrwChange(val)}
                    className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-[#005ea3] hover:bg-[#a1c9ff] transition-colors shadow-sm"
                  >
                    {parseInt(val).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-xs font-bold text-[#717783] uppercase ml-1">台幣 TWD</label>
              <div className="relative">
                <input 
                  className="w-full bg-white border-none rounded-2xl py-4 px-6 text-2xl font-bold text-[#a13a0f] focus:ring-2 focus:ring-[#ffdbcf] transition-shadow outline-none" 
                  type="number" 
                  value={twd}
                  onChange={(e) => handleTwdChange(e.target.value)}
                />
                <span className="absolute right-6 bottom-4 text-[#717783] font-bold">$</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {twdPresets.map(val => (
                  <button 
                    key={val} 
                    onClick={() => handleTwdChange(val)}
                    className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-[#a13a0f] hover:bg-[#ffdbcf] transition-colors shadow-sm"
                  >
                    {parseInt(val).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#f0e1c7] rounded-2xl p-6 flex flex-col justify-center border border-[#c0c7d3]/10 h-full">
            <p className="text-[#221b0b] font-semibold text-sm mb-2 opacity-70">當前參考匯率</p>
            <p className="text-3xl font-bold text-[#221b0b]">1 KRW = 0.022 TWD</p>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#221b0b]/60">
                <span>10,000 KRW</span>
                <span>≈ 220 TWD</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-[#221b0b]/60">
                <span>50,000 KRW</span>
                <span>≈ 1,100 TWD</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-[#221b0b]/60">
                <span>100,000 KRW</span>
                <span>≈ 2,200 TWD</span>
              </div>
            </div>
            <p className="text-[10px] text-[#221b0b] mt-auto pt-6 opacity-60">數據更新於 2024.05.20 12:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function DayDetailView({ day, onBack }: { day: DayItinerary, onBack: () => void }) {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-[#f1f3fb] h-[400px] shadow-lg">
        <img 
          className="w-full h-full object-cover" 
          src={day.heroImage} 
          alt={day.title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
          <span className="bg-[#a13a0f] text-white text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full w-fit mb-3 uppercase">{day.id} ITINERARY</span>
          <h1 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold text-white leading-tight tracking-tight">{day.title}</h1>
          <p className="text-white/80 mt-2 font-medium">{day.subtitle}</p>
        </div>
      </section>

      <section className="space-y-12 px-2 relative">
        {/* Connector Line */}
        <div className="absolute left-8 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-[#a1c9ff] opacity-30"></div>
        
        {day.items.map((item, idx) => (
          <div key={idx} className="relative flex gap-6">
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-sm ${
                item.isHighlight ? 'bg-[#ffdbcf] text-[#a13a0f]' : 'bg-[#f0e1c7] text-[#a13a0f]'
              }`}>
                <span className="material-symbols-outlined">
                  {item.type === 'TRANSPORT' ? 'train' : 
                   item.type === 'FLIGHT' ? 'flight' :
                   item.type === 'SHUTTLE' ? 'directions_car' :
                   item.type === 'FOOD' ? 'restaurant' :
                   item.type === 'ACTIVITY' ? 'explore' :
                   item.type === 'SHOPPING' ? 'shopping_bag' :
                   item.type === 'CAFE' ? 'coffee' :
                   item.type === 'INFO' ? 'info' :
                   item.type === '住宿' ? 'hotel' : 'location_on'}
                </span>
              </div>
            </div>
            <div className="flex-1 pb-10">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-bold text-[#005ea3] tracking-widest uppercase">{item.time}</span>
                {item.type && (
                  <span className="bg-[#f0e1c7] text-[#221b0b] text-[11px] px-2 py-0.5 rounded-md font-bold uppercase">{item.type}</span>
                )}
              </div>
              <div className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 ${item.isHighlight ? 'border-[#a13a0f]' : 'border-[#005ea3]'}`}>
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                  {item.title}
                  {item.koreanName && (
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(item.koreanName!);
                      }}
                      className="bg-[#ebeef5] px-2 py-1 rounded text-[10px] flex items-center gap-1 text-[#404752] active:scale-95 transition-transform hover:bg-[#d1d5db]"
                    >
                      <span className="material-symbols-outlined text-xs">content_copy</span> {item.koreanName}
                    </button>
                  )}
                </h3>
                <p className="text-[#404752] text-sm leading-relaxed mb-4">{item.description}</p>
                
                {item.images && (
                  <div className={`grid ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mb-4`}>
                    {item.images.map((img, i) => (
                      <img key={i} className="rounded-xl h-32 w-full object-cover" src={img} alt="Spot" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                )}

                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="bg-[#f0e1c7] text-[#221b0b] text-[11px] px-2 py-0.5 rounded-full font-bold">{tag}</span>
                    ))}
                  </div>
                )}

                {item.options && (
                  <div className="space-y-3 mt-4">
                    {item.options.map((opt, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-[#f8f9ff] rounded-xl border border-[#c0c7d3]/20">
                        <div>
                          <h4 className="font-bold text-[#181c21] text-sm">{opt.name}</h4>
                          <p className="text-xs text-[#404752]">{opt.desc}</p>
                        </div>
                        <button 
                          onClick={() => navigator.clipboard.writeText(opt.korean)}
                          className="p-2 bg-[#e0e2ea] rounded-full hover:bg-[#a1c9ff] transition-colors"
                        >
                          <span className="material-symbols-outlined text-[#005ea3] text-sm">content_copy</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-20 flex flex-col items-center px-4">
        <button 
          onClick={onBack}
          className="w-full max-w-sm py-4 bg-gradient-to-r from-[#005ea3] to-[#0077cc] text-white rounded-full font-bold shadow-lg shadow-[#005ea3]/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          返回日期選擇
        </button>
        <p className="mt-6 text-[#404752]/50 text-xs font-medium tracking-widest uppercase">Coastal Archivist Guide © 2024</p>
      </footer>
    </div>
  );
}

function GourmetView() {
  const [selectedSpot, setSelectedSpot] = useState<GourmetSpot | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] text-[#005ea3]">釜山在地美食指南</h2>
        {selectedSpot && (
          <button onClick={() => setSelectedSpot(null)} className="text-[#a13a0f] font-bold flex items-center gap-1">
            <span className="material-symbols-outlined">arrow_back</span> 返回
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!selectedSpot ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 gap-6"
          >
            {GOURMET_DATA.map((spot, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedSpot(spot)}
                className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#a13a0f] text-left flex gap-4 hover:bg-[#f0e1c7]/30 transition-colors"
              >
                <img src={spot.image} alt={spot.title} className="w-24 h-24 rounded-xl object-cover shadow-sm" referrerPolicy="no-referrer" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{spot.title}</h3>
                    <span className="text-[10px] bg-[#ffdbcf] text-[#a13a0f] px-2 py-0.5 rounded font-bold">{spot.category}</span>
                  </div>
                  <p className="text-xs text-[#404752] mt-1 font-semibold">{spot.koreanName}</p>
                  <p className="text-sm text-[#404752] mt-2 line-clamp-2">{spot.description}</p>
                </div>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <img src={selectedSpot.image} alt={selectedSpot.title} className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
            <div className="p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#ffdbcf] text-[#a13a0f] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{selectedSpot.category}</span>
                  <span className="text-[#717783] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span> {selectedSpot.location}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#181c21]">{selectedSpot.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-bold text-[#005ea3]">{selectedSpot.koreanName}</p>
                  <button 
                    onClick={() => navigator.clipboard.writeText(selectedSpot.koreanName)}
                    className="p-1.5 bg-[#f1f3fb] rounded-lg hover:bg-[#a1c9ff] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                </div>
              </div>
              <p className="text-[#404752] leading-relaxed text-lg">{selectedSpot.description}</p>
              <button 
                onClick={() => setSelectedSpot(null)}
                className="w-full py-4 bg-[#f1f3fb] text-[#005ea3] rounded-2xl font-bold hover:bg-[#e0e2ea] transition-colors"
              >
                返回列表
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InfoView() {
  const [selectedInfo, setSelectedInfo] = useState<InfoItem | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] text-[#005ea3]">實用旅遊資訊</h2>
        {selectedInfo && (
          <button onClick={() => setSelectedInfo(null)} className="text-[#717783] font-bold flex items-center gap-1">
            <span className="material-symbols-outlined">arrow_back</span> 返回
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!selectedInfo ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 gap-6"
          >
            {INFO_DATA.map((info, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedInfo(info)}
                className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#717783] text-left flex items-center gap-4 hover:bg-[#f1f3fb] transition-colors"
              >
                <div className="w-12 h-12 bg-[#f1f3fb] rounded-full flex items-center justify-center text-[#005ea3]">
                  <span className="material-symbols-outlined">{info.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{info.title}</h3>
                  <p className="text-sm text-[#404752] mt-1">{info.content}</p>
                </div>
                <span className="material-symbols-outlined text-[#717783]">chevron_right</span>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white p-8 rounded-3xl shadow-lg space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#f1f3fb] rounded-2xl flex items-center justify-center text-[#005ea3]">
                <span className="material-symbols-outlined text-3xl">{selectedInfo.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#181c21]">{selectedInfo.title}</h3>
                <p className="text-[#404752] font-medium">{selectedInfo.content}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#717783] uppercase tracking-widest">詳細內容</h4>
              <ul className="space-y-3">
                {selectedInfo.details.map((detail, i) => (
                  <li key={i} className="flex gap-3 text-[#404752] text-sm leading-relaxed">
                    <span className="text-[#005ea3] font-bold">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={() => setSelectedInfo(null)}
              className="w-full py-4 bg-[#f1f3fb] text-[#717783] rounded-2xl font-bold hover:bg-[#e0e2ea] transition-colors"
            >
              返回列表
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
