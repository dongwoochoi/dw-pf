/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function HackerTonModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"당근마켓 클론코딩"}
      title={"GDSC HackerTon"}
      status={"완료"}
      tags={["React", "React-Query", "Geocoding_API", "Oauth 2.0"]}
      introducingText={`GDSC(구글 대학생 개발 동아리)에서 주최한 해커톤 참여 프로젝트로 당근마켓의 기능들 중에서 위치기반 거래 서비스를 중점으로 클론코딩 하였습니다.`}
      mainFunction={[
        {
          workCategory: "전반적인 UX/UI 구현",
          workedContend: ["기능별 컴포넌트 구현"],
        },
        {
          workCategory: "Oauth를 이용한 로그인 연동",
          workedContend: [
            "JWT 토큰 인증방식 사용",
            "Oauth를 이용해 구글계정을 통해 로그인 구현",
          ],
        },
        {
          workCategory: "Google GeoCoding API",
          workedContend: [
            "Daum 우편번호 API사용",
            "각 행정구역 경계를 기준으로 폴리곤 생성",
            "단계별 영역에 들어오는 지역의 매물 필터링",
          ],
        },
        {
          workCategory:
            "REST API를 활용하여 백엔드와 통신하며 데이터를 주고받는 기능을 구현",
          workedContend: [
            "데이터 조회 및 CRUD 작업",
            "JWT 기반 인증이 적용된 REST API와 연동하여 쿠키를 이용해 토큰관리",
            "비동기 데이터 처리 및 최적화를 위한 React-Query를 활용한 캐싱 관리",
          ],
        },
      ]}
      //   troubleShooting={[
      //     { title: "string", problem: "string", solution: "string" },
      //   ]}
      learned={""}
    />
  );
}
