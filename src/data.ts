export interface DayItinerary {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  items: TimelineItem[];
}

export interface TimelineItem {
  time: string;
  type?: string;
  title: string;
  description: string;
  koreanName?: string;
  images?: string[];
  tags?: string[];
  isHighlight?: boolean;
  options?: { name: string; desc: string; korean: string }[];
}

export const ITINERARY_DATA: Record<string, DayItinerary> = {
  "D1": {
    id: "D1",
    title: "抵達釜山：海港初探",
    subtitle: "3/28 (六) Arrival & Nampo-dong",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDha8lzeH8OlwdKiw1FC5fS4-iqVTAi3YwNyun1r_AdY05eD8O2zpvw3JAzmmK2ifPyh1L2Xn__9G9ScFCC4TVwhMJ3jaIll4JJHiIXnjYEQM7JMEl_-fXfn_jVwrhXE0PST5h65-iNHn_VmGJCzEkmvS7Eq_vwTLzD9ozS95Bv9oa1FHGWMt6GJe0G9XvvW9_KfVgEumwn-s8jE_pyndpUZvvYQYtbUyFF3dfCX5YrKkFOo2oh3G-_WjXfc6xtyWb2u4ac2CbOFmOt",
    description: "開啟釜山之旅，從台中出發，抵達後直奔海雲台享受宵夜。",
    items: [
      {
        time: "11:00",
        title: "台中出發前往桃園機場",
        description: "交通：預約包車接送。目的地：桃園國際機場 (TPE)。備註：檢查護照、網卡/漫遊是否準備妥當。",
        type: "TRANSPORT"
      },
      {
        time: "17:30",
        title: "班機起飛 (大韓航空)",
        description: "航班資訊：Korean Air (KE)。時間：17:30 (TPE) 預計 20:45 抵達 (PUS 金海機場)。入境流程：填寫入境卡 (或 Q-Code)、領取行李、出關。",
        type: "FLIGHT",
        isHighlight: true
      },
      {
        time: "21:40",
        title: "預約接機包車",
        description: "交通：機場直達海雲台飯店。車程：約 45-60 分鐘 (視路況)。目的地：Best Western Hotel Haeundae。",
        type: "TRANSPORT"
      },
      {
        time: "22:50",
        title: "海雲台宵夜",
        description: "推薦：密陽豬肉湯飯、五福豬肉湯飯 或 水邊最高豬肉湯飯。備註：海雲台主街上有許多 24 小時營業的餐廳。",
        type: "FOOD",
        koreanName: "돼지국밥"
      }
    ]
  },
  "D2": {
    id: "D2",
    title: "海雲台海岸與遊艇夕陽",
    subtitle: "3/29 (日) Haeundae & Yacht",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmfIEw9wz1MYcnxU47fMRMOM7kcS6KvNuLDqHZ7sbziB395Oclk97n8HEu9Ao_e9ggoGyesmNPBilnextPkjIa4p_Xfa4GoVZctyMeZ1OXbeyRIQS6U4s4rwXsHg8pRCAqrFRaQFgjvis_GeYcydwyIWa6EAhFraL7ZTYZsZ6m2Y-BHi2u47XfdbQcBMfRjOC-PxMq-pxFxCnbsSpWYDWOXYSNe91bip-GwRObubC2Zo4cjIycH2ikiLcDO51tO6hWZ5yb-prZ7ftp",
    description: "在世界最高星巴克享用早餐，漫步冬柏島，最後搭乘遊艇欣賞廣安大橋夜景。",
    items: [
      {
        time: "10:30",
        title: "早餐：Busan X the SKY 99樓星巴克",
        description: "特色：世界最高星巴克，可俯瞰整片海雲台沙灘。",
        type: "FOOD",
        tags: ["VIEW"]
      },
      {
        time: "12:00",
        title: "冬柏島海岸步道散策",
        description: "交通：搭乘計程車前往冬柏島 APEC 世峰樓。路線：APEC 世峰樓 -> 海岸步道 -> 回到 The Bay 101 一帶。午餐選項：巨大韓牛 (Haeundae Gigantic Hanu)。",
        koreanName: "동백섬"
      },
      {
        time: "14:00",
        title: "海狸團路 (Haeridan-gil)",
        description: "地點：海雲台站後方文青街區。活動：逛街散步、伴手禮採買 (奶油夾心餅乾 Butter Sand)、咖啡廳下午茶休憩。",
        koreanName: "해리단길",
        tags: ["CAFE", "SHOPPING"]
      },
      {
        time: "17:00",
        title: "遊艇夕陽與港景",
        description: "集合地點：The Bay 101 碼頭。活動：搭乘遊艇欣賞夕陽與廣安大橋夜景。參考資訊：三月底夕陽時間約為 18:40。航程時間：約 50-60 分鐘。",
        type: "ACTIVITY",
        isHighlight: true
      },
      {
        time: "19:30",
        title: "晚餐：海雲台烤肉",
        description: "推薦：味贊王鹽烤肉 或 伍班長烤肉。備註：結束遊艇行程後直接於海雲台商圈用餐。",
        type: "FOOD",
        options: [
          { name: "味贊王鹽烤肉", desc: "專業代烤厚切豬肉", korean: "맛찬들왕소금구이" },
          { name: "伍班長烤肉", desc: "傳統炭火烤肉", korean: "오반장" }
        ]
      }
    ]
  },
  "D3": {
    id: "D3",
    title: "斜坡滑車與親友會合",
    subtitle: "3/30 (一) Skyline Luge & Reunion",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxV08gf7b_er3kONtPCYxdXZwfARGzIoiMI8kn5bcLqyQ7FPleFNxvfRmOCpe0CkFayc4O1d1Lox1itOqqihxynH6ycDRQSTcpubwCFt6UwxbGokH6XVDLn0t-4l9Xxhay1JE8cNII3y4ce3fUHSn5Mb7W7nNyYoWf6Q0iemCdQZNf-MasMEtajRpfz6co5VmjT_eQDu6a_4fiyVNOWvqf5pNQ3R9oYUvIkjcmi_W3FGFxz7NkC8tyUnpqB0AOfNYvQ2Tu1mh4Ik--",
    description: "體驗刺激的斜坡滑車，前往廣安里看海，晚上迎接親友抵達。",
    items: [
      {
        time: "10:00",
        title: "飯店出發往機張",
        description: "交通：搭乘計程車前往機張區 (約 25-30 分鐘)。",
        type: "TRANSPORT"
      },
      {
        time: "10:30",
        title: "Skyline Luge 斜坡滑車",
        description: "活動：包含空中吊椅觀景與斜坡滑車下山。建議：購買 4 次券可玩得較充裕。",
        type: "ACTIVITY",
        isHighlight: true
      },
      {
        time: "13:00",
        title: "廣安里海邊",
        description: "交通：搭乘計程車前往。活動：在海邊咖啡廳休憩，觀賞廣安大橋海景。",
        koreanName: "광안리해수욕장"
      },
      {
        time: "18:00",
        title: "晚上：海雲台傳統市場",
        description: "交通：步行 3-5 分鐘。美食推薦：古思來魚板、海鮮蔥餅、辣炒年糕、韓式小吃。",
        type: "FOOD",
        koreanName: "해운대전통시장"
      },
      {
        time: "22:30",
        title: "親友會合 (俞安、亮羽抵達)",
        description: "親友班機：16:40 起飛 -> 19:55 抵達金海機場。預計會合：約 22:30 抵達海雲台飯店大廳。",
        type: "INFO"
      },
      {
        time: "23:00",
        title: "深夜宵夜時光",
        description: "選項 1：一起前往主街吃豬肉湯飯。選項 2：請飯店代叫炸雞外送 (推薦：橋村 Kyochon、60th 或 Puradak Chicken)。",
        type: "FOOD"
      }
    ]
  },
  "D4": {
    id: "D4",
    title: "新世界百貨與五星汗蒸幕",
    subtitle: "3/31 (二) Shinsegae & Spa Land",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiYTBWoekzyUsObaV6OYqPUGLSUuuD4yWE5MvSgNKvXKn6mBcjX35zqfsY500ITVth92USZgifPpnUS-QLQXysVPiwRr1Xd2rqrMeFGmLhGYekPZX9bP12CNKUec5mL7Eq6HqnV9GlnNQgSnWgRuO6oebVnYE5qkmmskcd_QyPzVNcqzlzGWSPTGC4DsMyAxcVni2YiW0v0JWlhDqonwWWcUix2xlv4SuCL_f2Aq2sy1bnidoM-eGzVo6UXfWA00XvKc25I1H_FG8",
    description: "參觀世界最大百貨公司，享受頂級汗蒸幕放鬆身心。",
    items: [
      {
        time: "10:00",
        title: "飯店出發往 Centum City",
        description: "交通：搭乘計程車或地鐵 2 號線至 Centum City 站。",
        type: "TRANSPORT"
      },
      {
        time: "10:30",
        title: "釜山電影殿堂",
        description: "活動：參觀獨特建築頂棚與攝影留念。",
        koreanName: "영화의전당"
      },
      {
        time: "11:30",
        title: "新世界百貨 (Shinsegae Centum City)",
        description: "特稱：金氏世界紀錄最大百貨公司。午餐：百貨內美食街 (選擇極豐富)。",
        type: "SHOPPING",
        koreanName: "신세계백화점 센텀시티점"
      },
      {
        time: "14:30",
        title: "Spa Land 汗蒸幕",
        description: "地點：百貨 1 樓。體驗：包含多種溫度的汗蒸房、足浴、冷熱池。備註：入場時限通常為 4 小時。",
        type: "ACTIVITY",
        isHighlight: true,
        koreanName: "스파랜드"
      },
      {
        time: "18:00",
        title: "晚上回飯店後彈性行程",
        description: "晚餐/活動選項：逛海雲台傳統市場、味贊王鹽烤肉、伍班長烤肉。視當天體力彈性決定。",
        type: "FOOD"
      }
    ]
  },
  "D5": {
    id: "D5",
    title: "膠囊列車與移動至南浦洞",
    subtitle: "4/1 (三) Sky Capsule & Nampo",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDha8lzeH8OlwdKiw1FC5fS4-iqVTAi3YwNyun1r_AdY05eD8O2zpvw3JAzmmK2ifPyh1L2Xn__9G9ScFCC4TVwhMJ3jaIll4JJHiIXnjYEQM7JMEl_-fXfn_jVwrhXE0PST5h65-iNHn_VmGJCzEkmvS7Eq_vwTLzD9ozS95Bv9oa1FHGWMt6GJe0G9XvvW9_KfVgEumwn-s8jE_pyndpUZvvYQYtbUyFF3dfCX5YrKkFOo2oh3G-_WjXfc6xtyWb2u4ac2CbOFmOt",
    description: "搭乘超人氣天空膠囊列車，下午移動至南浦洞商圈。",
    items: [
      {
        time: "10:30",
        title: "辦理退房與行李寄放",
        description: "行李寄放飯店櫃台。",
        type: "INFO"
      },
      {
        time: "11:00",
        title: "前往尾浦站 (Mipo Station)",
        description: "交通：建議搭乘計程車 (約 5-8 分鐘)。",
        type: "TRANSPORT"
      },
      {
        time: "11:30",
        title: "海岸天空膠囊列車 (Sky Capsule)",
        description: "路線：尾浦站 往 青沙浦站。景色：單程約 30 分鐘，沿著海岸慢速行駛。",
        type: "ACTIVITY",
        isHighlight: true,
        koreanName: "해운대 블루라인파크 스카이캡슐"
      },
      {
        time: "12:00",
        title: "青沙浦 (Cheongsapo) 散策",
        description: "景點：青沙浦平交道 (釜山小鎌倉)、紅白燈塔。下午茶：Diart Coffee (土耳其蜂蜜奶油麵包 Kaymak)。",
        koreanName: "청사포",
        tags: ["VIEW", "CAFE"]
      },
      {
        time: "15:30",
        title: "海岸列車 (Beach Train)",
        description: "路線：青沙浦站 返回 尾浦站。",
        type: "TRANSPORT"
      },
      {
        time: "17:30",
        title: "移動至南浦洞",
        description: "交通：預約包車市區接送。目的地：南浦洞 GnB Hotel。",
        type: "TRANSPORT"
      },
      {
        time: "18:30",
        title: "南浦洞商圈晚餐",
        description: "逛街順序：BIFF 廣場 (小吃) -> 南浦洞商圈 -> 國際市場 / 富平罐頭市場 (夜市)。",
        type: "FOOD",
        koreanName: "남浦동"
      }
    ]
  },
  "D6": {
    id: "D6",
    title: "釜山精華包車一日遊",
    subtitle: "4/2 (四) Busan Highlights Tour",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQKxgBa4RQI8gGllUkHubwfaiGGFbO1YiKY8EqLsNp4eXoceMjiwb10nbWxP30mtFJxBmB5qO5lKKeMqzw7q8Iui67hljwwlc8OERneE5Zt2TIUF0ZiEn7Yw7yz5ZVKhFlisnqUZT6p_0QIdlP6cSEErGer0YJkkanQKH7kjkmbbeT_GN_Ccqz9Y5NDz7wnvBeq9zmVB3s44dTyJXE1ahqynzwiPTQDhhgvsCff1KVu6x8L7GDBqFIRhccfMwvFQYkWkhfPVVNvNJY",
    description: "包車深度遊覽釜山經典景點，從甘川洞到松島纜車，最後欣賞光影藝術。",
    items: [
      {
        time: "09:30",
        title: "飯店大廳集合 (包車出發)",
        description: "與包車司機會合，展開釜山精華景點一日遊。",
        type: "TRANSPORT"
      },
      {
        time: "10:00",
        title: "甘川洞文化村",
        description: "提示：抵達後先預約「手翻書」製作。停留：約 1.5 小時。",
        koreanName: "감천문화마을",
        isHighlight: true
      },
      {
        time: "11:50",
        title: "松島天空步道",
        description: "漫步在海上步道，欣賞松島海景。停留：約 30 分鐘。",
        koreanName: "송도구름산책로"
      },
      {
        time: "12:20",
        title: "松島海上纜車 (Songdo Cable Car)",
        description: "建議：搭乘水晶車廂 (地板透明)，購買來回票。",
        koreanName: "송도해상케이블카"
      },
      {
        time: "13:30",
        title: "午餐：三進魚板 或 松島周邊海鮮",
        description: "品嚐道地的三進魚板或在松島享用新鮮海產。",
        type: "FOOD"
      },
      {
        time: "14:50",
        title: "白淺灘文化村",
        description: "備註：影島最美海岸村落，有許多特色海景咖啡廳。",
        koreanName: "흰여울문화마을"
      },
      {
        time: "16:20",
        title: "THRILL ON THE MUG 咖啡廳",
        description: "活動：可在此體驗高空滑索 (視天候與個人體力)。",
        type: "CAFE"
      },
      {
        time: "18:00",
        title: "Arte Museum 釜山",
        description: "體驗：最新開幕的沉浸式光影藝術館。",
        type: "ACTIVITY",
        isHighlight: true
      },
      {
        time: "20:30",
        title: "晚餐：明星一隻雞",
        description: "享用美味的一隻雞料理，包車結束後自由活動。",
        type: "FOOD"
      }
    ]
  },
  "D7": {
    id: "D7",
    title: "西面商圈深度逛街",
    subtitle: "4/3 (五) Seomyeon Shopping",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQKxgBa4RQI8gGllUkHubwfaiGGFbO1YiKY8EqLsNp4eXoceMjiwb10nbWxP30mtFJxBmB5qO5lKKeMqzw7q8Iui67hljwwlc8OERneE5Zt2TIUF0ZiEn7Yw7yz5ZVKhFlisnqUZT6p_0QIdlP6cSEErGer0YJkkanQKH7kjkmbbeT_GN_Ccqz9Y5NDz7wnvBeq9zmVB3s44dTyJXE1ahqynzwiPTQDhhgvsCff1KVu6x8L7GDBqFIRhccfMwvFQYkWkhfPVVNvNJY",
    description: "在釜山的中心地帶盡情購物，探索文青咖啡街與在地美食。",
    items: [
      {
        time: "10:30",
        title: "抵達西面 (Seomyeon)",
        description: "交通：從南浦洞搭乘計程車 (約 30-40 分鐘) 或 地鐵 1 號線。午餐：西面商圈 / 西面地下街美食。",
        type: "TRANSPORT"
      },
      {
        time: "10:30",
        title: "西面商圈逛街",
        description: "地點：西面地下街、周邊百貨 (NC、樂天)。逛街重點：西面地下街、Object 西面店、Sameday、Matin Kim、Mardi Mercredi。",
        type: "SHOPPING",
        isHighlight: true,
        koreanName: "서면"
      },
      {
        time: "17:30",
        title: "田浦咖啡街 (Jeonpo Cafe Street)",
        description: "交通：從西面商圈步行約 10-15 分鐘。活動：探索特色咖啡廳與文創小店。",
        koreanName: "전포카페거리",
        tags: ["CAFE", "TRENDY"]
      },
      {
        time: "19:00",
        title: "晚餐：西面餐廳",
        description: "餐廳選項：83 烤肉、烤肉的男子、螞蟻家辣炒章魚、釜山烤肋排、豬肉湯飯。",
        type: "FOOD",
        options: [
          { name: "83 烤肉", desc: "頂級韓牛與在地燒烤", korean: "83해치" },
          { name: "螞蟻家", desc: "章魚蝦子肥腸鍋", korean: "개미집" }
        ]
      },
      {
        time: "21:00",
        title: "宵夜外送/外帶",
        description: "重點：記得買「百年鐵鍋炸全雞」。回程：搭乘計程車回 GnB Hotel。",
        type: "FOOD",
        koreanName: "거인통닭"
      }
    ]
  },
  "D8": {
    id: "D8",
    title: "最後採買與回家",
    subtitle: "4/4 (六) Last Shopping & Departure",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiYTBWoekzyUsObaV6OYqPUGLSUuuD4yWE5MvSgNKvXKn6mBcjX35zqfsY500ITVth92USZgifPpnUS-QLQXysVPiwRr1Xd2rqrMeFGmLhGYekPZX9bP12CNKUec5mL7Eq6HqnV9GlnNQgSnWgRuO6oebVnYE5qkmmskcd_QyPzVNcqzlzGWSPTGC4DsMyAxcVni2YiW0v0JWlhDqonwWWcUix2xlv4SuCL_f2Aq2sy1bnidoM-eGzVo6UXfWA00XvKc25I1H_FG8",
    description: "最後的採購與告別，帶著滿滿的回憶返回台中。",
    items: [
      {
        time: "11:00",
        title: "辦理退房與行李寄放",
        description: "行李寄放飯店櫃台。",
        type: "INFO"
      },
      {
        time: "11:30",
        title: "南浦洞最後採買",
        description: "地點：富平市場、國際市場。重點：韓式調味料、海苔、補齊所有未買到的伴手禮。",
        type: "SHOPPING",
        koreanName: "국제시장"
      },
      {
        time: "15:20",
        title: "前往金海機場",
        description: "交通：建議預約包車或搭乘計程車 (預留塞車時間)。",
        type: "TRANSPORT"
      },
      {
        time: "16:30",
        title: "機場手續",
        description: "活動：辦理退稅、領取機場免稅品。",
        type: "INFO"
      },
      {
        time: "20:00",
        title: "班機起飛 (大韓航空)",
        description: "預計 21:40 抵達桃園國際機場。22:30 搭乘預約包車返回台中。",
        type: "FLIGHT",
        isHighlight: true
      }
    ]
  }
};

export interface GourmetSpot {
  title: string;
  koreanName: string;
  description: string;
  image: string;
  category: string;
  location: string;
}

export const GOURMET_DATA: GourmetSpot[] = [
  {
    title: "味贊王鹽烤肉",
    koreanName: "맛찬들왕소금구이",
    description: "釜山最知名的厚切豬五花店，專業店員代烤，肉質鮮嫩多汁。建議搭配醃漬菜葉與芥末食用。",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQKxgBa4RQI8gGllUkHubwfaiGGFbO1YiKY8EqLsNp4eXoceMjiwb10nbWxP30mtFJxBmB5qO5lKKeMqzw7q8Iui67hljwwlc8OERneE5Zt2TIUF0ZiEn7Yw7yz5ZVKhFlisnqUZT6p_0QIdlP6cSEErGer0YJkkanQKH7kjkmbbeT_GN_Ccqz9Y5NDz7wnvBeq9zmVB3s44dTyJXE1ahqynzwiPTQDhhgvsCff1KVu6x8L7GDBqFIRhccfMwvFQYkWkhfPVVNvNJY",
    category: "韓式烤肉",
    location: "海雲台 / 西面"
  },
  {
    title: "密陽豬肉湯飯",
    koreanName: "밀양돼지국밥",
    description: "海雲台 24 小時營業的名店，湯頭濃郁不腥，是釜山最具代表性的靈魂美食。記得加入蝦醬與韭菜調味。",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmfIEw9wz1MYcnxU47fMRMOM7kcS6KvNuLDqHZ7sbziB395Oclk97n8HEu9Ao_e9ggoGyesmNPBilnextPkjIa4p_Xfa4GoVZctyMeZ1OXbeyRIQS6U4s4rwXsHg8pRCAqrFRaQFgjvis_GeYcydwyIWa6EAhFraL7ZTYZsZ6m2Y-BHi2u47XfdbQcBMfRjOC-PxMq-pxFxCnbsSpWYDWOXYSNe91bip-GwRObubC2Zo4cjIycH2ikiLcDO51tO6hWZ5yb-prZ7ftp",
    category: "在地小吃",
    location: "海雲台主街"
  },
  {
    title: "橋村炸雞",
    koreanName: "교촌치킨",
    description: "韓國炸雞界的霸主，招牌蜂蜜口味與大蒜醬油口味是必點。外皮酥脆，肉質鮮嫩，配上醃蘿蔔簡直完美。",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxV08gf7b_er3kONtPCYxdXZwfARGzIoiMI8kn5bcLqyQ7FPleFNxvfRmOCpe0CkFayc4O1d1Lox1itOqqihxynH6ycDRQSTcpubwCFt6UwxbGokH6XVDLn0t-4l9Xxhay1JE8cNII3y4ce3fUHSn5Mb7W7nNyYoWf6Q0iemCdQZNf-MasMEtajRpfz6co5VmjT_eQDu6a_4fiyVNOWvqf5pNQ3R9oYUvIkjcmi_W3FGFxz7NkC8tyUnpqB0AOfNYvQ2Tu1mh4Ik--",
    category: "韓式炸雞",
    location: "全釜山連鎖"
  },
  {
    title: "古思來魚板",
    koreanName: "고래사어묵",
    description: "釜山代表性美食，多種口味的現做魚板，也有提供真空包裝伴手禮。推薦起司口味與年糕口味。",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmfIEw9wz1MYcnxU47fMRMOM7kcS6KvNuLDqHZ7sbziB395Oclk97n8HEu9Ao_e9ggoGyesmNPBilnextPkjIa4p_Xfa4GoVZctyMeZ1OXbeyRIQS6U4s4rwXsHg8pRCAqrFRaQFgjvis_GeYcydwyIWa6EAhFraL7ZTYZsZ6m2Y-BHi2u47XfdbQcBMfRjOC-PxMq-pxFxCnbsSpWYDWOXYSNe91bip-GwRObubC2Zo4cjIycH2ikiLcDO51tO6hWZ5yb-prZ7ftp",
    category: "在地小吃",
    location: "海雲台市場"
  },
  {
    title: "螞蟻家",
    koreanName: "개미집",
    description: "必吃的章魚蝦子肥腸鍋 (Nak-Gop-Sae)，香辣下飯，釜山必吃名店。建議點小辣即可，配飯吃非常過癮。",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDg9p0hfS8gAJOIUNiCAJAN39CzH2bB0O4Df8Gmvzy_BC_uG50vIHIPGDYSIcZbUwxPRfygM0HnIEMdBqTmF5lB08ugdowApQGNgKSpFJ8hjOa-6fDJ4ehi1HMuIHT5aZtvSx1dEAy4orNsSDNY2f5O0BiYocFKhDfppkgtCnuGLEdTQHh45VNuBwGI_njjuV9MRR-99aacu7eULwXceOGSem9H3Jx0ye9tIhOFjpf7KrJmh-SmF8HKZxGCdhilTPYOOoL3eKtvWyi",
    category: "鍋物",
    location: "西面 / 南浦洞"
  }
];

export interface InfoItem {
  title: string;
  icon: string;
  content: string;
  details: string[];
}

export const INFO_DATA: InfoItem[] = [
  {
    title: "住宿總覽",
    icon: "hotel",
    content: "本次行程安排兩間飯店，分別位於海雲台與南浦洞。",
    details: [
      "3/28 - 4/1 (4晚)：海雲台 Best Western Hotel (海雲台站步行約 5 分鐘)",
      "4/1 - 4/4 (3晚)：南浦洞 GnB Hotel (富平市場對面)"
    ]
  },
  {
    title: "換匯資訊",
    icon: "currency_exchange",
    content: "建議準備少量韓元現金，其餘使用 WOWPASS 或信用卡。",
    details: [
      "WOWPASS: 可在機場或地鐵站機台直接用台幣換匯並儲值。",
      "Money Box: 南浦洞、海雲台均有分店，匯率通常優於銀行。",
      "備註: 許多小攤位仍僅收現金，建議隨身攜帶 5-10 萬韓元。"
    ]
  },
  {
    title: "交通攻略",
    icon: "directions_bus",
    content: "釜山交通以地鐵與公車為主，建議使用 WOWPASS 或 T-money。",
    details: [
      "WOWPASS: 結合換匯、儲值、付款、交通卡功能，非常方便。",
      "地鐵: 共有4條主要路線，覆蓋大部分景點。",
      "公車: 適合前往影島、甘川洞等坡度較大的地區。",
      "計程車: 釜山計程車費率相對合理，三人以上建議搭乘。"
    ]
  },
  {
    title: "網卡與通訊",
    icon: "language",
    content: "建議事先準備好 eSIM 或實體 SIM 卡。",
    details: [
      "eSIM: 無須換卡，隨插即用，適合支援的手機型號。",
      "漫遊: 台灣各大電信均有提供韓國漫遊方案，穩定度高。",
      "備註: 記得確認是否已開啟國際漫遊功能。"
    ]
  },
  {
    title: "退稅說明",
    icon: "receipt_long",
    content: "韓國購物滿額可享有退稅優惠。",
    details: [
      "額度: 單筆消費滿 30,000 KRW 即可申請。",
      "現場退稅: 部分百貨或商店可直接扣除稅額。",
      "機場退稅: 需保留退稅單，在機場機台掃描後領取現金或退回信用卡。"
    ]
  }
];
