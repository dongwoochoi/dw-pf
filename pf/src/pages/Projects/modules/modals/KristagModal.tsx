/** @jsxImportSource @emotion/react */
import { KrisTag_Modal } from "../../../../assets/img";
import DefaultModal from "./DefaultModal";

export default function KristagModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"사내 인하우스 데이터 라벨링 툴"}
      title={"KRISTAG"}
      status={"완료"}
      tags={["React", "TypeScript", "Jotai", "React-Query"]}
      introducingText={`KRISTAG는 사내 데이터를 Labelling 할 수 있도록 제작된 인하우스툴로써 작업자가 의류 / 신발의 이미지를 해당하는 메타데이터로 태깅하고 관리하는 라벨링 툴 입니다.`}
      mainFunction={[
        {
          workCategory: "Atomic-Design-Pattern",
          workedContend: [
            "3단계 Atomic-Design-Pattern 을 사용하여 폴더 구조화",
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
          atTroubleShooting: true,
        },
        {
          workCategory: "Zoom Viewer 구현",
          workedContend: [
            "이미지 내에서 커서의 좌표값을 가지고 커서내의 범위를 확대해서 보여주는 Zoom Viewer 구현",
          ],
        },
      ]}
      troubleShooting={[
        {
          title: "블로킹 기능 구현 이슈",
          problem:
            "react-router-dom V5 에서 V6로 버전이 올라가는 과정에서 기존 history 객체 제거로 인해 blocking 함수가 사용불가한 상황",
          solution:
            "커스텀 훅을 통해 React Router의 useBlocker를 사용해 네비게이션을 감지하고, 전역 상태인 blockingAtom을 통해 차단 조건을 확인한 뒤, 조건에 따라 이동을 허용하거나 차단하는 로직을 구현",
        },
        {
          title: "이미지 로딩시간 지연 이슈",
          problem:
            "라벨링 페이지에서 이미지 페이지를 넘기는 단축키를 누르고 유지할 시 10장씩 불러오는 api가 지속 호출되어 서버 과부화가 걸리는 문제 발생",
          solution:
            "+- 100장의 이미지를 미리 받아와 캐싱해두고 캐싱범위 외의 요청에 100장 단위로 api 호출하려 했으나 복잡성과 기존 동작방식에 맞지않아 debounce를 적용하여 일정시간 이상 눌린만츰 숫자를 더한 페이지의 이미지 요청",
        },
      ]}
      learned={
        "이 프로젝트는 기본적으로 복잡한 데이터를 다루는 과정이 많았습니다. Depth가 3-4인 중첩 객체를 드롭다운으로 선택해야하는 메타데이터를 다루면서 많은 중복 코드가 발생하고 어려움을 느꼈는데 많은 복잡도가 있는 만큼 미리 정리와 분류가 필요하다는것을 직접적으로 깨닫게 되었고, Zoom Viewer, 라벨링 워크플레이스 부분을 제작하며 캔버스 또는 많은 동적인 작업도 해볼 수 있어서 좋았습니다. 무엇보다 업데이트되는 라이브러리들의 변경사항에 대응하여보면서 앞으로 있을 많은 변화에 적응해 나갈때 필요한 경험과 자신감을 가지게 되었습니다."
      }
      introducingImg={[
        {
          title: "메인 페이지",
          img: KrisTag_Modal.Kristag_main,
        },
        {
          title: "라벨링 작업 화면",
          img: KrisTag_Modal.Kristag_labeling,
        },
        {
          title: "줌 뷰어 작동 화면",
          img: KrisTag_Modal.Kristag_zoomViewer,
        },
        {
          title: "블로킹 작동 화면",
          img: KrisTag_Modal.Kristag_blocking,
        },
        {
          title: "메타데이터 화면",
          img: KrisTag_Modal.Kristag_metadata,
        },
        {
          title: "아이템 관리 화면",
          img: KrisTag_Modal.Kristag_item,
        },
      ]}
    />
  );
}
