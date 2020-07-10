import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

let app = new Framework7({
  on: {
    // each object key means same name event handler
    pageInit: function (page) {
      //console.log('Page initialized');
      //page.$el.find('.button').toggleClass('button-active')
      // let x = page.el.getElementsByClassName('button')
     //$$('.button').toggleClass('button-active');
    }
  },

root: '#app', // App root element
  component: App, // App main component

  name: 'FacemeshF7', // App name
  theme: 'auto', // Automatic theme detection



  // App routes
  routes: routes,
});