import Typed from "typed.js";

const fn = () => {
  return new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 40,
  });
};
window.attachEvent("onload", fn);
