window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelAnimFrame = (function(_id) {
  return window.cancelAnimationFrame ||
    window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    function(_id) { window.clearTimeout(id); };
})();

/* trigger */
jQuery(function() {
  jQuery('.triggerBasic, .trigger1, .trigger2, .triggerTB');
    jQuery(window).scroll(function(){
      var windowHeight = jQuery(window).height(),
      topWindow = jQuery(window).scrollTop();
      jQuery('.triggerBasic, .trigger1, .trigger2, .triggerTB').each(function(){
      var targetPosition = jQuery(this).offset().top;
//繧ｨ繝ｼ繧ｸ繧ｧ繝ｳ繝亥愛螳�
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        // 繧ｹ繝槭�繝医ヵ繧ｩ繝ｳ逕ｨ繧ｳ繝ｼ繝�
if(topWindow > targetPosition - windowHeight + 50){
        jQuery(this).addClass("active");
        jQuery(this).removeClass("standby");
      }
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        // 繧ｿ繝悶Ξ繝�ヨ逕ｨ繧ｳ繝ｼ繝�
if(topWindow > targetPosition - windowHeight + 50){
        jQuery(this).addClass("active");
        jQuery(this).removeClass("standby");
      }
    } else {
        // PC逕ｨ繧ｳ繝ｼ繝�
if(topWindow > targetPosition - windowHeight + 300){
        jQuery(this).addClass("active");
        jQuery(this).removeClass("standby");
      }
    }
//繧ｨ繝ｼ繧ｸ繧ｧ繝ｳ繝亥愛螳� end
    });
  });
});

function closest(el, selector) {
  // type el -> Object
  // type select -> String
  var matchesFn;
  // find vendor prefix
  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }
    return false;
  })
  var parent;
  // traverse parents
  while (el) {
    parent = el.parentElement;
    if (parent && parent[matchesFn](selector)) {
      return parent;
    }
    el = parent;
  }
  return null;
}

function getCssProperty(elem, property) {
  return window.getComputedStyle(elem, null).getPropertyValue(property);
}
var easingEquations = {
  easeOutSine: function(pos) {
    return Math.sin(pos * (Math.PI / 2));
  },
  easeInOutSine: function(pos) {
    return (-0.5 * (Math.cos(Math.PI * pos) - 1));
  },
  easeInOutQuint: function(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow((pos - 2), 5) + 2);
  }
};

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return ((top >= 0) && (bottom <= window.innerHeight));
}

function CreateElementWithClass(elementName, className) {
  var el = document.createElement(elementName);
  el.className = className;
  return el;
}

function createElementWithId(elementName, idName) {
  var el = document.createElement(elementName);
  el.id = idName;
  return el;
}

function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  if (msie > 0 || trident > 0) {
    // IE 10 or older => return version number
    // return 'ie'+parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    return 'ie';
  }
  return false;
}


var Base = function() {
  ! function Base() {
    //new Menu();
    //new Sticky();
    // new PageTop();
    new ObjFit();
    // new Faq();
    // new Anchor();
  }();
  return Base;
};

window.addEventListener('DOMContentLoaded', function() {
  if (window.jQuery) window.Velocity = window.jQuery.fn.velocity;
  if (detectIE()) {
    document.body.classList.add(detectIE());
  }
  new Base();
});

var Sticky = function () {
  function Sticky() {
    var s = this;
    this._target = document.getElementById('header');
    this._basic_height = this._target.clientHeight;
    this._mobile = document.getElementById('bHeader__bottom');
    this._btnFixed = document.querySelector('.btnFixed');
    this._for_sp = function(top) {
      s._target.style.left = 0;
      document.body.style.paddingTop = s._target.clientHeight + 'px';
      if (top > 0) {
        s._target.classList.add('fixed');
        document.body.style.paddingTop = s._target.clientHeight + 'px';
      } else {
        s._target.classList.remove('fixed');
        document.body.style.paddingTop = 0;
      }
    }
    this._for_pc = function (top, _left) {
      s._mobile.style.top = 0;
      var offset = s._target.querySelector('.bHeader__top').clientHeight;
      document.body.style.paddingTop = s._mobile.clientHeight + 'px';
      if (top > offset) {
        s._target.classList.add('fixed');
        s._mobile.style.left = -_left + 'px';
        document.body.style.paddingTop = s._mobile.clientHeight + 'px';
      } else {
        document.body.style.paddingTop = 0;
        s._target.classList.remove('fixed');
        s._mobile.style.left = 0;
        document.body.style.paddingTop = 0;
      }
    };
    this.handling = function () {
      var _top = document.documentElement.scrollTop || document.body.scrollTop;
      var _left = document.documentElement.scrollLeft || document.body.scrollLeft;
      if (window.innerWidth < 769) {
        s._for_sp(_top);
      } else {
        s._for_pc(_top, _left);
      }
    };
    window.addEventListener('scroll', s.handling, false);
    window.addEventListener('resize', s.handling, false);
    window.addEventListener('load', s.handling, false);
  }
  return Sticky;
}();

var Menu = (function() {
  function Menu() {
    var m = this;
    this._target = document.getElementById('icon_nav');
    this._mobile = document.getElementById('nav');
    this._header = document.getElementById('header');
    this._target.addEventListener('click', function() {
      if (this.classList.contains('open')) {
        this.classList.remove('open');
        m._mobile.classList.remove('open');
        m._mobile.style.height = 0;
        document.body.style.overflow = 'inherit';
      } else {
        this.classList.add('open');
        m._mobile.classList.add('open');
        document.body.style.overflow = 'hidden';
        m._mobile.style.height = window.innerHeight + 'px';
        m._mobile.style.top = 0;
      }
    })
    this._reset = function() {
      if (m._target.classList.contains('open')) {
        if (window.innerWidth > 768) {
          m._target.classList.remove('open');
          m._mobile.classList.remove('open');
          document.body.style.overflow = 'auto';
          m._mobile.style.height = 'auto';
          document.body.style.paddingTop = m._header.clientHeight + 'px';
          m._mobile.style.height = 'auto';
        } else {
          m._mobile.style.height = window.innerHeight + 'px';
          m._mobile.style.top = 0;
        }
      } else {
        if (window.innerWidth < 769) {
          m._mobile.style.height = 0;
        } else {
          m._mobile.style.height = 'auto';
        }
      }
    }
    this._reset();
    window.addEventListener('resize', m._reset, false);
  }
  return Menu;
})();

var PageTop = (function() {
  function PageTop() {
    var pa = this;
    this._target = document.getElementById('pagetop');
    this.flag_start = false;
    this.stopEverything = function() {
      pa.flag_start = false;
    }
    this.scrollToY = function(scrollTargetY, speed, easing) {
      var scrollY = window.scrollY || window.pageYOffset,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;
      var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

      function tick() {
        if (pa.flag_start) {
          currentTime += 1 / 60;
          var p = currentTime / time;
          var t = easingEquations[easing](p);
          if (p < 1) {
            requestAnimFrame(tick);
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
          } else {
            window.scrollTo(0, scrollTargetY);
          }
        }
      }
      tick();
    }
    this._target.addEventListener('click', function(e) {
      e.preventDefault();
      pa.flag_start = true;
      pa.scrollToY(0, 1000, 'easeOutSine');
    })
    document.querySelector("body").addEventListener('mousewheel', pa.stopEverything, false);
    document.querySelector("body").addEventListener('DOMMouseScroll', pa.stopEverything, false);
  }
  return PageTop;
})();

var ObjFit = (function(){
  function ObjFit(){
    var o =  this;
    this._els = document.querySelectorAll('.wrap_obj');
    this._handling = function(){
      Array.prototype.forEach.call(o._els,function(el){
        var _src = el.querySelector('img').src;
        el.style.backgroundImage = "url("+_src+")";
      })
    }
    if(detectIE()) {
      o._handling();
    }
  }
  return ObjFit;
})();


/* images pc <---> sp */
(function () {
  var PicturePolyfill = (function () {
    function PicturePolyfill() {
      var _this = this;
      this.pictures = [];
      this.onResize = function () {
        var width = document.body.clientWidth;
        for (var i = 0; i < _this.pictures.length; i = (i + 1)) {
          _this.pictures[i].update(width);
        };
      };
      if ([].includes) return;
      var picture = Array.prototype.slice.call(document.getElementsByTagName('picture'));
      for (var i = 0; i < picture.length; i = (i + 1)) {
        this.pictures.push(new Picture(picture[i]));
      };
      window.addEventListener("resize", this.onResize, false);
      this.onResize();
    }
    return PicturePolyfill;
  }());
  var Picture = (function () {
    function Picture(node) {
      var _this = this;
      this.update = function (width) {
        width <= _this.breakPoint ? _this.toSP() : _this.toPC();
      };
      this.toSP = function () {
        if (_this.isSP) return;
        _this.isSP = true;
        _this.changeSrc();
      };
      this.toPC = function () {
        if (!_this.isSP) return;
        _this.isSP = false;
        _this.changeSrc();
      };
      this.changeSrc = function () {
        var toSrc = _this.isSP ? _this.srcSP : _this.srcPC;
        _this.img.setAttribute('src', toSrc);
      };
      this.img = node.getElementsByTagName('img')[0];
      this.srcPC = this.img.getAttribute('src');
      var source = node.getElementsByTagName('source')[0];
      this.srcSP = source.getAttribute('srcset');
      this.breakPoint = Number(source.getAttribute('media').match(/(\d+)px/)[1]);
      this.isSP = !document.body.clientWidth <= this.breakPoint;
      this.update();
    }
    return Picture;
  }());
  new PicturePolyfill();
}());
//Go top footer
$(document).ready(function() {
	$(window).scroll(function() {
    $('#go-top').stop().animate({
      right: '74px'
    }, 500);
	});
	$('#go-top').click(function() {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 500, function() {
			$('#go-top').stop().animate({
			}, 500);
		});
	});
});