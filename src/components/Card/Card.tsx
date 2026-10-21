import type { ReactNode } from 'react';
import classes from './Card.module.css';

type CardProps = {
    title: string;
    icon: ReactNode;
    message: string;
}

const Card = ({
    title,
    icon,
    message
}: CardProps) => {
  return (
    <div className={classes.card_container}>
      <div className={classes.icon}>{icon}</div>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.message}>{message}</p>
    </div>
  )
}

export default Card
