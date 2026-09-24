import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 답변은 학원 운영 방식에 맞게 수정해서 사용하세요.
const FAQS = [
  {
    question: "코딩을 처음 배우는데 따라갈 수 있을까요?",
    answer:
      "네, 가능합니다. 첫 상담에서 수준을 확인한 뒤 블록코딩부터 차근차근 시작하는 반으로 안내해 드립니다.",
  },
  {
    question: "수강료는 어떻게 되나요?",
    answer: "과정과 수업 횟수에 따라 달라집니다. 상담 신청을 남겨주시면 자세히 안내해 드립니다.",
  },
  {
    question: "노트북을 따로 준비해야 하나요?",
    answer:
      "학원에 수업용 컴퓨터가 준비되어 있습니다. 집에서 복습할 때 필요한 환경은 수업 중에 안내해 드립니다.",
  },
  {
    question: "결석하면 보강이 되나요?",
    answer: "미리 연락 주시면 다른 시간대 수업으로 보강 일정을 잡아드립니다.",
  },
  {
    question: "수업 내용은 어떻게 확인할 수 있나요?",
    answer: "매주 학습 리포트로 진도와 과제 결과를 학부모님께 전달해 드립니다.",
  },
];

export function Faq() {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium text-brand">자주 묻는 질문</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink lg:text-4xl">
            궁금한 점을 모았어요
          </h2>
          <p className="mt-4 text-sm text-ink/60">
            더 궁금한 점은 상담 신청을 남겨주시면 바로 답변드릴게요.
          </p>
        </div>
        <Accordion type="single" collapsible className="lg:col-span-8">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-b border-ink/10"
            >
              <AccordionTrigger className="py-5 text-base text-ink hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-ink/65">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
