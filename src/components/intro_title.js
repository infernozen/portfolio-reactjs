import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";

const IntroTitle = () => {
  const [text] = useState(`Hi, I'm Rosan David,`);
  const [revealedTitle, setRevealedTitle] = useState("");
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        let index = -1;

        const revealTitle = () => {
          if (index < text.length) {
            index++;
            setRevealedTitle((prevText) => prevText + text.charAt(index));
            setTimeout(revealTitle, 60);
          } else {
            setIsTitleComplete(true);
          }
        };

        revealTitle();
        observer.unobserve(titleRef.current);
      }
    });

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, [text]);

  return (
    <div ref={titleRef}>
      {revealedTitle}
      {isTitleComplete && <IntroBody />}
    </div>
  );
};

const IntroBody = () => {
  const [revealedBody, setRevealedBody] = useState("");
  const [text] = useState(
    "A college student passionate about cloud computing and software development"
  );
  const bodyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        let index = -1;

        const revealBody = () => {
          if (index < text.length) {
            index++;
            setRevealedBody((prevText) => prevText + text.charAt(index));
            setTimeout(revealBody, 25);
          }
        };

        revealBody();
        observer.unobserve(bodyRef.current);
      }
    });

    observer.observe(bodyRef.current);

    return () => {
      observer.disconnect();
    };
  }, [text]);

  return <div ref={bodyRef} className="intro-body">{revealedBody}</div>;
};

export default IntroTitle;
