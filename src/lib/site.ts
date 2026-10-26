// 학원 기본 정보. 상담 섹션, 푸터, 모바일 전화 버튼에서 함께 사용합니다.
export const SITE = {
  name: "애플코딩학원",
  // 사이트 정식 주소 (www.애플코딩학원.site, Vercel 대표 도메인과 같아야 함). 링크 미리보기 이미지 등 절대 주소에 사용합니다.
  url: "https://www.xn--o01bm12au5ad7senhjna.site",
  registration: "교육청 등록 제6806호",
  address: "전남광주 광산구 임방울대로 330, 8층 802호",
  phone: "062-961-8866",
  email: "aqi2255@naver.com",
  blogUrl: "https://blog.naver.com/aqi2255",
  naverPlaceUrl: "https://map.naver.com/p/entry/place/1541412027",
} as const;

// 링크 공유 미리보기 공통 값. 페이지에서 openGraph를 지정하면 레이아웃 값을 통째로 덮어쓰므로 함께 펼쳐 씁니다.
// 이미지도 함께 덮어써져 사라지므로 src/app/opengraph-image.png 를 직접 지정합니다.
export const OPEN_GRAPH = {
  siteName: SITE.name,
  locale: "ko_KR",
  type: "website",
  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: '애플코딩학원 로고와 "생성형 AI 시대, 미래를 바꾸는 코딩 교육의 기준" 문구',
    },
  ],
};
