/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function ProtFolioModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"개인 포트폴리오 페이지"}
      title={"PortFolio"}
      status={"완료"}
      tags={["React", "TypeScript", "Emotion", "Jotai", "Django"]}
      introducingText={`개인 포트폴리오 페이지 입니다.`}
      mainFunction={[
        {
          workCategory: "UX / UI 설계",
          workedContend: ["UX/UI 설계부터 디자인까지 직접 진행하였습니다."],
        },
        {
          workCategory: "반응형 설계",
          workedContend: [
            "react-responsive를 이용한 모바일 / 노트북 / 데스크톱 반응형 페이지",
          ],
        },
        {
          workCategory: "배포",
          workedContend: [
            "프론트엔드 - netlify 를 이용하여 배포",
            "뱍앤드 - pythonAnyWhere 을 이용하여 배포",
          ],
        },
      ]}
      troubleShooting={[
        {
          title: "FullPage 구현",
          problem:
            "초기에는 풀페이지로 구현하여 각 챕터당 꽉차는 페이지 크기를 가지며 스크롤 한번에 한페이지씩 넘어가게 구현하려함, 하지만 무료 라이브러리 (react-pullpage) 이용시 모달이 열릴경우 배경이 스크롤 되는 이슈 발생으로 라이브러리 커스터마이징 필요",
          solution: "fullPage 기능을 자체 제작중(진행중)",
        },
        {
          title: "브라우저 호환 이슈",
          problem:
            "반응형 작업중 크롬에서 작업을 마치고 실제 핸드폰으로 접속을 했을시 사파리에서 레이아웃이 꺠지는 현상 발생",
          solution:
            "flex 기반으로 정렬한 요소가 Safari에서 정상 정렬되지 않아 브라우저 차이를 조사한 결과, min-height와 flex-shrink 속성에 대한 해석 차이가 원인이였으며 Safari 전용 조건부 스타일 적용",
        },
      ]}
      learned={""}
    />
  );
}
