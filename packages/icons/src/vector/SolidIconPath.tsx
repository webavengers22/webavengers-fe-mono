import React from 'react';

export const solidIconList = {
  //체크박스
  Check: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
      />
    </>
  ),
  Cancel: (
    <>
      <path d="M7 17L17 7" stroke="#1A1712" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 7L17 17" stroke="#1A1712" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  Edit: (
    <path
      d="M6 12H18M12 18L12 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
    />
  ),
  ArrowDown: (
    <>
      <path
        d="M20 9L12.6316 16L5.26316 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  ArrowRight: (
    <>
      <path
        d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
        fill="currentColor"
      />
    </>
  ),
  CaretLeft: (
    <>
      <path
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  CaretRight: (
    <>
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  User: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.16732 5.0013C5.16732 3.4365 6.43584 2.16797 8.00065 2.16797C9.56546 2.16797 10.834 3.4365 10.834 5.0013C10.834 6.56611 9.56546 7.83464 8.00065 7.83464C6.43584 7.83464 5.16732 6.56611 5.16732 5.0013ZM8.00065 3.16797C6.98813 3.16797 6.16732 3.98878 6.16732 5.0013C6.16732 6.01382 6.98813 6.83464 8.00065 6.83464C9.01317 6.83464 9.83398 6.01382 9.83398 5.0013C9.83398 3.98878 9.01317 3.16797 8.00065 3.16797Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33398 9.83464C4.50556 9.83464 3.83398 10.5062 3.83398 11.3346V12.1268C3.83398 12.1389 3.84273 12.1492 3.85463 12.1511C6.60047 12.5994 9.40084 12.5994 12.1467 12.1511C12.1586 12.1492 12.1673 12.1389 12.1673 12.1268V11.3346C12.1673 10.5062 11.4957 9.83464 10.6673 9.83464H10.4401C10.4225 9.83464 10.405 9.83741 10.3883 9.84287L9.81133 10.0313C8.63478 10.4155 7.36652 10.4155 6.18997 10.0313L5.61296 9.84287C5.59626 9.83741 5.5788 9.83464 5.56123 9.83464H5.33398ZM2.83398 11.3346C2.83398 9.95392 3.95327 8.83464 5.33398 8.83464H5.56123C5.68423 8.83464 5.80645 8.85408 5.92337 8.89226L6.50038 9.08067C7.47523 9.39899 8.52607 9.39899 9.50093 9.08067L10.0779 8.89226C10.1949 8.85408 10.3171 8.83464 10.4401 8.83464H10.6673C12.048 8.83464 13.1673 9.95392 13.1673 11.3346V12.1268C13.1673 12.629 12.8034 13.0571 12.3078 13.138C9.45525 13.6038 6.54605 13.6038 3.6935 13.138C3.19791 13.0571 2.83398 12.629 2.83398 12.1268V11.3346Z"
        fill="currentColor"
      />
    </>
  ),
  Heart: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.16602 6.68653C2.16602 4.8862 3.74544 3.5 5.59935 3.5C6.555 3.5 7.39591 3.94809 7.99935 4.52789C8.60279 3.94809 9.4437 3.5 10.3993 3.5C12.2533 3.5 13.8327 4.8862 13.8327 6.68653C13.8327 7.91978 13.3068 9.00429 12.5781 9.92103C11.8508 10.8362 10.8993 11.6129 9.98833 12.244C9.64037 12.485 9.28836 12.7074 8.9662 12.8715C8.66369 13.0255 8.31585 13.1667 7.99935 13.1667C7.68285 13.1667 7.33501 13.0255 7.0325 12.8715C6.71034 12.7074 6.35832 12.485 6.01037 12.244C5.09938 11.6129 4.14793 10.8362 3.42056 9.92103C2.69194 9.00429 2.16602 7.91978 2.16602 6.68653ZM5.59935 4.5C4.21318 4.5 3.16602 5.5194 3.16602 6.68653C3.16602 7.62219 3.56321 8.49333 4.20341 9.29881C4.84487 10.1059 5.70796 10.8179 6.57984 11.422C6.90976 11.6505 7.22051 11.845 7.48632 11.9804C7.77178 12.1258 7.93712 12.1667 7.99935 12.1667C8.06157 12.1667 8.22692 12.1258 8.51238 11.9804C8.77819 11.845 9.08894 11.6505 9.41885 11.422C10.2907 10.8179 11.1538 10.1059 11.7953 9.29881C12.4355 8.49333 12.8327 7.62219 12.8327 6.68653C12.8327 5.5194 11.7855 4.5 10.3993 4.5C9.60325 4.5 8.85988 4.97561 8.39573 5.57928C8.30108 5.70237 8.15462 5.77451 7.99935 5.77451C7.84408 5.77451 7.69762 5.70237 7.60297 5.57928C7.13882 4.97561 6.39545 4.5 5.59935 4.5Z"
      fill="currentColor"
    />
  ),
  Alarm: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9992 3C12.9992 2.44772 12.5515 2 11.9992 2C11.4469 2 10.9992 2.44772 10.9992 3V3.75H10.4418C8.21672 3.75 6.37512 5.48001 6.23622 7.70074L6.01522 11.2342C5.93096 12.5814 5.47867 13.8797 4.70761 14.9876C4.01093 15.9886 4.63115 17.3712 5.84208 17.5165L9.24921 17.9254V19C9.24921 20.5188 10.4804 21.75 11.9992 21.75C13.518 21.75 14.7492 20.5188 14.7492 19V17.9254L18.1563 17.5165C19.3673 17.3712 19.9875 15.9886 19.2908 14.9876C18.5197 13.8797 18.0674 12.5814 17.9832 11.2342L17.7622 7.70074C17.6233 5.48001 15.7817 3.75 13.5566 3.75H12.9992V3ZM10.4418 5.25C9.00879 5.25 7.82275 6.36417 7.7333 7.79438L7.5123 11.3278C7.4109 12.949 6.86664 14.5112 5.9388 15.8444C5.88844 15.9168 5.93327 16.0167 6.0208 16.0272L9.75846 16.4757C11.2469 16.6543 12.7515 16.6543 14.2399 16.4757L17.9776 16.0272C18.0651 16.0167 18.11 15.9168 18.0596 15.8444C17.1318 14.5112 16.5875 12.949 16.4861 11.3278L16.2651 7.79438C16.1757 6.36417 14.9896 5.25 13.5566 5.25H10.4418ZM11.9992 20.25C11.3089 20.25 10.7492 19.6904 10.7492 19V18.25H13.2492V19C13.2492 19.6904 12.6896 20.25 11.9992 20.25Z"
      fill="currentColor"
    />
  ),
  Filter: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9858 5.42367C14.0077 4.97906 9.99234 4.97906 6.01418 5.42367C5.74501 5.45376 5.61538 5.76941 5.78573 5.97998L9.30275 10.3275C10.5626 11.8849 11.25 13.8275 11.25 15.8307V18.7199L12.75 19.8199V15.8307C12.75 13.8275 13.4374 11.8849 14.6973 10.3275L18.2143 5.97998C18.3846 5.76941 18.255 5.45376 17.9858 5.42367ZM5.84757 3.93296C9.93646 3.47596 14.0635 3.47596 18.1524 3.93296C19.5994 4.09467 20.2962 5.79146 19.3805 6.92339L15.8634 11.2709C14.8195 12.5614 14.25 14.1709 14.25 15.8307V21.3C14.25 21.5826 14.0911 21.8413 13.839 21.969C13.5869 22.0968 13.2844 22.0719 13.0565 21.9048L10.0565 19.7048C9.86382 19.5635 9.75 19.3389 9.75 19.1V15.8307C9.75 14.1709 9.18048 12.5614 8.13656 11.2709L4.61954 6.92339C3.70385 5.79146 4.40064 4.09467 5.84757 3.93296Z"
      fill="currentColor"
    />
  ),
};
