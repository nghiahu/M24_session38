import React, { useState, useCallback } from 'react';

export default function Bt3() {
    const [color, setColor] = useState('black');
  const handleChangeColor = useCallback((event:any) => {
    setColor(event.target.value);
  }, []);

  return (
    <div>
        Bài tập 3
      <h2>Chọn màu</h2>
      <input 
        type="color" 
        value={color} 
        onChange={handleChangeColor} 
      />
      <p>Màu đã chọn: <span style={{ color }}>{color}</span></p>
    </div>
  );
}
