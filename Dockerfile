# 베이스 이미지 설정
FROM node:18-alpine 

# 작업 디렉토리 설정
WORKDIR /app 

# package.json과 package-lock.json 복사
COPY package*.json ./

# Next.js 의존성 설치
RUN npm install 

# 프로젝트 소스 복사
COPY . .

# 빌드
RUN npm run build 

# 포트 노출
EXPOSE 3000 

# 실행 명령어
CMD ["npm", "run", "start"]