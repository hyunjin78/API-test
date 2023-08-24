const apiUrl = 'https://open.neis.go.kr/hub/mealServiceDietInfo';
const apiKey = '6e8aea4ef6c14f38b5b23f82f4400089'; // 실제 API 키로 대체

// 필수 매개변수 설정
const educationOfficeCode = 'E10'; // 시도교육청 코드
const schoolCode = '7310213'; // 작전고등학교 학교 코드
const date = '20230824'; // 원하는 날짜 (오늘 날짜)

// JSONP 요청을 위한 URL 생성
const requestUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=${educationOfficeCode}&SD_SCHUL_CODE=${schoolCode}&MLSV_YMD=${date}&callback=?`;

// JSONP 요청
$.ajax({
  url: requestUrl,
  dataType: 'jsonp',
  success: function(data) {
    console.log('받아온 데이터:', data);
    // 데이터 활용
  },
  error: function(error) {
    console.error('오류 발생:', error);
  }
});
