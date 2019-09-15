var FlipClock = function(selector) {
	var animationEndEvents = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd';

	var me = this;

	me.mainEl = $(selector);

	me.frontTopEl    = me.mainEl.find('div.flip-top.flip-front');
	me.frontBottomEl = me.mainEl.find('div.flip-bottom.flip-front');
	me.backTopEl     = me.mainEl.find('div.flip-top.flip-back');
	me.backBottomEl  = me.mainEl.find('div.flip-bottom.flip-back');

	me.frontTopEl.on(animationEndEvents, function(event) {
		me.frontTopEl.removeClass('flip-top-animate');

		me.frontTopEl.find('span').html(me.nextNumber);
		me.frontBottomEl.find('span').html(me.nextNumber);

		me.frontBottomEl.addClass('flip-bottom-animate');
	});

	me.frontBottomEl.on(animationEndEvents, function(event) {
		me.frontBottomEl.removeClass('flip-bottom-animate');

		me.backTopEl.find('span').html(me.nextNumber);
		me.backBottomEl.find('span').html(me.nextNumber);
	});

	return {
		update: function(number) {
			if (number == me.nextNumber)
				return;



			me.nextNumber = number;
			me.frontTopEl.addClass('flip-top-animate');
			me.backTopEl.find('span').html(me.nextNumber);
		}
	}
};

var FlipClockManager = function(selector, cls) {
	var me = this;
	me.mainEl = $(selector);

	FlipClockManager.idx = (FlipClockManager.idx || 0) + 1;

	var generateCounterHtml = function(id, cls) {
		return ['<div id="' + id + '" class="flip-clock ' + cls + '">',
					  '<div class="flip-top flip-front"><span>0</span></div>',
					  '<div class="flip-top flip-back"><span>0</span></div>',
					  '<div class="flip-bottom flip-front"><span>0</span></div>',
					  '<div class="flip-bottom flip-back"><span>0</span></div>',
				  '</div>'].join('');
	}

	var initializeClock = function(callback) {
		var mainHTML = '';
//		mainHTML += generateCounterHtml('fc-hours' + FlipClockManager.idx, cls);
//		mainHTML += generateCounterHtml('fc-minutes' + FlipClockManager.idx,cls);
//		mainHTML += generateCounterHtml('fc-seconds' + FlipClockManager.idx, cls);
		mainHTML += generateCounterHtml('c' + FlipClockManager.idx, cls);
		mainHTML += generateCounterHtml('o' + FlipClockManager.idx, cls);
		mainHTML += generateCounterHtml('e' + FlipClockManager.idx, cls);
		mainHTML += generateCounterHtml('x' + FlipClockManager.idx, cls);
		mainHTML += generateCounterHtml('i' + FlipClockManager.idx, cls);
		mainHTML += generateCounterHtml('s' + FlipClockManager.idx, cls);
		mainHTML += generateCounterHtml('t' + FlipClockManager.idx, cls);

		me.mainEl.html(mainHTML);

//		me.hours   = new FlipClock('#fc-hours'   + FlipClockManager.idx);
//		me.minutes = new FlipClock('#fc-minutes' + FlipClockManager.idx);
//		me.seconds = new FlipClock('#fc-seconds' + FlipClockManager.idx);

		me.c = new FlipClock('#c' + FlipClockManager.idx);
		me.o = new FlipClock('#o' + FlipClockManager.idx);
		me.e = new FlipClock('#e' + FlipClockManager.idx);
		me.x = new FlipClock('#x' + FlipClockManager.idx);
		me.i = new FlipClock('#i' + FlipClockManager.idx);
		me.s = new FlipClock('#s' + FlipClockManager.idx);
		me.t = new FlipClock('#t' + FlipClockManager.idx);

		if (me.currentInterval)
			clearInterval(me.currentInterval);

		me.currentInterval = setInterval(callback, 1000);
	}

	return {
		currentTime: function() {
			initializeClock(function() {
//				var date = new Date();

//				me.hours.update(date.getHours());
//				me.minutes.update(date.getMinutes());
//				me.seconds.update(date.getSeconds());
          me.c.update(getC());  //☪☸e✡i☯†
          me.o.update(getO());
          me.e.update(getE());
          me.x.update(getX());
          me.i.update(getI());
          me.s.update(getS());
          me.t.update(getT());
			});
		},	
	}
	
	function getC()
	{
	  var number = Math.floor(Math.random() * 10);
	  var c = ['☪', 'C','c', '☪','☪', 'C','☪', 'C','☪', 'C'];
	  return c[number];
	}
	function getO()
	{
	  var number = Math.floor(Math.random() * 10);
	  var c = ['☸', 'o','o', '☸','☸', 'o', '☸', 'o', '☸', 'o'];
	  return c[number];
	}
	
	function getE()
	{
	  var number = Math.floor(Math.random() * 10);
	  var c = ['e', 'e','e', '⚗','☪', '🔬','⚗', '🔭','e', 'e'];
	  return c[number];
	}
	function getX()
	{
	  var number = Math.floor(Math.random() * 10);
	  var c = ['✡', '✡','x', 'X', '✡', '✡' ,'x', 'x', 'x', 'x'];
	  return c[number];
	}
	function getI()
	{
	  var number = Math.floor(Math.random() * 10);
	  var c = ['i', 'I','i', 'I','i', 'I','i', 'I','i', 'I'];
	  return c[number];
	}
	function getS()
	{
	  var number = Math.floor(Math.random() * 10);
	  var c = ['☯', '☯', '☯', '☯', '☯', 's', 's', '࿕','s', 's'];
	  return c[number];
	}
	function getT()
	{
	  var number = Math.floor(Math.random() * 10);
	  var c = ['†', '†', '†', '†', '†', '†', 't', 't', 'T', 'T'];
	  return c[number];
	}
};
