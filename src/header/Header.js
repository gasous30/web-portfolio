import React from "react";
import "./Header.scss";
import { useEffect, useState, useRef } from "react";
import { IconInstagram, IconGithub, IconLinkedin } from "../asset/icon";

const words = [
  "BAGAS",
  "FROM INDONESIA",
  "A STUDENT",
  "STOPPER", //THIS WONT BE SHOWN
];

const Header = (props) => {
  const headerRef = useRef();

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1) {
      setIndex(0);
      setSubIndex(0);
      setReverse(false);
      return;
    }

    setTimeout(() => {
      if (
        subIndex === words[index].length + 1 &&
        index !== words.length - 1 &&
        !reverse
      ) {
        setReverse(true);
        return;
      }
    }, 1000);

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 20 : 50));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div ref={headerRef} id={props.id} className="hero">
      <div className="darker">
        <h1>
          I AM <b>{`${words[index].substring(0, subIndex)}`}</b>
          <span id="blinker">|</span>
        </h1>
        <div className="icon-medsos">
          <IconInstagram className="icon" />
          <IconGithub className="icon" />
          <IconLinkedin className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
