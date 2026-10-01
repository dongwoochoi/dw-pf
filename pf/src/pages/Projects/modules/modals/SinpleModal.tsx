/** @jsxImportSource @emotion/react */
import { Sinple_Modal } from "../../../../assets/img";
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
          atTroubleShooting: true,
        },
        {
          workCategory: "전역 에러 바운더리 구축",
          workedContend: [
            "백엔드 측에서 보내주는 에러코드를 필터랑하여 모든 에러를 처리할 수 있는 에러 바운더리 구축",
          ],
          atTroubleShooting: true,
        },
        {
          workCategory: "지속적인 UI/UX개선",
          workedContend: ["메인페이지 리뉴얼", "피드백 및 수정사항 반영"],
        },
      ]}
      troubleShooting={[
        {
          title: "전역 에러 바운더리 구축",
          problem:
            "React-Query V5 버전의 출시를 앞두고 신규 버전에서 onError 함수의 제거예정을 압둔 상황에서 대부분의 api에서 사용중이던 onError 함수를 걷어내야하는 상황",
          //기존 에러처리 로직이 백엔드에서 코드를 보내주고 프론트에서 처리하던것을 설명해?
          solution:
            "React Query 팀의 공식 마이그레이션 가이드를 참고해 에러 처리 방식을 재설계 - 컴포넌트 내부 에러 및 UI 변경은 useEffect로 개별 처리하고, 전역 공통 에러는 QueryClient의 QueryCache 레벨에 Global Error Handler를 연동해 처리. React Query v5로 안정적으로 마이그레이션을 완료했고, 로컬/글로벌 에러 처리를 분리해 에러 핸들링 흐름을 명확히 했습니다.",
        },
        {
          title: "리랜더링 최적화",
          problem:
            "신발 관련 견적을 요청하고 받는 서비스 특성상 특정 페이지들에 상당히 많은 input, dropdown 이 존재하고 이들을 효율적이게 관리하기 위한 복잡하고 많은 상태들이 얽혀있고 이로 인해 리랜더링이 많이 발생하는 상황",
          solution:
            "Jotai / Zustand / Recoil을 비교 분석한 뒤 프로젝트 규모·생태계 안정성·React 호환성을 고려해 Recoil을 선택, 컴포넌트 단위가 아닌 atom 단위로 상태를 세분화해 의존성을 최소화하고 debounce 처리된 공용 Input 컴포넌트를 적용. React Profiler 기준 리렌더링 횟수 81% 감소, Lighthouse 성능 점수 62점 → 77점(+15점)을 달성했습니다.",
        },
      ]}
      learned={
        "재랜더링과 최적화 그리고 컴포넌트 재사용성에 집중하며 리펙토링에 많은 힘을 쏟아낸 프로젝트인 만큼 성능 최적화 및 랜더링 시간 축소에 대한 많은 고민을 할 수 있었고 이 경험들을 토대로 이러한 고려해야 할 것들을 베이스로 생각하고 프로젝트를 진행해 나갈 능력을 갖추게 되었습니다. 또한 지속적으로 고도화 되는 기획을 반영하면서 프로젝트 성격에 따른 확장가능한 코드의 중요성을 깨닫게 되었고 확장가능한 코드를 작성하는 방법을 알게되었습니다."
      }
      introducingImg={[
        {
          title: "메인 페이지",
          img: Sinple_Modal.Sinple_main,
        },
        {
          title: "견적 신청 화면",
          img: Sinple_Modal.Sinple_estimate,
        },
        {
          title: "견적 등록 초기 화면",
          img: Sinple_Modal.Sinple_estimate_items,
        },
        {
          title: "견적 목록",
          img: Sinple_Modal.Sinple_estimate_list,
        },
        {
          title: "공장지도 화면",
          img: Sinple_Modal.Sinple_factory_map,
        },
      ]}
    />
  );
}
