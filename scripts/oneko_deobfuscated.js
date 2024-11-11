/* states:
 *  0     idle
 *  1     alert
 *  2- 3  chase N
 *  4- 5  chase NE
 *  6- 7  chase E
 *  8- 9  chase SE
 * 10-11  chase S
 * 12-13  chase SW
 * 14-15  chase W
 * 16-17  chase NW
 * 18-19  sleep
 * 20     tired
 * 21-23  scratch self
 * 24-25  scratch N
 * 26-27  scratch E
 * 28-29  scratch S
 * 30-31  scratch W
 */

if(!matchMedia("(prefers-reduced-motion:reduce)").matches) {
	let div = document.createElement("div"),
		catX = 16, catY = 16,
		curX, curY,
		frame = 0, countDown = 100,
		lastTimestamp = 0,
		state = 0,
		animate = (timestamp) => {
			if( timestamp - lastTimestamp > 100 ) {
				lastTimestamp = timestamp;
				let distX = curX - catX,
					distY = curY - catY,
					dist = (distX*distX + distY*distY)**.5,
					maxX = innerWidth - 16,
					maxY = innerHeight - 16;
				frame++;
				countDown && --countDown;
				if (!state && !countDown && .05 > Math.random()) {
					state = frame & 1 ?
						20 :
						catX == 16 ? 30 :
						catY == 16 ? 24 :
						catX == maxX ? 26 :
						catY == maxY ? 28 : 21;
					countDown = 12;
				}
				if (state == 1) {
					countDown || (state = 2);
				}
				if (state > 1 && state < 18) {
					state = 2 + ( ( 4.5 - Math.atan2(distX,distY) * 1.273 ) % 8 << 1 ) | frame & 1;
					catX += distX / dist * 12;
					catY += distY / dist * 12;
					catX = catX < 16 ? 16 : catX > maxX ? maxX : catX;
					catY = catY < 16 ? 16 : catY > maxY ? maxY : catY;
					div.style.left = catX - 16 + "px";
					div.style.top  = catY - 16 + "px";
					dist < 42 && (state = 0, countDown = 100)
				}
				if (state == 20) {
					countDown || ( state = 18, countDown = 200 );
				}
				if (state > 17 && state < 20) {
					state = state & ~1 | frame / 4 & 1;
					countDown || ( state = 0 );
				}
				if (state > 20) {
					state = state > 23 ? state & ~1 | frame & 1 : state - state % 3 + frame % 3;
					countDown || ( state = 0 );
				}
				div.style.backgroundPosition = `0 ${-32 * state}px`;
			}
			requestAnimationFrame(animate)
		};
	div.style = "width:32px;height:32px;position:fixed;pointer-events:none;background-image:url(oneko.png);left:0;top:0;z-index:"+2e9;
	document.body.appendChild(div);
	addEventListener("mousemove",
		e => { curX = e.clientX, curY = e.clientY, (!state || state > 17) && (state = 1, countDown = 5) }
	);
	animate();
}
