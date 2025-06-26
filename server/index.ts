import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import imageRoutes from './routes/image.js'; // .js 확장자 주의

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 이미지 생성 및 PDF 다운로드 API 라우터
app.use('/api', imageRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});