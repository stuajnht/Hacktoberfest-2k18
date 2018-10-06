/**
 * Todo:
 * Init (with options [show intermediate, intermediate amount of blocks, show glow, parent container, colours?])
 * Set (position, duration(optional))
 *   - the duration can be achieved by applying the `transition-duration` style then removing it when complete
 *   - only return from this when the duration has been completed
 * Reset () - set the bar back to 0% and intermediate to 100%
 */

 var horizontalLoader = ( function loader( window, document ) {
   var loader__container;

   return {
     init: function ( element, options ) {
       console.info( 'Using', element, 'for the loading bar' );

       loader__container = document.getElementById( element );

       if ( loader__container === null ) {
         console.error( 'Unable to use', element, 'for the loading bar. Is this a valid element ID?' );
       }

       return this;
     },

     show: function () {
       console.info( 'Showing the loading bar' );

       loader__container.style.opacity = 1;

       return this;
     },

     hide: function () {
       console.info( 'Hiding the loading bar' );

       loader__container.style.opacity = 0;

       return this;
     }
   };
 }( window, document ) )
