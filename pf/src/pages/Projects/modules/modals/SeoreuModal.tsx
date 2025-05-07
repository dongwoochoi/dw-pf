/** @jsxImportSource @emotion/react */
import { Seoreu_Modal } from "../../../../assets/img";
import DefaultModal from "./DefaultModal";

export default function SeoreuModal() {
  return (
    <DefaultModal
      oneLineIntroduce={"주식회사 서르 홈페이지 제작"}
      title={"Seoreu HomePage"}
      status={"완료"}
      tags={["React", "TypeScript", "EmailJs"]}
      introducingText={`(주)서르 사의 의뢰를 받아 홈페이지 제작을 진행했습니다.`}
      mainFunction={[
        {
          workCategory: "Atomic-Design-Pattern",
          workedContend: [
            "4단계 Atomic-Design-Pattern 을 사용하여 폴더 구조화",
          ],
        },
        {
          workCategory: "반응형 페이지",
          workedContend: [
            "react-responsive를 이용한 모바일 / 데스크톱 반응형 페이지",
          ],
        },
        {
          workCategory: "EmailJs",
          workedContend: ["EmailJs를 이용하여 email 전송기능 구현"],
        },
        {
          workCategory: "랜더링 최적화",
          workedContend: [
            "용량 최적화에 더하여 리펙토링을 진행하여 css 및 js요소 재사용성 극대화 ",
          ],
          atTroubleShooting: true,
        },
      ]}
      troubleShooting={[
        {
          title: "랜더링 성능 저하 문제 발생",
          problem:
            "페이지 내에 첨부를 요청받은 고화질 이미지, 동영상의 용량 문제로인해 페이지 랜더링 속도 저하 문제 발생(Lighthouse 기준 성는 부분 60점대)",
          solution:
            "클라이언트 측에서 허용 가능한 품질 기준을 유지하며, 이미지 용량을 최대한 압축하는 작업에 더하여 Lazy-Import 적극 활용 및 컴포넌트 재사용성 증진에 힘썼습니다. 그리고 css/js 또한 재사용성을 최대한 증진하여 퍼포먼스를 향상시켰습니다(80점대). ",
        },
      ]}
      learned={
        "처음으로 일정을 맞추기 위해 빠듯하게 움직였던 프로젝트 경험이었습니다. Figma상에서 변동되는 부분이 많았고 이를 소화하기위해 처음 계획보다 일정이 많이 빠듯해 지면서 초기에 일정을 잡을때 예상치못한 변수발생에 대비할 여유를 마련해야겠다는 생각을 가지게 되었습니다. 또한 이 프로젝트는 반응형 Figma없이 작업을 하며 반응형 디자인을 직접 고안하고 제작하면서 UI/UX 설계에 대한 특별한 경험을 할 수 있었습니다."
      }
      introducingImg={[
        {
          title: "서르 메인페이지",
          img: Seoreu_Modal.Seoreu_main,
        },
        {
          title: "Contact 페이지",
          img: Seoreu_Modal.Seoreu_mail,
        },

        {
          title: "Wimple 페이지",
          img: Seoreu_Modal.Seoreu_page1,
        },
        {
          title: "서르 소개 페이지",
          img: Seoreu_Modal.Seoreu_page2,
        },
        {
          title: "Wimple 제품군 페이지",
          img: Seoreu_Modal.Seoreu_page3,
        },
        {
          title: "Swiper 작업 부분",
          img: Seoreu_Modal.Seoreu_page4,
        },
      ]}
    />
  );
}
