import React, { useCallback, useState } from 'react'

export default function Bt1() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  return (
    <div>Bài tập 1
      <p>Giá trị count: {count}</p>
      <button onClick={increment}>Tăng giá trị count</button>
    </div>
  )
}
