const Product = require("../schemas/product");

const getFormInfo = async () => {
  //1. 카테고리 리스트
  //2. 유의 사항 리스트
  //3. 배송수단 관련 리스트
  //4. 구매지역 관련 정보 // 문자열로 완성, 한글과 영어 2개 다 지원
  return result;
};

const deleteProdcutByUserId = async (userId) => {
  const result = Product.updateMany(
    { seller: { id: userId } },
    {
      avaiable: false,
      deletedAt: Date.now(),
    }
  );
  return result.modifiedCount;
};
const create = async (data) => {
  //1. 썸네일 (최대 8장)
  //2. 카테고리 path
  //3. 상품 설명 요약
  //4. 제품 구매일 (화장품, 식품류 필수)
  //5. 가격
  //9. 주문 마감일
  //6. detail 설명 => html 글로 저장
  //7. 옵션 , 옵션별 재고
  //8. 구매지역 정보
  //10. 배송 수단
  //11. 한국 배송/해외배송/직거래 (한국 해외는 동시 선택 불가능), 배송료
  //12. 판매중인 다른 상품과 합배송 여부 -> 가능시 추가 요금 입력
  //13. 발송 예정일
};

module.exports = { getFormInfo, deleteProdcutByUserId };
