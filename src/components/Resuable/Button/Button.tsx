import classes from './Button.module.scss';

interface IProps {
  text: string;
  bgColor: string;
  testID: string;
  action: () => void;
}

const Button: React.FC<IProps> = ({ text, bgColor, testID, action }) => (
  <button
    onClick={action}
    className={classes.Btn}
    style={{ backgroundColor: `${bgColor}` }}
    data-testid={testID}
  >
    {text}
  </button>
);

export default Button;
