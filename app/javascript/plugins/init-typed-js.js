import Typed from 'typed.js'

const initTypedJs = () => {
  var typed = new Typed('#typed', {
    strings: ["Learn to code.", "Change your life."],
    typeSpeed: 30,
    loop: true
  });
}

export { initTypedJs }
