/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function ProtFolioModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"개인 포트폴리오 페이지"}
      title={"PortFolio"}
      status={"완료"}
      tags={["React", "TypeScript", "Emotion", "Jotai"]}
      introducingText={`개인 포트폴리오 페이지 입니다.`}
      mainFunction={[
        {
          workCategory: "UX / UI 설계",
          workedContend: [
            "정보 파악쉽게 섹션 나눔",
            "기존의 대상 / 현상 키워드를 드래그하여 해당 input박스에 드롭하는 방식을 드래그시 해당 위치에 대상 / 현상을 선택하는 방식으로 변경",
            "전체적인 UX 개선",
          ],
        },
        {
          workCategory: "반응형 설계",
          workedContend: ["라벨링 데이터 업로드 및 삭제 부분 상태관리 최적화"],
        },
        {
          workCategory: "배포",
          workedContend: [
            "제품명 뿐만 아니라 제품의 모델명, 모델의 코드 등의 필터링 기능을 추가하여 해당되는 결과 값만을 볼 수 있도록 구현",
          ],
        },
      ]}
    />
  );
}
