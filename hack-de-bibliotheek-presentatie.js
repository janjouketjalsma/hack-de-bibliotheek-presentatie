import Reveal from 'reveal.js'
if (Meteor.isClient) {
  Meteor.startup( function() {
    Reveal.initialize({
      loop: true,
      controls: true,
      progress: true,
      transition: "linear",
      "background-transition": "slide",
      theme: "moon"
    });
  });
}
