import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetail } from './MovieSlice';

export default function Movie() {
 let dispatch = useDispatch();
 let handelViewDetail = (ticket) => {
  dispatch((setDetail(ticket)))
 }
 
 
 
  // useState
  const [formValue, setFormValue] = useState({
    username: "",
  });

  const [isBooked, setIsBooked] = useState(false);

  const handleChangeForm = (e) => {
    const { value, name } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handelBook = () => {
    console.log(formValue.username);
    setIsBooked(true);
  };

  const movieList = useSelector((state) => state.movieSlice.movieArr);

  const renderMovieList = () => {
    return movieList.map((movie, index) => (
      <div key={index} className='card mb-4'>
        <div className='card-body'>
          <h4  className='card-title'>{movie.hang}</h4>
          <div className='row'>
            {movie.danhSachGhe.map((ghe, gheIndex) => (
              <div key={gheIndex} className='col-4 mb-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>{ghe.soGhe}</h5>
                    <p className='card-text'>{ghe.gia} VNĐ</p>
                    <button onClick={() => { handelViewDetail(movie); handelBook(); }} className='btn btn-primary'>
  Book Now
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='container'>
      <input
        name='username'
        onChange={handleChangeForm}
        value={formValue.username}
        className='form-control'
        placeholder='Name'
        type='text'
      />
      <form>
        {isBooked && (
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
             
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <textarea
                    style={{ resize: 'none', outline: 'none' }}
                    name='nameTb'
                    id='nameTb'
                    cols='20'
                    rows='10'
                    value={formValue.username}
                    readOnly
                  ></textarea>
                </td>
              
              </tr>
            </tbody>
          </table>
        )}
      </form>
      {renderMovieList()}
    </div>
  );
}
