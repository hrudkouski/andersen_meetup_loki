import cls from './Button.module.css';
import {classNames} from "../../lib/classNames";

export const ButtonVariant = {
  CLEAR: 'clear',
  OUTLINE: 'outline',
  BACKGROUND: 'background',
}

export const ButtonSize = {
  M: 'size_m',
  L: 'size_l',
  XL: 'size_xl',
}


export const Button = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.OUTLINE,
    disabled,
    size = ButtonSize.L,
    ...otherProps
  } = props;

  const mods = {[cls.disabled]: disabled};

  const additional = [className, cls[variant], cls[size]];

  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};