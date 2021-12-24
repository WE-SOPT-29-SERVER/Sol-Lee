1. resize-image
 - 기본 이미지
 
![_110112424_69710754_161925558288469_8334116781389881351_n](https://user-images.githubusercontent.com/76844556/147358216-d35d30d7-09fa-4688-84da-e6f5e5fb39c0.jpeg)

 - 포스트맨으로 사진 전송
 
<img width="844" alt="KakaoTalk_Photo_2021-12-24-23-11-32" src="https://user-images.githubusercontent.com/76844556/147358268-c8a94d93-713a-4070-93ff-b4be115016cf.png">


 - storage에 사진이 두개 저장(원본, 리사이징 후 이미지)

<img width="829" alt="KakaoTalk_Photo_2021-12-24-23-11-28" src="https://user-images.githubusercontent.com/76844556/147358265-494c13b6-21b1-4ccb-a109-3dc30e320e46.png">

 - 리사이징 후 이미지
 
<img width="830" alt="KakaoTalk_Photo_2021-12-24-23-11-23" src="https://user-images.githubusercontent.com/76844556/147358238-831c9bf2-5be8-422c-9482-075fd83ed64d.png">

2. jwt : refresh token

- Access token만 사용시의 문제점 
기존의 Access token만 사용 시, 유효기간에 따라 보안성과 편의성이 결정됨
토큰의 유효기간이 길 경우, 편의성은 높으나 그만큼 보안성이 떨어지게 됨
반대로 토큰의 유효기간이 짧을 경우, 보안성은 높으나 사용자의 편의성이 떨어지게 됨

- Refresh token의 필요성
refresh token은 정보를 포함한 access token과 함께 발급을 받게 되며 access token보다 더 긴 유효기간을 가짐
따라서, access token의 유효기간을 보다 짧은 시간으로 설정하여 유효기간이 만료되었을 때 refresh token을 통해 access token을 재발급 받을 수 있음
=> 정보를 포함한 access token의 유효기간을 짧게 설정해 보안성을 높이고 refresh token의 유무로만 재발급 받아 로그인을 처리할 수 있으니 편의성 또한 높아짐
⚠︎ refresh token은 access token과 달리 id와 secret을 포함하지 않음(refresh token의 유효기간이 길어도 되는 이유)
⚠︎ 구현이 복잡해지고, access token의 만료 시, 재발급 과정에서 요청이 잦아짐
