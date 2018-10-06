/**
 * Todo:
 * Init (with options [show intermediate, intermediate amount of blocks, show glow, parent container, colours?])
 * Set (position, duration(optional))
 *   - the duration can be achieved by applying the `transition-duration` style then removing it when complete
 *   - only return from this when the duration has been completed
 * Reset () - set the bar back to 0% and intermediate to 100%
 */

 var HorizontalLoader = ( function loader( window, document ) {
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
     },

     set: function ( value, duration ) {
       // The resolution of time the duration needs to take - either 's' or 'ms'
       var timeResolution = 's';

       if ( !Number.isInteger( value ) || value < 0 || value > 100 ) {
         console.error( 'Unable to set a value for the Horizontal Loader. The value needs to be an integer between 0 and 100 inclusive.' );
         return this;
       }

       if ( typeof duration === 'undefined' ) {
         console.info( 'Using a default value of 2 seconds for the progress animation duration' );
         duration = 2;
       }

       if ( !Number.isInteger( duration ) ) {
         console.error( 'Unable to set a progress animation duration for the Horizontal Loader. The duration passed is not a integer.' );
         return this;
       }

       if ( duration >= 100 && duration <= 1000) {
         console.info( 'Using a time resolution of miliseconds for the progress animation duration' );
         timeResolution = 'ms';
       }

       console.info( 'Setting the Horizontal Loader progress to', value, 'over', duration + timeResolution );
       return this;
     }
   };
 }( window, document ) )
