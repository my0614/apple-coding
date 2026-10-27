import Image from "next/image";

// 수업 진행과정 페이지의 수업 현장 이미지. 파일은 public/images/process에 있습니다.
const PHOTOS = [
  {
    src: "/images/process/class-1.jpg",
    alt: "레고 WeDo로 로봇을 조립하며 웃는 초등학생",
    caption: "레고 창의코딩",
  },
  {
    src: "/images/process/class-2.jpg",
    alt: "로보틱스 수업에서 친구들과 함께 로봇을 만들고 블록 코딩을 하는 학생들",
    caption: "함께 만드는 로봇 수업",
  },
  {
    src: "/images/process/class-3.jpg",
    alt: "로봇&코딩 연구소에서 노트북으로 코딩하고 로봇을 움직이는 학생들",
    caption: "피지컬 컴퓨팅",
  },
  {
    src: "/images/process/class-4.jpg",
    alt: "노트북으로 파이썬·자바 코드를 작성하며 토론하는 고등학생들",
    caption: "언어반 · 심화 과정",
  },
  {
    src: "/images/process/class-5.jpg",
    alt: "드론과 로봇을 직접 만들고 코딩 화면을 함께 보는 학생들",
    caption: "드론 · 피지컬 AI",
  },
];

export function ClassGallery() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-brand">수업 현장</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            직접 만들고 함께 웃는 수업
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {PHOTOS.map((photo, index) => (
            <li key={photo.src} className={index === 0 ? "sm:col-span-2" : undefined}>
              <figure className="relative overflow-hidden rounded-3xl ring-1 ring-ink/5">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1800}
                  height={1005}
                  sizes={
                    index === 0
                      ? "(min-width: 1152px) 1104px, 100vw"
                      : "(min-width: 1152px) 542px, (min-width: 640px) 50vw, 100vw"
                  }
                  className="aspect-[16/9] w-full object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
