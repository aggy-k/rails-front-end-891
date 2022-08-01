// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
// import "controllers"
// import "components"
import "bootstrap"

import { initNavbar } from "./components/navbar";
import { initTypedJs } from "./plugins/init-typed-js";


document.addEventListener('turbo:load', () =>{
  initNavbar();
  initTypedJs();
})

