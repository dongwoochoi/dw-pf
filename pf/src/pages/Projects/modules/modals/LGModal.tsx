/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function LGModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"LG 제품 리뷰 / 댓글 라벨링 툴"}
      title={"LG Product Review Labeling Project"}
      status={"완료"}
      tags={["Django", "AWS", "HTML", "CSS"]}
      introducingText={`LG측 자사 제품 리뷰 / 댓글들에 대한 대상, 현상, 카테고리별 라벨링을 진행하여 제품에 대한 긍정 또는 부정 댓글 분류, 제품에 대한 기능별 댓글 분류를 하는 툴을 제작한 산학프로젝트 입니다.`}
      mainFunction={[
        {
          workCategory: "UX / UI 개선",
          workedContend: [
            "페이지의 전반적인 url, 및 레이아웃 재구성",
            "기존의 대상 / 현상 키워드를 드래그하여 해당 input박스에 드롭하는 방식을 드래그시 해당 위치에 대상 / 현상을 선택하는 방식으로 변경",
            "전체적인 UX 개선",
          ],
        },
        {
          workCategory: "최적화",
          workedContend: ["라벨링 데이터 업로드 및 삭제 부분 상태관리 최적화"],
        },
        {
          workCategory: "필터링 최적화",
          workedContend: [
            "제품명 뿐만 아니라 제품의 모델명, 모델의 코드 등의 필터링 기능을 추가하여 해당되는 결과 값만을 볼 수 있도록 구현",
          ],
        },
      ]}
    />
  );
}
