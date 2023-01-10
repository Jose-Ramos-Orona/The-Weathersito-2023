import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string;
  ariaLabel?: string;
  action?: () => void;
}

const Button = ({
  className,
  text,
  action,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className} onClick={action} aria-label={ariaLabel}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
