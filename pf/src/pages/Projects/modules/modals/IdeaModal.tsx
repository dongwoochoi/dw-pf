/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function IdeaModal() {
  return (
    <DefaultModal
      oneLineIntroduce={
        "누구나 낸 아이디어가 현실이 되도록, 기업·투자자와 연결하는 아이디어 매칭 플랫폼"
      }
      title={"Idea Connection"}
      status={"완료"}
      tags={[
        "Next.js (React, TypeScript)",
        "GCP",
        "Oauth 2.0",
        "Google_Transfer_API",
      ]}
      introducingText={`Idea Connection은 GDSC(구글 대학생 개발 동아리)에서 개최하는 "UN에서 지정한 세계 17가지 문제"를 해결하는 연례행사 Solution_Challenge 에 참가한 프로젝트로써 “좋은 아이디어는 어디에서나 나올 수 있다” 라는 슬로건으로 “누구나 만들어낸 아이디어를 등록해 여유있는 자본을 가진 기업/기관/사업가/투자자와 매칭해 실사용이 이루어 질 수 있게 하는 서비스” 입니다.`}
      mainFunction={[
        {
          workCategory: "이용자 권한별 서비스 차이",
          workedContend: [
            "쿠키를 활용하여 이용자의 권한 구분",
            "페이지별 이용자의 권한을 확인해 컨텐츠를 조건부로 랜더링",
          ],
        },
        {
          workCategory: "Oauth를 이용한 로그인 연동",
          workedContend: [
            "JWT 토큰 인증방식 사용",
            "Oauth를 이용해 구글계정을 통해 로그인 구현",
          ],
        },
        {
          workCategory: "Google_Transfer_API",
          workedContend: [
            "API 호출비용 문제로 모든페이지에 번역기능 구현 실패",
            "게시판 서비스에 언어를 감지하여 알려주는 기능 구현",
            "문장을 드래그 하여 일부 언어로 번역하여 보여주는 기능 구현",
          ],
        },
      ]}
      // troubleShooting={[
      //   { title: "string", problem: "string", solution: "string" },
      // ]}
      learned={""}
    />
  );
}
