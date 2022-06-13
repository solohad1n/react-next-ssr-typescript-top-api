import React, { KeyboardEvent, useEffect, useState } from 'react'
import StarIcon from './star.svg';
import styles from './Rating.module.css'
import cs from 'classnames'
import { IRatingProps } from './Rating.props';

export const Rating = ({ rating, isEditable = false, setRating }: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (i: number): void => {
    if (isEditable) {
      construcRating(i);
    }
  };

  const changeDisplayOnClick = (i: number): void => {
    if (isEditable && setRating) {
      setRating(i);
    }
  };

  const changeDisplayOnSpace = (i: number, event: KeyboardEvent<SVGElement>): void => {
    if (event.code == 'Space' && setRating) {
      setRating(i);
    }
  };

  const construcRating = (currentRating: number) => {
    const updateRating = ratingArray.map((_, i: number): JSX.Element => {
      return (
        <span
          className={cs(styles.star, {
            [styles.filled]: currentRating > i,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeDisplayOnClick(i + 1)}
        >
          <StarIcon tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event: KeyboardEvent<SVGElement>) => changeDisplayOnSpace(i + 1, event)}
          />
        </span>
      );
    }
    );
    setRatingArray(updateRating);
  };

  useEffect(() => {
    construcRating(rating)

    if (setRating) {
      setTimeout(() => {
        setRating(5)
      }, 3000)
    }
  }, [])

  useEffect(() => {
    construcRating(rating)
  }, [rating])

  return <div>
    {ratingArray.map((icon: JSX.Element, i: number): JSX.Element => {
      return <span key={i}>
        {icon}
      </span>
    })}
  </div>
};
