import React, { useEffect } from "react";
import styled from "styled-components";

function Index() {
  return (
    <Section className="flex-center-C">
      <h3>해당하는 메일로 이메일을 보냈습니다</h3>
      <p>회원가입을 완료하기 위해 이메일을 확인해주세요</p>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export default Index;
