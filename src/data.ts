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
    title: "抵達釜山：夜之翼",
    subtitle: "The journey begins under the coastal stars.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Uqh3PARDFBtvWAGv9RZYmPEg-q4ZeTSLqHFcNMI0WVDNrNgYg9jT5Er-4sb3qevHnWqnoZhlj17Ii6D6bO8QnCNWy0ZUc_doSeW4f0uOHGJTZcT27HewzSdVQPrCSrMRLurEbQg69n2eOhG4d2WjQMz1CgWlu8DNaMHt5eBzE5g_BVMgSKmU4tlLpG_RshDuKwYtUOluPvdEHRiEcvcm_XoDBez0yp0v9pcV3cgPovqqSSsybKdDGeckBqdJB257YSCzZcAaEHX_",
    description: "開啟釜山之旅的第一章，從深夜的抵達開始感受這座城市的寧靜與美味。",
    items: [
      {
        time: "11:00",
        type: "TRANSPORT",
        title: "臺中 → 桃園國際機場 (TPE)",
        description: "搭乘高鐵或接駁專車前往桃園，開啟旅程序章。"
      },
      {
        time: "17:30",
        type: "FLIGHT",
        title: "大韓航空 KE 班機起飛",
        description: "飛往釜山金海國際機場 (PUS)，享受機上韓式服務。",
        tags: ["Terminal 1 / Door 4"]
      },
      {
        time: "21:40",
        type: "SHUTTLE",
        title: "包車前往 海雲台 (Haeundae)",
        description: "深夜包車直達海邊飯店，省去轉乘奔波。",
        koreanName: "해운대"
      },
      {
        time: "22:50",
        type: "LATE NIGHT SNACK",
        title: "深夜暖心：豬肉湯飯",
        description: "釜山的代表美味，熱騰騰的濃郁湯頭洗去旅途疲憊。",
        koreanName: "돼지국밥",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBQKxgBa4RQI8gGllUkHubwfaiGGFbO1YiKY8EqLsNp4eXoceMjiwb10nbWxP30mtFJxBmB5qO5lKKeMqzw7q8Iui67hljwwlc8OERneE5Zt2TIUF0ZiEn7Yw7yz5ZVKhFlisnqUZT6p_0QIdlP6cSEErGer0YJkkanQKH7kjkmbbeT_GN_Ccqz9Y5NDz7wnvBeq9zmVB3s44dTyJXE1ahqynzwiPTQDhhgvsCff1KVu6x8L7GDBqFIRhccfMwvFQYkWkhfPVVNvNJY"]
      }
    ]
  },
  "D2": {
    id: "D2",
    title: "海雲台的藍色時分",
    subtitle: "從全球最高的星巴克出發，漫步冬柏島，最後在遊艇上擁抱海風與夕陽。",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHuNKhQIuSo76CDzelA20_hAW0qgLLNhKV224Dxntf5yLpbWtadp1z_cc6vnUbB8yJyPThY4NEyhTd4LD-OLMhYyck8XAc8K0OO8bPEJqPgQ0HjEXuKg3RxAojpPvfqrJYQarvhAWH-2uMLwVSozZ9Adz7pBdo-L3kGybNGelMdPWXTi0tsvfnHPiafQ8RhCIBiLk-YQDYngC-Mf5i201PxZsxMrFzdGP2Jef8puWMR501cbHCWAUgwirWOhJ9gswHAaCdJfed41WC",
    description: "享受海雲台的絕美海景與奢華體驗。",
    items: [
      {
        time: "10:30",
        title: "海雲台 X the SKY Starbucks",
        description: "位於 99 樓，全球最高的星巴克。一邊品啜咖啡，一邊俯瞰海雲台彎月形海岸線的絕美景致。",
        koreanName: "해운대 엑스더스카이",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDd9eTbZJmWPymAVZzObRV9OziluXhDef2BmApTPA3NydTABh7gn4RULuHeiYDbz5jxkAVOkS6i5Q3H4aHV_CirKf3cFnmat46EnjqgdlESyJdQk8nVgFZyum69MlhBgRpboY2TmezakwQM-IJJLsJy96yCsu19VIFCEC5X29GCUdJY1jRb-S1cKVW-Cm8wTGZE7PlglLrk8nkTbRtUeXp3ENBe7FtDasTYPkPauWoS8Eczkzq_KZXRbDnwDRX0s46SrlWDH4WDSRAs"]
      },
      {
        time: "12:00",
        title: "冬柏島海岸散步道",
        description: "沿著棧道漫步，經過著名的美人魚像與燈塔。這裡能拍到 Gwangandaegyo 廣安大橋的最佳角度。",
        images: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAv8INp1aPhOXdFfSH9LkgcAbw5jui8ZlnSZm-3dXc53aBvutf6p4pNxLRqEMMSZnvH_QI7YFtEciF1Q3dK_r6acTJ8DFbgOm9V_7COt6hLNiknQQEmYdnlA_kj8_1G6o2t4E5RXFeCvzGWjBNv4G9ZSmkEnYQiWXnLExDVDHU9hT7zffYBvGCIMNgIMpUyx4M2HagZfpcd4_K_OQmPStORvyBE7beDpV9-Cun_ADpQ8WcKkkyJf5JHc18m6ji34s3CVv445tnkxyXe",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCkrlqZYJ9ccl7jSJ7j6yevldd_8_vU5wyOZ9fjW2oni_pDTB3mWOvgnFXEkXl7IYi_zflBhHhaWdI-lvpr6JlhaV2twlsS0CvVtApPbk-rAM8KbE9nPCEODty3xPkFuFE0iuxRH4xcoO7vvNoKqFr-XKQg9DXRNYjwt1Zuq-RPUsFh3FQpCOF-Gg4ZiZ57UKMLRrEk4Mc_6VaAhocfOBDnNHswePTYHc4qpSXsn-h554eoKOxXlTSOUnolgbHvO8VXJ49Rfn8TKq0Y"
        ]
      },
      {
        time: "14:00",
        title: "海理團路 (Haeridan-gil) 文青街區",
        description: "由舊鐵道宿舍改建的文青聚落，充滿個性的獨立書店、藝廊與手作工作室。",
        koreanName: "해리단길",
        tags: ["選物店", "下午茶"]
      },
      {
        time: "17:00",
        title: "Sunset Yacht Experience 遊艇夕陽巡航",
        description: "包含香檳、點心，以及專業的夕陽航拍服務。航行時間約 60 分鐘。",
        isHighlight: true,
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBykH1_qDQitstYWAh3H6URWpHDb-N775KvhAnvnTZUNFKqFI6jPe7tVyocACTTFMzXUz9aH0ZLyXhQekycpqWxeROmWQfq0Y2uYxNwyJ44dajEe94n5M9syrcTsQLN_bzftbcQKzmIPpyh6XzsLWIs98zaITYE4vtIsuSI91YVnTuiJtRUAuy-xU1Kckh3dos-VjmVP5PQNyv1j73NWrOTs7XlL-wC0bUCraoK7leOiMLsO6pUTwu57US7YT1FwtMFKvF4VwXTVOom"]
      },
      {
        time: "19:30",
        title: "釜山必吃 BBQ 晚宴",
        description: "品嚐釜山名店，享受炭火香氣與美味肉汁。",
        options: [
          { name: "味贊王鹽烤肉", desc: "厚切豬五花極品，專業店員代烤。", korean: "맛찬들왕소금구이" },
          { name: "伍班長烤肉", desc: "海雲台名店，炭火香氣濃厚。", korean: "오반장" }
        ]
      }
    ]
  },
  "D3": {
    id: "D3",
    title: "速度與海：廣安里之約",
    subtitle: "體驗速度快感與廣安里的浪漫氛圍。",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2wc0B1kENxJhKn84TnBaMWaGFmAZaUS2q_-UJLZqq3jpp_DeQwLoXXoKkfxdPqVQJshJMo5h9Kep-iV_gy5rl1M5ey1Xa8g2csq8Ov-byePXMojiQ_QCOIbKmAfyN-QqBF1RRLCTPmS3qgusnRfEXwynUMcEfKeZb9OLPHVZUiek99pAzde3TfwNWg6VwWmTP3jlujAadVWuwOW5DGiSXk_w-dqzfsw-6juqFcQVm3TxLg9RYodd4KfhfqVW5Yiddk2K-X-sLAqpi",
    description: "從刺激的斜坡滑車到悠閒的海邊咖啡廳。",
    items: [
      {
        time: "10:30",
        type: "景點",
        title: "Skyline Luge 釜山",
        description: "體驗奧西利亞站旁的斜坡滑車，俯瞰機張郡壯闊的海景，感受速度與海風的交織。",
        koreanName: "스카이라인 루지 부산"
      },
      {
        time: "13:00",
        type: "美食",
        title: "廣安里海邊咖啡廳",
        description: "挑選一家面對廣安大橋的選物店咖啡廳，在窗邊享受午後的慢時光。",
        images: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDmfIEw9wz1MYcnxU47fMRMOM7kcS6KvNuLDqHZ7sbziB395Oclk97n8HEu9Ao_e9ggoGyesmNPBilnextPkjIa4p_Xfa4GoVZctyMeZ1OXbeyRIQS6U4s4rwXsHg8pRCAqrFRaQFgjvis_GeYcydwyIWa6EAhFraL7ZTYZsZ6m2Y-BHi2u47XfdbQcBMfRjOC-PxMq-pxFxCnbsSpWYDWOXYSNe91bip-GwRObubC2Zo4cjIycH2ikiLcDO51tO6hWZ5yb-prZ7ftp",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuApce_6Jk57R1WKBVDg2aR_iQEP1HJ244lttAJuwmcXmG0bsOzTcfnAt3SwuU8de1681iLDH3Umc5ewrZZMLhdbWa7huwqMI5BwEQOAe5U2wxiXJPGsWo4dtb6VgAumaP3EhE5ttOw-IR_u2osGgY0B_fmNkoAtXY-nSii_kD1Vdl7nVfJ-HFr0BLXxjwhG48pRfL2o7GnvnOzY6Wd-kgvTkc-C7-FhCxAsXxboSfnBVOk9eIVgzIIlc3Hk0Fn44WS_IcS4dyV0bW1i"
        ]
      },
      {
        time: "18:00",
        type: "購物",
        title: "海雲台市場：古思來魚板",
        description: "必嚐釜山最具代表性的魚板店，多樣口味令人驚艷。",
        koreanName: "고래사어묵 해運대점"
      },
      {
        time: "22:30",
        type: "聚會",
        title: "深夜炸雞宵夜派對",
        description: "與朋友們會合後，展開韓式炸雞三選一爭霸。",
        tags: ["橋村 (Kyochon)", "60th (60계치킨)", "Puradak (푸라닭)"]
      }
    ]
  },
  "D4": {
    id: "D4",
    title: "水療與極致購物之旅",
    subtitle: "Centum City & Haeundae District",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF3Vsk9SV3iGgnzMKoA0-Kh7B6rI83MGuZV6yCxCK0NQCi5fqKhLRK3NTHxNKvAe3E2k5lFeNGWHDQizOrFc7v7z5tZOu8oNPxDxgiz4Ui4Dy8HpvcBAOFw5dtqIab_gkbCcQ0yECOSTE0clgvR8cXpzJtpQeNbkJSo75UaJJC0VwxLG2KOjtGJmhl_0a0udMT7mInQcSQ1UHxcghwvDzgoINk7rvWLPRFToA_F5qgfHUm05lwxtNIovWvChwMVum67wC02dTVoBsL",
    description: "體驗全球最大百貨與頂級汗蒸幕。",
    items: [
      {
        time: "10:30 AM",
        title: "電影殿堂 Cinema Center",
        description: "釜山國際電影節的主會場，欣賞其榮獲金氏世界紀錄的巨大懸臂屋頂結構。",
        koreanName: "영화의전당",
        images: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxV08gf7b_er3kONtPCYxdXZwfARGzIoiMI8kn5bcLqyQ7FPleFNxvfRmOCpe0CkFayc4O1d1Lox1itOqqihxynH6ycDRQSTcpubwCFt6UwxbGokH6XVDLn0t-4l9Xxhay1JE8cNII3y4ce3fUHSn5Mb7W7nNyYoWf6Q0iemCdQZNf-MasMEtajRpfz6co5VmjT_eQDu6a_4fiyVNOWvqf5pNQ3R9oYUvIkjcmi_W3FGFxz7NkC8tyUnpqB0AOfNYvQ2Tu1mh4Ik--",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCb0PDpVCouQ-Sy-z2SyiWMFG7IRDGET1j0PKjOTT547R7vBx9BOPrW9OlHhMXepHXwEpmJc9TyMn5jdYdCKmi8P9qz767sG1F3Ox-0qxxa0ojYwtFbl-XiT3QpheWc1fZYpIUAKWvES10NMEYwKZvcAKyFmZifpKON8OBzpj1ryyY8zDhXGasL6bcjVJGDiJ6FyTEqoK4oLT1rIp5QjF2VP9tt0spEvFa4JdUZxHFoDIG_b5K52TtD_HPrjkMReKgB0-V8xO9mV2VA"
        ]
      },
      {
        time: "11:30 AM",
        title: "新世界百貨 Centum City",
        description: "全球最大規模的百貨公司，結合了購物、娛樂、滑冰場與藝廊。",
        koreanName: "신세계백화점",
        tags: ["#全球最大", "#免稅購物", "#美食街"]
      },
      {
        time: "02:30 PM",
        title: "Spa Land Centum City",
        description: "釜山最頂級的汗蒸幕體驗，擁有22個溫泉池與13種不同主題的汗蒸房。",
        koreanName: "스파랜드",
        isHighlight: true,
        tags: ["4小時停留"]
      },
      {
        time: "06:00 PM",
        title: "海雲台市場 & 韓式烤肉",
        description: "漫步海雲台傳統市場，尋找最具在地風味的烤韓牛或烤五花肉。",
        koreanName: "해운대시장",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDmOIa_9bagbfQ1vHF8BN8jFnRvCF1lWshNTke4eU0kqTQ6uvHgc4DzSVd4uypcEyVj4u88WlOf9_Nv6WZtUREQNeSPmQ27-Dy4RtQRvEJBWAW6M39EmjfSu4SmuKl8vKlf_cvC2dho38KmrdRajQ79ikmd1KhQGRoHgetyJLl6Uq9QkiyqkwGE1g1ru2_5V0X7gIq0tYQseCuo4pinv0OVsSdxQhmCkX_3FJnKyDGpQT966RmW3EdDwr0GDD4kQeD3BBEb77kCz8Rt"]
      }
    ]
  },
  "D5": {
    id: "D5",
    title: "天空膠囊與南浦洞漫遊",
    subtitle: "海岸列車與傳統市場的感性對話",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdazwxePi_iv6i9GNMpR9qmhRN9RO4TaiMY8WFvsU2OxWt9WNRBF8U5urcK7PYA8rZHfwzd7toDMURhd0gHYtTwM0ubWHeY0tToiIXIBtvpLpSB7tf78iFg30BwGsJbn3bm0DBEPVhBfJ0wVRc9PKpIooRvWfiIhRTh6h7-aliiNsECcZqITNd7js5gntm133-_jRbx4qpqvoZfWXenTbnARVnpgVNEy2RE1t0mljoOzpPpTlMt0wWHY3yLQlRDc0-rHW3W0LG2qDo",
    description: "搭乘可愛的天空膠囊小火車，並前往南浦洞品嚐在地美食。",
    items: [
      {
        time: "11:30",
        type: "景點",
        title: "海雲台天空膠囊 (尾浦 ➔ 青沙浦)",
        description: "搭乘可愛的復古彩色小火車，在高空軌道上近距離俯瞰釜山絕美海岸線。",
        koreanName: "해운대 스카이캡슐"
      },
      {
        time: "12:00",
        title: "青沙浦散策 (紅白燈塔)",
        description: "散步至著名的雙子燈塔，感受漁村與現代鐵道的交織美景。",
        koreanName: "청사포",
        tags: ["拍照點", "海風"],
        images: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAXIb_W5TrO9fuL92bC8CFB67RiV6EtezgtUqCgtIOpH4bt-LsL4F5MiW-4vAKYVqZ63oSy_MsMec47GIVKezpx4PNndGnUd7Bppd5AzREnAvXIn1nOWepzlj0D86PNqKYC1fQw8yNOiZxz35nSZgXikzAexUfIgigL-a6VZwBh4V3tBWqyMqlR9ohbT-Wq0-OwZ0ARRumygZ8CFxVjoMtMW0yOgEwmH64t2AQwkznKwrRwtxglbSZLAmsYC1Ear3PvoNQJ6OTq88Yn",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDg4_6Stg_zbC-RO7lnCQCpL7D8xPP3-WD8eY3Xrfj9k-lfA1a_HcG-7iqFm0by7BNSDxt4KSG62y_tBc1TR2eN-UHIoXO4J2DdrW3p_nGGJkh-Zzm21gF01MomXRuQtLqh-f8tixSFmj4img0gBaj3E9tRRK3cioKb55eMQHGmff04damaeGAexOAc7HFpS6SL0YGga5uqMeYfZmLeebvHuyqTfDxuzaFpUdN5oWA-kV3f4-25QsniRVUOGwwaa-YWBdBqiarcdNCR"
        ]
      },
      {
        time: "15:30",
        title: "海岸列車回程",
        description: "搭乘海岸列車 (Beach Train) 返回尾浦，體驗不同於膠囊小火車的寬廣視角。"
      },
      {
        time: "17:30",
        type: "住宿",
        title: "GnB Hotel Nampo 入住",
        description: "轉移至熱鬧的南浦洞區，方便接下來的夜晚行程與購物。",
        koreanName: "GnB 호텔 남포"
      },
      {
        time: "18:30",
        type: "美食與購物",
        title: "南浦洞 / BIFF 廣場 / 國際市場",
        description: "沉浸在釜山最豐富的在地市集中。必吃糖餅、辣炒年糕、拌粉條。",
        tags: ["BIFF 광장", "국제시장"]
      }
    ]
  },
  "D6": {
    id: "D6",
    title: "包車一日遊：甘川與海岸線",
    subtitle: "2024.10.24 Thursday",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-iORXLAXN46M_2Y-r1EPSDVd-hsVlIndI1F4yOuDcMnNDxXTzCBg_F4d0LxMgCHayXMgndg9EgWpHg-6VQ-mdfX0KQY-tRLMmU7uuQj86U8037FAwC6R-Ki_7Y43Gp3ozaznu-OMDMVFLCjkPnjOh4v4PbDcExQuADQ5eLU5jEmKALeP9ZTT-YEuXNRT8vgvLJQ4KxW_liekZURBQd0b-rsVhV1MWyaqmU-JykoCr6a17F24FxPJQPq5ouiaQcME1vQFIQ0-3Csyl",
    description: "探索韓國的聖托里尼與絕美海岸線。",
    items: [
      {
        time: "10:00",
        type: "景點",
        title: "甘川洞文化村",
        description: "探索「韓國的聖托里尼」，穿梭在色彩繽紛的小屋巷弄中，尋找小王子與狐狸的身影。",
        koreanName: "감천문화마을",
        images: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAxuSz6cfDCniPoF4Hou_pUOOMztkL6PWguWiQjIY9PEYLDUWxa4mF8PfQr0fmB7X-tfSaj-bwdZGeLhMu8gVpMKgtFz7e4lkJP_7bKvJalZLIqC4MEmkh6rY6Z3L3DBrpy14bLoWDUfHVs22rJKAGTkCD_8BwW-K5eIus5GfnOKVVkn0-EpdIakVzS0gPIoxkYomW2QHLCUgD9ehvw3TiikNEVs_ySu6zWVQvZiG9fLBFtxOR6Qs6U8IxPfnR7ulXKqrnfY27PR2c_",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDq0KfLJb95V_g-tZqsvbC65uLI4tQKs9HWy5naEkixv0b63zjJkHx-e2dXE36kfd520aYzIadbeHOH2mT0B-a2PYi2V8Zu6ON-_P7azIMyQ2zQBHsCirexJkv7kzyixAwfcEHTpQZNRL5bmfHbGRiSQjYhhZJBzYb1Z-rpo4PYRZIBIMForR7XvjkFFSv8hHu3oxsXCeC8-sUWuKwcW2ubg0Kg7mhQmiSfiSQAhVbQaqKUmQsMvDc0LZypzNL0vfuk3YPEDtHtnpAi"
        ]
      },
      {
        time: "11:50",
        title: "松島天空步道 (Skywalk)",
        description: "漫步於蜿蜒在海面上的透明步道，感受腳下波濤湧動的刺激感。"
      },
      {
        time: "12:20",
        title: "松島海上纜車",
        description: "搭乘水晶車廂跨越海灣，從高空俯瞰松島海灘與影島的絕美景致。"
      },
      {
        time: "14:50",
        type: "探索",
        title: "白淺灘文化村",
        description: "曾是韓戰難民的避難所，如今轉型為藝術村。緊鄰懸崖的海岸步道，每一處轉角都是絕佳的攝影位。",
        koreanName: "흰여울문화마을",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA22qcDZcNoyYJ47e2KGERxhM0gm4_k69fOO9JL6sLxLqSenHCndWtkxMkoHH8ygIffuQPrQ3K9TlK1Kye-L-YkonDK0quWA1OYMVWwoI4dbyOlB863odXCybmcsL6UVLVaN0rjAC_5vTupPsZaxhwkLhC7mJD6zuXZTjkc2dTn0cklB4p8HzwkBkIYRaexWhGxT3kquHMcp2igRNxwMVeUcROPVNZuzUanNmHuTzQnbSRnYGTeVh0HSS67qt_cLUYsv3h52_w2yy68"]
      },
      {
        time: "16:20",
        title: "THRILL ON THE MUG",
        description: "海景咖啡廳休憩"
      },
      {
        time: "18:00",
        title: "Arte Museum Busan",
        description: "沈浸式數位藝術展覽"
      },
      {
        time: "20:30",
        type: "美食",
        title: "明誠一隻雞",
        description: "釜山站周邊人氣美食，暖胃又美味。",
        koreanName: "명성닭한마리"
      }
    ]
  },
  "D7": {
    id: "D7",
    title: "西面：潮流之眼",
    subtitle: "探索釜山最繁忙的十字路口，感受這座城市流動的時尚動脈。",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoopmcgL6FmRAPvd1w9XtxNGEMlhcJjtkphKT2WJIJrv4rdOWYz-Hvk73rzYsvms3BalS32fnqI9R2wCrrjqXE-zKFnMg97IdVnuIpdoWkMJ0W4RNz5is8ZpF1vlXtiyKbef8y3vmusr1CHKC6pvS3ZzN1ctsX4CBvVpYwLKEkHYOMhXvF68zfz-YG0eFaYe9D6oX0nYq9IvaVisr2CATzKw9R-k0VRn0NM6c5KeZ1OXS1bQZFF2qsjLRyLS5sIl7JonZoEcTnE4w8",
    description: "從地下街購物到文青咖啡街。",
    items: [
      {
        time: "10:30",
        title: "西面地下街與購物中心",
        description: "朝聖韓國人氣品牌 Matin Kim 與 Mardi Mercredi，在此盡情探索最新韓系穿搭美學。",
        koreanName: "서면지하상가",
        tags: ["時尚", "免稅"]
      },
      {
        time: "17:30",
        title: "田浦咖啡街",
        description: "舊工業區轉型的文青聚落，每一間咖啡廳都有著獨特的建築語言與迷人香氣。",
        koreanName: "전포카페거리",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBDg9p0hfS8gAJOIUNiCAJAN39CzH2bB0O4Df8Gmvzy_BC_uG50vIHIPGDYSIcZbUwxPRfygM0HnIEMdBqTmF5lB08ugdowApQGNgKSpFJ8hjOa-6fDJ4ehi1HMuIHT5aZtvSx1dEAy4orNsSDNY2f5O0BiYocFKhDfppkgtCnuGLEdTQHh45VNuBwGI_njjuV9MRR-99aacu7eULwXceOGSem9H3Jx0ye9tIhOFjpf7KrJmh-SmF8HKZxGCdhilTPYOOoL3eKtvWyi"]
      },
      {
        time: "19:00",
        title: "西面美食盛宴",
        description: "享受西面的人氣美食。",
        options: [
          { name: "83 Haechi 烤肉", desc: "頂級韓牛與在地燒烤", korean: "83해치" },
          { name: "螞蟻家 Geamijip", desc: "釜山必吃章魚蝦子肥腸鍋", korean: "개미집" }
        ]
      },
      {
        time: "21:00",
        title: "百年鐵鍋炸雞",
        description: "傳統大鐵鍋炸出的極致香脆，搭配清爽的啤酒。",
        koreanName: "거인통닭"
      }
    ]
  },
  "D8": {
    id: "D8",
    title: "再會，釜山",
    subtitle: "Bupyeong Gukje Market & Departure",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCiYTBWoekzyUsObaV6OYqPUGLSUuuD4yWE5MvSgNKvXKn6mBcjX35zqfsY500ITVth92USZgifPpnUS-QLQXysVPiwRr1Xd2rqrMeFGmLhGYekPZX9bP12CNKUec5mL7Eq6HqnV9GlnNQgSnWgRuO6oebVnYE5qkmmskcd_QyPzVNcqzlzGWSPTGC4DsMyAxcVni2YiW0v0JWlhDqonwWWcUix2xlv4SuCL_f2Aq2sy1bnidoM-eGzVo6UXfWA00XvKc25I1H_FG8",
    description: "最後的採購與告別。",
    items: [
      {
        time: "11:30",
        title: "南浦、國際市場、富平市場",
        description: "最後的採購時光，品嚐富平市場的街頭小吃，購買伴手禮與韓國香油。",
        koreanName: "국제시장",
        tags: ["SHOPPING", "NAMPO"],
        images: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA46gjUox9mjlpXsgHYYKjj_JD3WUPawTd_wt68kId29ZEvYW-GduG7cSs-3kPllLnlZ7Df6ouW03Fwd_j-pRe8m4a5gPZAubMCAFxY-GHAa0Yi8qWZW8seZ_aV98vFaOpVzNqDZr5Bs31BOq5lv_m1s56drAdyETud0ZmMXYkhTc9_czj9QFK7-R4dvlYV9efrP5KslVhF76_vrDlOBHg4yeYDQ76e4RprnMxj9onocWbU8NzfboILxIf9hhtV2NKpohQ-kJTBMNML",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBnorKoDMaphk9kjNoSZ6Xm3ZZ7YPkpNUUF4dQF5qjQ4rv8KstpcwOMhXmKnZuVcDeJqLNdlOdAfxdAbovQ2Lx5IDZvQa3d-1I-_w2qRjywH4E4P6b24iMvFUlEd0I32pGbt4UwOMzAsgjn1QTIw8B-7hThIdCo5L4nIjPKAQZbhnMCttwt1oUA6-7KiJKmcbHT_e0A61qOSE_Bq-3J3eOs8NLvZnxaMJs9DR797R7sam5Q7mK-fNstU5I4de3uLxo8j44MZ84Mq5Pi"
        ]
      },
      {
        time: "15:20",
        title: "前往金海國際機場 (PUS)",
        description: "搭乘機場巴士或計程車預留充裕時間。"
      },
      {
        time: "16:30",
        title: "辦理退稅手續",
        description: "前往 Tax Refund 櫃台或自助機器處理。"
      },
      {
        time: "20:00",
        title: "大韓航空 KE 返程",
        description: "預計於 22:30 抵達台中國際機場",
        tags: ["BOARDING"]
      }
    ]
  }
};
