import type {ButtonHTMLAttributes, CSSProperties } from 'react'
import type { IconType } from 'react-icons';
import classes from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    padding?: string;
    width?: string;
    backgroundColor?: string;
    fontSize?: string;
    icon?: IconType;
    className?: string;
}

const Button = ({
    title,
    padding,
    width,
    backgroundColor,
    fontSize,
    icon: Icon,
    type = "button",
    className = "",
    ...rest
}: ButtonProps) => {

    const dynamicStyle = {
        "--btn-padding": padding,
        "--btn-width": width,
        "--btn-bgColor": backgroundColor,
        "--btn-font-size": fontSize
    } as CSSProperties;

  return (
    <button 
      className={`${classes.btn} ${className}`.trim()}
      style={dynamicStyle}
      type={type}
      {...rest}
    >
        {Icon && <Icon className={classes.btn_icon} />}
        <span>{title}</span>
    </button>
  )
}

export default Button
