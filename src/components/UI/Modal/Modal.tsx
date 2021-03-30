import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;
interface IProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ isVisible, toggleVisibility, children }) => {
  const handleEscape = useCallback(
    event => {
      if (event.keyCode === 27) {
        toggleVisibility();
      }
    },
    [toggleVisibility]
  );

  useEffect(() => {
    if (isVisible) document.addEventListener('keydown', handleEscape, false);
    return () => document.removeEventListener('keydown', handleEscape, false);
  }, [handleEscape, isVisible]);

  return isVisible
    ? ReactDOM.createPortal(
        <>
          <div
            className={styles.Overlay}
            onClick={() => toggleVisibility()}
          ></div>
          <div className={styles.Wrapper}>
            <div className={styles.Modal}>
              <div className={styles.ModalClose}>
                <button
                  type='button'
                  className={styles.ModalCloseButton}
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={() => toggleVisibility()}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </>,
        modalRoot
      )
    : null;
};

export default Modal;
