import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeToast as closeToastAction } from "../../redux/actions/common";
import ToastComponent from "../../components/Toast";

const ToastContainer = () => {
  const timerRef = useRef();
  const hideRef = useRef();
  const deleRef = useRef();
  const [isHide, setIsHide] = useState(true);
  const [isRender, setIsRender] = useState(false);
  const [lastType, setLastType] = useState(null);

  const isToast = useSelector((state) => state.common.isToast);
  const toastType = useSelector((state) => state.common.toastType);
  const dispatch = useDispatch();
  const closeToast = () => dispatch(closeToastAction());

  useEffect(() => {
    if (isToast) {
      setIsRender(true);

      hideRef.current = setTimeout(() => {
        setIsHide(false);
      }, 300);

      deleRef.current = setTimeout(() => {
        closeToast();
      }, 3000);
    } else {
      setIsHide(true);

      if (isRender) {
        clearTimeout(hideRef.current);
        clearTimeout(deleRef.current);
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
          setIsRender(false);
          setLastType(null);
        }, 800);
      }
    }
  }, [isToast]);

  useEffect(() => {
    if (toastType) setLastType(toastType);
  }, [toastType]);

  useEffect(() => {
    return () => {
      clearTimeout(hideRef.current);
      clearTimeout(deleRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  const onCloseToast = () => {
    closeToast();
  };

  if (!isRender) return null;

  return (
    <ToastComponent
      isHide={isHide}
      toastType={lastType}
      onCloseToast={onCloseToast}
    />
  );
};

export default ToastContainer;
