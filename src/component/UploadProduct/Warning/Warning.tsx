import React, { useState } from "react";
import {
  DesktopWarning,
  MobileWarning,
  WarningSection,
} from "../UploadProduct.Style";
const Warning: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WarningSection>
      <>
        <DesktopWarning>* 상품 등록 주의 사항</DesktopWarning>
        <article>
          <ul>
            <li>너무 귀여운 사진은 심장이 아파올 수 있습니다.</li>
            <br />
            <li>
              유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다. 이상의
              가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를
              황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의
              속에서 이것은 피가 보배를 황금시대의 싹이 사막이다.
            </li>
            <br />
            <li>
              자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며, 위하여서,
              평화스러운 광야에서 그리하였는가? 소담스러운 위하여 인도하겠다는
              어디 무엇을 이상을 같지 따뜻한 청춘 칼이다.
            </li>
            <br />
            <li>
              가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의
              것이다.보라, 풍부하게 이것은 황금시대를 얼마나 인간에 돋고,
              이것이다.
            </li>
          </ul>
        </article>
      </>
      <>
        <MobileWarning onClick={() => handleAside()}>
          * 상품 등록 주의 사항(클릭하세요)
        </MobileWarning>
        {isOpen && (
          <article>
            <ul>
              <li>너무 귀여운 사진은 심장이 아파올 수 있습니다.</li>
              <br />
              <li>
                유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다. 이상의
                가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를
                황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의
                속에서 이것은 피가 보배를 황금시대의 싹이 사막이다.
              </li>
              <br />
              <li>
                자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며,
                위하여서, 평화스러운 광야에서 그리하였는가? 소담스러운 위하여
                인도하겠다는 어디 무엇을 이상을 같지 따뜻한 청춘 칼이다.
              </li>
              <br />
              <li>
                가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의
                것이다.보라, 풍부하게 이것은 황금시대를 얼마나 인간에 돋고,
                이것이다.
              </li>
            </ul>
          </article>
        )}
      </>
    </WarningSection>
  );
};
export default Warning;
