import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Upload from './components/Upload';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>의료진용 상처 관리 시스템</h1>
        <ul>
          <li><Link to="/login">환자 로그인 / 회원가입</Link></li>
          <li><Link to="/upload">사진 업로드</Link></li>
          <li><Link to="/graph">상처 경과 확인 그래프</Link></li>
          <li><Link to="/guide">드레싱 및 관리 방법 안내</Link></li>
        </ul>

        <Routes>
          {/* 화면에 보일 컴포넌트 라우팅 */}
          <Route path="/upload" element={<Upload />} />
          {/* 나중에 아래 추가하면 됨 */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/graph" element={<Graph />} /> */}
          {/* <Route path="/guide" element={<Guide />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
