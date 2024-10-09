import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for a smooth scroll effect
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} style={styles.scrollButton}>
            <img src="up.png" alt="up" width="30px" height="30px"/>
        </button>
      )}
    </>
  );
};

// Optional styling
const styles = {
  scrollButton: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    padding: "10px 20px",
    borderRadius: "60%",
    backgroundColor: "#777a79",
    border: "none",
    cursor: "pointer",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.5)",
  },
};

export default ScrollToTop;
