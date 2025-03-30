/** @jsxImportSource @emotion/react */
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
            "이미지, 동영상 등의 용량 문제로 인해 페이지 랜더링 속도 저하 문제 발생",
            "용량 최적화에 더하여 리펙토링을 진행하여 css 및 js요소 재사용성 극대화 ",
          ],
        },
      ]}
    />
  );
}
