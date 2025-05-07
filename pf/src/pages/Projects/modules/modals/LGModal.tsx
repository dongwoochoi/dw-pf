/** @jsxImportSource @emotion/react */
import { Lg_Modal } from "../../../../assets/img";
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
      //   troubleShooting={[
      //     { title: "string", problem: "string", solution: "string" },
      //   ]}
      learned={
        "Django를 통해서 Front/Back 모두 진행한 풀스택 프로젝트 였습니다. 백엔드측 지식이 그리 깊지는 않았으나 학습하며 프로젝트를 진행한 결과 만족스러운 기능구현이 되었습니다. 리엑트가 아닌 Django Template로 작업을 했기에 api 요청없이 기능을 구현한 것도 신기한 경험이었고 백엔드 로직을 직접 구현해본 경험을 통해, API 설계 및 데이터 흐름에 대한 이해도가 높아졌으며, 개발자 간의 명확한 소통이 가능한 수준의 기술적 커뮤니케이션 능력을 갖추게 되었습니다."
      }
      introducingImg={[
        {
          title: "데이터 내보내기 화면",
          img: Lg_Modal.Lg_DataExport,
        },
        {
          title: "라벨링 작업 화면",
          img: Lg_Modal.Lg_DataLabeling,
        },
        {
          title: "데이터 현황판 화면",
          img: Lg_Modal.Lg_DataStatus,
        },
        {
          title: "라벨링 데이터 업로드 화면",
          img: Lg_Modal.Lg_DataUpload,
        },
        {
          title: "작업자별 데이터 현황 화면",
          img: Lg_Modal.Lg_DataWorks,
        },
      ]}
    />
  );
}
