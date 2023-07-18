# 본인 노드 실행환경
FROM node:18.16.1-alpine
# 작업 디렉토리 정의
WORKDIR /frontend
# 필요한 파일 복사
COPY package.json package-lock.json ./
# 리액트의 필요한 파일 설치
RUN npm install
# 프로젝트의 나머지 부분 복사
COPY . ./
# 컨테이너에 특정 포트 수신
EXPOSE 3000