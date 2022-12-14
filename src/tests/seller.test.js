const request = require("supertest");
const assert = require("assert");
const { createApp } = require("../../app");
const connect = require("../schemas");
const User = require("../schemas/user");

beforeAll(async () => {
  app = createApp();
  await connect();
});

afterAll(async () => {
  await User.deleteMany({}); // 전부 삭제
});

describe("POST /seller/register", () => {
  app = createApp();
  const agent = request.agent(app);
  let token = "";
  test("유저 회원 가입", (done) => {
    agent
      .post("/user/signup")
      .send({
        email: "seller1234@email.com",
        password: "seller1234",
        name: {
          full: "김혜린2",
        },
        mobile: "010-4909-3502",
        address: {
          country: "korea",
          countryCode: "+82",
          state: null,
          city: "Seoul",
          postCode: "07930",
          address1: "서울시 양천구 오목로 5길 19 102동 404호",
        },
        vetified: true,
      })
      .expect(201);
  });
  test("유저 로그인", (done) => {
    agent
      .post("/user/signin")
      .send({
        email: "seller1234@email.com",
        password: "seller1234",
      })
      .expect(200)
      .then((response) => {
        assert(!!response.body.token, true);
        token = response.body.token;
      });
  });

  test("셀러 등록 성공", (done) => {
    agent
      .post("/seller/register")
      .set("authorization", token)
      .timeout(5000)
      .send({
        nick: "croketSeller",
        account: "국민은행 1234-884-004909",
        mobile2: "010-1234-5678",
      })
      .expect(201, done);
  });
  test("셀러 상품 등록", (done) => {
    agent
      .post("/seller/product")
      .set("authorization", token)
      .send({
        name: "상품1",
        summary: "상품1은 이러고 저런 딱 들어오는 요약",
        description: "<p>상세설명 어쩌고 저꺼고 길게길게html도가능</p>",
        cautions: [
          "파손 위험/택배사 과실로 인한 파손은 환불X",
          "직접 입력한 유의사항",
        ],
        price: 6900,
        caredPrice: 7200,
        buyDate: "2022-11-23",
        userCanBuy: "아시아 대한민국 서울",
        orderEndDate: "2022-12-01",
        optionMeta: "사이즈/색상",
        variations: [
          {
            case: "66/화이트",
            stock: 2,
          },
          {
            case: "66/블랙",
            stock: 2,
          },
        ],
        deliveredAt: "2022-12-24",
        delivery: ["한국 내 배송/택배착불/0", "직거래/여기에 직거래 장소"],
        bundleAvailable: false,
      })
      .expect(201);
  });
});
