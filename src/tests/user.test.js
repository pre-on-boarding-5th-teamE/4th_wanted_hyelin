const request = require("supertest");
const { createApp } = require("../../app");
const connect = require("../schemas");
beforeAll(async () => {
  app = createApp();
  await connect();
});

describe("POST user/signup", () => {
  test("회원 가입 성공", (done) => {
    request(app)
      .post("/user/signup")
      .send({
        email: "local1234@email.com",
        password: "local1234",
        name: {
          full: "김혜린",
        },
        mobile: "010-4909-3501",
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
      .expect(201, done);
  });

  test("회원 가입 실패 : 중복가입", (done) => {
    const agent = request.agent(app);
    console.dir(agent);
    request(app)
      .post("/user/signup")
      .send({
        email: "local1234@email.com",
        password: "local1234",
        name: {
          full: "김혜린",
        },
        mobile: "010-4909-3501",
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
      .expect(409, done);
  });
});

describe("POST user/signin", () => {
  test("로그인 성공", (done) => {
    request(app)
      .post("/user/signin")
      .send({
        email: "local1234@email.com",
        password: "local1234",
      })
      .expect(200, done);
  });

  test("로그인 실패 : 틀린 비번", (done) => {
    request(app)
      .post("/user/signin")
      .send({
        email: "local1234@email.com",
        password: "local12345",
      })
      .expect(400, done);
  });
  test("로그인 실패 : 없는 유저", (done) => {
    request(app)
      .post("/user/signin")
      .send({
        email: "notfound1234@email.com",
        password: "local1234",
      })
      .expect(404, done);
  });
});
