/**
 * Todo:
 * Init (with options [show intermediate, intermediate amount of blocks, show glow, parent container, colours?])
 * Set (position, duration(optional))
 *   - the duration can be achieved by applying the `transition-duration` style then removing it when complete
 *   - only return from this when the duration has been completed
 */

 var HorizontalLoader = ( function loader( window, document ) {
   var loader__container;
   var loader__intermediate;
   var loader__progress;

   var progress = 0;

   /**
    * Number.isInteger Polyfill
    * Taken from Mozilla Developer Network
    * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
    */
    Number.isInteger = Number.isInteger || function( value ) {
      return typeof value === 'number' &&
      isFinite( value ) &&
      Math.floor( value ) === value;
    };

   return {
     init: function ( element, options ) {
       console.info( 'Using', element, 'for the loading bar' );

       loader__container = document.getElementById( element );

       if ( loader__container === null ) {
         console.error( 'Unable to use', element, 'for the loading bar. Is this a valid element ID?' );
         return;
       }

       loader__intermediate = loader__container.getElementsByClassName( 'horizontal-loader__container-intermediate' )[ 0 ];
       loader__progress = loader__container.getElementsByClassName( 'horizontal-loader__container-loaded' )[ 0 ];

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
       } else {
         progress = value;
       }

       if ( typeof duration === 'undefined' ) {
         console.info( 'Using a default value of 2 seconds for the progress animation duration' );
         duration = 2;
       }

       if ( !Number.isInteger( duration ) ) {
         console.error( 'Unable to set a progress animation duration for the Horizontal Loader. The duration is not an integer.' );
         return this;
       }

       if ( duration < 0 ) {
         console.error( 'Unable to set a progress animation duration for the Horizontal Loader. The duration cannot be less than 0.' );
         return this;
       }

       if ( duration >= 100 ) {
         console.info( 'Using a time resolution of miliseconds for the progress animation duration' );
         timeResolution = 'ms';
       }

       console.info( 'Setting the Horizontal Loader progress to', value, 'over', duration + timeResolution );

       loader__intermediate.style.width = ( 100 - progress ) + '%';
       loader__intermediate.style.transition = 'width ' + duration + timeResolution + ' ease-out';
       loader__progress.style.width = progress + '%';
       loader__progress.style.transition = 'width ' + duration + timeResolution + ' ease-out';

       return this;
     },

     reset: function () {
       console.info( 'Resetting the Horizontal Loader' );
       return this.set( 0, 0 );
     },

     increase: function ( amount, duration ) {
       var increase;

       if ( !Number.isInteger( amount ) || amount < 0 || amount > 100 ) {
         console.error( 'Unable to increase the Horizontal Loader. The amount needs to be an integer between 0 and 100 inclusive.' );
         return this;
       }

       console.info( 'Increasing the Horizontal Loader by', amount );
       increase = progress + amount;

       if ( increase > 100 ) {
         console.warn( 'The maximum value for Horizontal Loader is 100. The attempted increase would go to', increase, 'so this has been limited.' );
         increase = 100;
       }

       return this.set( increase, duration );
     },

     decrease: function ( amount, duration ) {
       var decrease;

       if ( !Number.isInteger( amount ) || amount < 0 || amount > 100 ) {
         console.error( 'Unable to decrease the Horizontal Loader. The amount needs to be an integer between 0 and 100 inclusive.' );
         return this;
       }

       console.info( 'Decreasing the Horizontal Loader by', amount );
       decrease = progress - amount;

       if ( decrease < 0 ) {
         console.warn( 'The minimum value for Horizontal Loader is 0. The attempted decrease would go to', decrease, 'so this has been limited.' );
         decrease = 0;
       }

       return this.set( decrease, duration );
     }
   };
 }( window, document ) )
