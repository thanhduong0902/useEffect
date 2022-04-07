import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleVisible = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    document.addEventListener("scroll", handleVisible);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <h1 className="icon">
          <i
            className="fa fa-chevron-circle-up fa-sm"
            onClick={() => scrollToTop()}
          ></i>
        </h1>
      )}
    </div>
  );
}

export default BackToTop;
