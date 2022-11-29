import React, { FC, useState } from 'react';
import s from './users.module.css';
type Props = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (arg0: number) => void;
};
const Pagination: FC<Props> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages: Array<number> = [];
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
  let rightPortionPageNumber = portionNumber * pageSize;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div>
        <div className={s.spans}>
          {portionNumber > 1 && (
            <button
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            >
              Left
            </button>
          )}
          {pages
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((item) => {
              return (
                <span
                  className={currentPage === item ? s.selected : ''}
                  key={item}
                  onClick={() => {
                    onPageChange(item);
                  }}
                >
                  {item}
                </span>
              );
            })}
          {pagesCount > portionNumber && (
            <button
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            >
              Right
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
