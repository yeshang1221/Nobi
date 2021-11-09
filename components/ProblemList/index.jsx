import { data } from './data';
import React, { useState, useEffect } from 'react';
function ProblemList(props) {
  const { problem } = props;
  console.log(props);
  return (
    <>
      {/* {problem.map((v, i) => {
        return (
          <>
            <li>
              <span className='question-list__title'>{v.title}</span>
              <span className='question-list__content'>
                {v.answer}
                <a href={v.link} target='_blank' rel='noreferrer'>
                  {v.alt}
                </a>
                。
              </span>
            </li>
            ;
          </>
        );
      })} */}
    </>
  );
}
export default ProblemList;
