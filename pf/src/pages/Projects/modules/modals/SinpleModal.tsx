/** @jsxImportSource @emotion/react */
import DefaultModal from "./DefaultModal";

export default function SinpleModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"인공지능 기술기반 신발 제조 솔루션 플랫폼"}
      title={"SINPLE"}
      status={"완료"}
      tags={["React", "TypeScript", "Recoil ", "React-Query", "Kakao-Map-Api"]}
      introducingText={`SINPLE은 신발 디자인을 가지고 인공지능 혹은 코디네이터에게 견적 발행 및 디자인별 구성요소들을 생산할 최적의 공장을 매칭히주는 플랫폼 입니다.`}
      mainFunction={[
        {
          workCategory: "Atomic-Design-Pattern",
          workedContend: [
            "5단계 Atomic-Design-Pattern 을 사용하여 폴더 구조화",
          ],
        },
        {
          workCategory: "반응형 페이지",
          workedContend: [
            "react-responsive를 이용한 모바일 / 데스크톱 반응형 페이지",
          ],
        },
        {
          workCategory: "서비스 고도화",
          workedContend: [
            "코디네이터 페이지의 전국 공장지도 및 공장관리 페이지 생성 with 카카오맵",
            "견적 과정 축소 작업(5Step -> 3Step)",
          ],
        },
        {
          workCategory: "리랜더링 최적화",
          workedContend: [
            "기존의 코드에서 Context_API와 Reducer를 활용하여 전역상태관리를 하였고 이때문에 같은 Context에 엮인 컴포넌트들이 값 변경시 모두 재랜더링 되는 현상 발생",
            " -> ContextAPI를 걷어내고 Recoil을 도입함으로써 문제 해결",
            "",
            "인풋 입력시 해당페이지의 다른 state들이 함깨 재랜더링 되는 현상 발생",
            " -> Debouncing 적용 및 인풋 커스터마이징으로 해결",
          ],
        },
        {
          workCategory: "전역 에러 바운더리 구축",
          workedContend: [
            "당시 ReactQuery V5에서 onError를 제거한다는 소식을 듣고 기존에 onError를 대체할 방법이 필요했음",
            "쿼리 클라이언트 설정 레벨에서 전역적인 캐시레벨의 onError 콜백에서 전역적으로 에러를 처리하는 함수를 생성",
          ],
        },
        {
          workCategory: "지속적인 UI/UX개선",
          workedContend: ["메인페이지 리뉴얼", "피드백 및 수정사항 반영"],
        },
      ]}
    />
  );
}
