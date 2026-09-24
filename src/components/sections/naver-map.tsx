import Image from "next/image";

import academyMap from "@/assets/academy-map.jpg";

// 지도 이미지는 OpenStreetMap 타일로 만든 정적 이미지이며, 학원 위치가 정중앙에 오도록 잘려 있습니다.
// 누르면 네이버 지도에서 query(학원 이름)로 검색한 결과로 이동합니다.
type NaverMapProps = {
  title: string;
  address: string;
  query: string;
};

export function NaverMap({ title, address, query }: NaverMapProps) {
  const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(query)}`;

  return (
    <a
      href={searchUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} 위치를 네이버 지도에서 보기`}
      className="group block overflow-hidden rounded-[18px] bg-paper/10 ring-1 ring-paper/10"
    >
      <div className="relative h-64">
        <Image
          src={academyMap}
          alt={`${title} 위치 지도 (${address})`}
          placeholder="blur"
          sizes="(min-width: 1024px) 560px, 100vw"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold whitespace-nowrap text-primary-foreground shadow-lg">
            {title}
          </span>
          <span className="size-0 border-x-[6px] border-t-8 border-x-transparent border-t-brand" />
        </span>
        <span className="absolute right-2 bottom-1.5 rounded bg-paper/80 px-1.5 text-[10px] text-ink/70">
          © OpenStreetMap contributors
        </span>
      </div>
      <span className="flex items-center justify-center gap-1.5 bg-paper/5 py-3 text-sm font-medium text-paper/80 transition-colors group-hover:bg-paper/10 group-hover:text-paper">
        네이버 지도에서 보기 ↗
      </span>
    </a>
  );
}
