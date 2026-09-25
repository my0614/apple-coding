import nodemailer from "nodemailer";

import { contactSchema } from "@/lib/contact";
import { SITE } from "@/lib/site";

// 상담 신청을 받아 네이버 SMTP로 학원 메일에 보냅니다.
// 필요한 환경변수: NAVER_SMTP_USER, NAVER_SMTP_PASS (.env.local / Vercel)
export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "잘못된 요청입니다." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "입력값을 확인해 주세요.";
    return Response.json({ ok: false, error: message }, { status: 400 });
  }

  const { name, phone, course, message, website } = parsed.data;
  // 숨은 입력칸이 채워져 있으면 봇으로 보고 조용히 성공 처리합니다.
  if (website) return Response.json({ ok: true });

  const user = process.env["NAVER_SMTP_USER"];
  const pass = process.env["NAVER_SMTP_PASS"];
  if (!user || !pass) {
    console.error("NAVER_SMTP_USER / NAVER_SMTP_PASS 환경변수가 없습니다.");
    return Response.json(
      { ok: false, error: "메일 설정이 아직 완료되지 않았습니다." },
      { status: 500 },
    );
  }

  const submittedAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(new Date());

  const rows: [string, string][] = [
    ["이름", name],
    ["연락처", phone],
    ["관심 과정", course],
    ["문의 내용", message || "(없음)"],
    ["신청 시각", submittedAt],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `
    <div style="font-family: sans-serif; font-size: 15px; color: #171a20;">
      <h2 style="margin: 0 0 16px; color: #a50b25;">새 상담 신청이 접수되었습니다</h2>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <th style="padding: 8px 16px 8px 0; text-align: left; color: #6b7280; font-weight: 500; vertical-align: top;">${label}</th>
            <td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top: 24px; font-size: 13px; color: #9ca3af;">${SITE.name} 홈페이지 상담 신청 폼에서 자동으로 보낸 메일입니다.</p>
    </div>`;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });
    await transporter.sendMail({
      // 네이버 SMTP는 보내는 사람이 로그인한 계정과 같아야 합니다.
      from: `"${SITE.name} 홈페이지" <${user}>`,
      to: user,
      subject: `[${SITE.name}] 새 상담 신청 - ${name}`,
      text,
      html,
    });
  } catch (error) {
    console.error("상담 메일 발송 실패", error);
    return Response.json({ ok: false, error: "메일 발송에 실패했습니다." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
