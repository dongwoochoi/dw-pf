/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function CapStoneModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"유튜브 댓글을 GPT가 자동으로 달아주는 서비스"}
      title={"CapStone"}
      status={"완료"}
      tags={["Django", "React", "YouTube_API", "ChatGPT_API", "Oauth 2.0"]}
      introducingText={`캡스톤(capstone) 의 원 의미는 돌기둥이나 담 위 등 건축물의 정점에 놓인 장식으로 최고의 업적 혹은 성취를 뜻하며 학과 교육과정의 모든 내용을 가지고 성취를 보여주는 과정으로 유튜브 영상에 달린 댓글을 GPT가 자동으로 답변해주고 수많은 댓글을 쉽게 관리할 수 있는 서비스를 개발하여 참가했습니다.`}
      mainFunction={[
        {
          workCategory: "백엔드 구현",
          workedContend: [
            "JWT 토큰 인증방식 사용",
            "Google oauth API와 통신을 통해 구글 아이디로 로그인 구현",
            "로그인된 구글계정을 통해 유튜브 연동",
            "Youtube Data API 와 통신을 통해 유저의 유튜브 데이터 관리",
            "Youtube Data API 와 통신을 통해 댓글 및 답글 관리",
          ],
        },
        {
          workCategory: "프론트엔드 구현",
          workedContend: [
            "기능별 컴포넌트 구현",
            "재사용 가능한 컴포넌트 구현",
            "전반적 기능 및 페이지 구현",
            "GPT/YouTube 응답데이터 비동기 로직 구현",
          ],
        },
      ]}
    />
  );
}
