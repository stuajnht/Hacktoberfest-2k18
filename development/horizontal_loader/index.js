/**
 * Todo:
 * Init (with options [show intermediate, intermediate amount of blocks, show glow, parent container, colours?])
 * Show () - change opacity of overall bar to 1
 * Set (position, duration(optional))
 *   - the duration can be achieved by applying the `transition-duration` style then removing it when complete
 *   - only return from this when the duration has been completed
 * Hide () - change opacity of overall bar to 0
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

       return loader__container;
     }
   };
 }( window, document ) )
