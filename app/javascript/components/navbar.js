import Vue from "vue";
import TurbolinksAdapter from "vue-turbolinks";

Vue.use(TurbolinksAdapter);

const initNavbar = () => {
  const navbar = document.getElementById("navbar")
  if (navbar) {
    new Vue({
      el: navbar,
      data() {
        return {
          navbarClass: ''
        }
      },
      mounted() {
        console.log("Hello from navbar.js")
        window.addEventListener('scroll', () =>{
          // console.log('scrolling')
          this.updateNavbar();
        })
      },
      methods: {
        updateNavbar() {

          if (window.scrollY >= window.innerHeight) {
            console.log('updating navbar to white')
            this.navbarClass = 'navbar-lewagon-white'
          } else {
            console.log('updating navbar to transparent')
            this.navbarClass = ''
          }
        }
      }
    })
  }
}

export { initNavbar }
