<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/pre-on-boarding-5th-teamE/3rd_ThingsFlow_hyelin">
  </a>

<h3 align="center"></h3>

  <p align="center">
    </h4>원티드 온보딩 4번째 과제</h4></br>
    with. 아이오엘오
    <br />
    <a href="https://documenter.getpostman.com/view/17264763/2s8YYJogg6"><strong> » API Documentation 보러가기</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>목차</summary>
  <ol>
    <li>
      <a href="#about-the-project">이번 레포는...!</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">시작방법</a>
      <ul>
        <li><a href="#prerequisites">기본 셋팅하기</a></li>
        <li><a href="#installation">기본 셋팅하기</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">기능설명</a></li>
    <li><a href="#usage">사용방법</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 이번 레포는...!

회원 가입을 하고 어떤 회원은 원하는 경우에 셀러로 등록 가능합니다.      

셀러가 되면 상품을 등록,수정,삭제할 수 있는 권한이 생깁니다.    

모든 사용자가 상품 조회를 하고 상품 리스트를 조건에 맞게 조회 가능합니다.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![Javascript][Javascript]][javascript-url] 
[![Node.js][Node.js]][Node-url] 
[![npm][npm]][npm-url]
[![Express][Express]][Express-url] 
[![MySQL][MySQL]][MySQL-url] 


<!--링크 알아올 것-->
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 시작방법
### 기본 셋팅하기
해당 프로그램을 실행전에 다음과 같이 실행합니다.    

1. 레포지토리 가져오기
   ```sh
   git clone https://github.com/pre-on-boarding-5th-teamE/4th_wanted_hyelin.git
   ```
2. npm package 설치하기
   ```sh
   npm install
   ```
3. `MongoDB` 설치 및 실행  
    
    case 1. 로컬에서 직접 설치 하는 경우,

    [>> MongoDB 설치하기: velog](https://velog.io/@seungsang00/Ubuntu-MongoDB-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-Ubuntu-20.04)

    case 2. mongoDB cloud를 이용하는 경우
    
    다음 링크나오는 내용대로 진행합니다.    
    [>> MongoDB Atlas 무료로 사용하기: tistory](https://developer88.tistory.com/421)

4. 레포지토리 진입,  `/.env` 설정 
    
    서버 관련 설정
    ```
    # Server
    MODE_ENV=development // 4. config.json 참고
    PORT=8000 //example
    ```
    JWT관련 설정
    ```
    # JWT
    ALGORITHM=HS256
    JWT_EXPIRES_IN=1d // 토큰 유효 기간 
    JWT_SECRET="jwt secret"
    ```
5. .env mongoDB URL 설정 `/.env`
   
   ```
   # MongoDB
    MONGO_CONNECT_URL = mongodb://localhost:27017 <-- 로컬로 연결할 시
    ```
    혹은 MongoDB Atlas 사용시
    ```
    MONGO_CONNECT_URL= mongodb+srv://{사용자}:{비번}@wanted4.8gnngsm.mongodb.net/test?retryWrites=true&w=majority
   ```

6. 서버 구동
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 기능 설명
(o|x)는 구현 여부
#### 회원기능    
`회원가입` -  이메일과 비번입력, 유저 이름으로 회원가입을 합니다 (o)    
`로그인` - 이메일과 비번을 입력하고 저장된 회원정보와 일치하면 jwt 토큰을 발급 받습니다(o)   
`탈퇴기능` - 탈퇴 사유를 받고, 해당 아이디를 soft Delete하며, 등록한 제품은 판매 불가 처리합니다(o)     

회원 셀러 기능     
`셀러 입점 정보 등록` - 일반 회원이 셀러 입점을 등록합니다(o)     
`셀러 상품 등록` - 형식에 맞춘 상품 정보를 등록합니다(o)      
`셀러 상품 삭제` - 셀러가 자신이 등록한 상품을 삭제 합니다(o)   


상품 기능   
`상품 상세 조회` - 상품을 상세 조회 합니다(o)   
`상품 조회` - 모든 사용자가 카테고리별로 상품을 조회 합니다. 또한 최신순 정렬 국가별 정렬을 지원합니다 (x)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## 사용방법

Postman documentation에  API 사용방법이 있습니다.

_API 설명서 보러가기 [ApiDocumentation](https://documenter.getpostman.com/view/17264763/2s8YYJogg6)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

*김혜린(OolongTea620)*     
[@velog](https://velog.io/@rlafls9596)     
email   
rlafls9596@gmail.com        
he9596@naver.com

Project Link   
[3rd_ThingsFlow_hyelin](https://github.com/pre-on-boarding-5th-teamE/3rd_ThingsFlow_hyelin)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username

[npm]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[Node-url]: https://nodejs.org/ko/
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white
[Express-url]: https://expressjs.com/
[MySQL]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Javascript]: https://img.shields.io/badge/Javascript-ffb13b?style=for-the-badge&logo=javascript&logoColor=white
[javascript-url]: https://www.javascript.com/
[Seqeulize]: https://img.shields.io/badge/Sequelize-2496ED?style=for-the-badge&logo=sequelize&logoColor=white
[Sequezlie-url]: https://sequelize.org/
