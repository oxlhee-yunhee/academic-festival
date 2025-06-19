import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);         // 선택된 파일
  const [preview, setPreview] = useState(null);   // 미리보기 이미지 URL

  // 파일 선택 시
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile)); // 미리보기용 URL 생성
  };

  // 업로드 버튼 클릭 시
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      alert(`✅ 업로드 성공: ${result.message}`);
    } catch (err) {
      alert('❌ 업로드 실패');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>사진 업로드</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} accept="image/*" />
        <button type="submit" style={{ marginLeft: '10px' }}>업로드</button>
      </form>

      {/* 이미지 미리보기 */}
      {preview && (
        <div style={{ marginTop: '1rem' }}>
          <h3>미리보기</h3>
          <img
            src={preview}
            alt="preview"
            style={{
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '4px'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Upload;
