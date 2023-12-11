import React from 'react';
import { useSelector } from 'react-redux';

export default function SeatDetail() {
  const data = useSelector((state) => {
    return state.movieSlice.detail;
  });

  return (
    <div>
      <h1>HANG SO {data.hang}</h1>
      <div>
        {data.danhSachGhe.map((item, index) => (
          <h3  key={index}> SO GHE: {item.soGhe}
          
          </h3>
          
        ))}
      </div>
    </div>
  );
}
