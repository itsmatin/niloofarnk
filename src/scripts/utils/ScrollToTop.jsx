import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1100);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
}

export default withRouter(ScrollToTop);
