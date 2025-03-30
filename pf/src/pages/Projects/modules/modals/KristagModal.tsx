/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function KristagModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"사내 인하우스 데이터 라벨링 툴"}
      title={"KRISTAG"}
      status={"완료"}
      tags={["React", "TypeScript", "Jotai", "React-Query"]}
      introducingText={`KRISTAG는 사내 데이터를 Labelling 할 수 있도록 제작된 인하우스툴로써 작업자가 의류 / 신발의 이미지를 해당하는 메타데이터로 태깅하고 관리하는 툴 입니다.`}
      mainFunction={[
        {
          workCategory: "Atomic-Design-Pattern",
          workedContend: [
            "4단계 Atomic-Design-Pattern 을 사용하여 폴더 구조화",
          ],
        },
        {
          workCategory: "Labeling Workplace",
          workedContend: [
            "페이지당 이미지 10장 분할, 상태관리 및 디바운싱을 통해 랜더링 및 페이지 이동 최적화",
            "단축키 구현",
            "라벨링 기능 구현",
          ],
        },
        {
          workCategory: "Blocking",
          workedContend: [
            "react-router-dom V6 의 history 객체 제거로 인해 blocking 직접 구현",
            "생성 및 수정 페이지별 변경상황 발생시 블로킹하도록 커스터마이징",
          ],
        },
        {
          workCategory: "Zoom Viewer 구현",
          workedContend: [
            "이미지 내에서 커서의 좌표값을 가지고 커서내의 범위를 확대해서 보여주는 Zoom Viewer 구현",
          ],
        },
      ]}
    />
  );
}
