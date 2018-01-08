// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;

var css_scaleKeyframes;
var css_scaleTiming;
var css_rotateKeyframes;
var css_rotateTiming;

var counter;

function pageLoad_init()
{
	trace("pageLoad_init();");

	init_display();

	init_css();
}

function init_display()
{
	displayList = {};

	displayList.box0 = document.querySelector(".box0");
	displayList.box1 = document.querySelector(".box1");
	displayList.box2 = document.querySelector(".box2");

	displayList.box2.addEventListener("click", test, false);
}

function init_css()
{
	if(counter === undefined)
	{
		counter = 0;
	}

	css_scaleKeyframes = [{transform: 'scale(1)'}, {transform: 'scale(1.5)'}];

	css_scaleTiming = {duration: 2100, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out'};

	displayList.box0.animate(css_scaleKeyframes, css_scaleTiming);
}

function test(event)
{
	event.preventDefault();

	counter ++;

	switch(counter)
	{
		case 1:
		{
			test0(null);
			break;
		}

		case 2:
		{
			test1(null);
			counter = 0;
			break;
		}
	}
}

function test0()
{
	css_rotateKeyframes = [{transform: 'rotate(0deg)'}, {transform: 'rotate(180deg)'}];

	css_rotateTiming = {duration: 3000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out'};

	let rotate = displayList.box0.animate(css_rotateKeyframes, Object.assign({composite: 'add'}, css_rotateTiming)); //DEFAULT composite: 'replace'
}

function test1()
{
	let new_keyframes = [{transform: 'rotate(0deg)'}, {transform: 'rotate(360deg)'}];

	let new_timing = {duration: 1000, iterations: Infinity, direction: 'alternate', easing: 'linear'};

	let rotater = displayList.box0.animate(new_keyframes, Object.assign({composite: 'add'}, new_timing));
}

