(function () {
      var colors = [
        { start: 'rgba(255,183,197,0.9)', end: 'rgba(255,197,208,0.9)', deg: 120 },
        { start: 'rgba(255,189,189,0.9)', end: 'rgba(227,170,181,0.9)', deg: 120 },
        { start: 'rgba(212,152,163,0.9)', end: 'rgba(242,185,196,0.9)', deg: 120 },
      ];

      var DELAY    = 200;   // ms between petals
      var MIN_SIZE = 10;
      var MAX_SIZE = 20;
      var FALL_SPD = 1;     // higher = slower

      var blows = ['blow-soft-left','blow-medium-left','blow-soft-right','blow-medium-right'];
      var sways = ['sway-0','sway-1','sway-2','sway-3','sway-4','sway-5','sway-6','sway-7','sway-8'];

      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      function createPetal() {
        var petal = document.createElement('div');
        petal.className = 'sakura';

        var height = rand(MIN_SIZE, MAX_SIZE);
        var width  = height - Math.floor(rand(0, MIN_SIZE) / 3);
        var color  = pick(colors);

        var fallTime = (document.documentElement.clientHeight * 0.007 +
                        Math.round(Math.random() * 5)) * FALL_SPD;
        var blowAnim = pick(blows);
        var swayAnim = pick(sways);
        var blowDur  = (fallTime > 30 ? fallTime : 30) - 20 + rand(0, 20);

        var animation = [
          'fall '      + fallTime + 's linear 0s 1',
          blowAnim + ' ' + blowDur  + 's linear 0s infinite',
          swayAnim + ' ' + rand(2,4) + 's linear 0s infinite'
        ].join(', ');

        petal.style.background     = 'linear-gradient(' + color.deg + 'deg,' + color.start + ',' + color.end + ')';
        petal.style.animation      = animation;
        petal.style.borderRadius   = rand(MAX_SIZE, MAX_SIZE + Math.floor(Math.random() * 10)) + 'px ' +
                                     rand(1, Math.floor(width / 4)) + 'px';
        petal.style.height         = height + 'px';
        petal.style.width          = width  + 'px';
        petal.style.left           = (Math.random() * document.documentElement.clientWidth - 100) + 'px';
        petal.style.marginTop      = -(Math.floor(Math.random() * 20) + 15) + 'px';

        function checkRemove() {
          var r = petal.getBoundingClientRect();
          var inView = r.top >= 0 && r.left >= 0 &&
                       r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                       r.right  <= (window.innerWidth  || document.documentElement.clientWidth);
          if (!inView) petal.remove();
        }

        petal.addEventListener('animationend',       checkRemove);
        petal.addEventListener('animationiteration', checkRemove);

        document.body.appendChild(petal);
        setTimeout(createPetal, DELAY);
      }

      createPetal();
    })();