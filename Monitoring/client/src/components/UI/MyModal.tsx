import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { transitionConfig } from "@/services/utils/constants";

export function MyModal({
  children,
  show,
}: {
  children: JSX.Element;
  show: boolean;
}) {
  const nodeRef = useRef(null);
  const transConf = transitionConfig();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={transConf.duration}
      unmountOnExit
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...transConf.defaultStyle,
            ...transConf.transitionStyles[state],
          }}
        >
          <div className="dialog">
            <div className="dialogContent">{children}</div>
          </div>
        </div>
      )}
    </CSSTransition>
  );
}
