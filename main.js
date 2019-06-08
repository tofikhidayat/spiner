// define audio 
const soundClick = new Audio("spin/sounds/start.ogg")
const soundSpinning = new Audio("spin/sounds/spinning.ogg")
const soundResult = new Audio("spin/sounds/result.ogg");
soundSpinning.loop = true;
soundSpinning.playbackRate = 0.9;

let template = "";
let spinBg = [];
let spinDot = [];
const spinBackground = [
    "spin_1.png",
    "spin_2.png",
    "spin_3.png",
    "spin_4.png",
    "spin_5.png",
    "spin_6.png",
    "spin_7.png",
    "spin_8.png",
]


const spinData = [{
    "id": 0,
    "item": "Item name",
    "title": "One",
    "image": "spin/linked.svg",
    "description": "This description of title",
}, {
    "id": 1,
    "item": "Item name",
    "title": "Two",
    "image": "spin/IG.png",
    "description": "This description of title",
}, {
    "id": 2,
    "item": "Item name",
    "title": "Three",
    "image": "spin/world.svg",
    "description": "This description of title",
}, {
    "id": 3,
    "item": "Item name",
    "title": "Four",
    "image": "spin/world.svg",
    "description": "This description of title",
}, {
    "id": 4,
    "item": "Item name",
    "title": "Five",
    "image": "spin/linked.svg",
    "description": "This description of title",
}, {
    "id": 5,
    "item": "Item name",
    "title": "Six",
    "image": "spin/star_student.svg",
    "description": "This description of title",
}, {
    "id": 6,
    "item": "Item name",
    "title": "Seven",
    "image": "spin/world.svg",
    "description": "This description of title",
}, , {
    "id": 7,
    "item": "Item name Eight",
    "title": "Eight",
    "image": "spin/star_student.svg",
    "description": "This description of title",
}]
const dotSpin = [
    "dot_a.png",
    "dot_b.png",
    "dot_c.png",
    "dot_d.png",
    "dot_e.png",
    "dot_f.png",
    "dot_g.png",
    "dot_h.png",
]

while (spinBg.length < 8) {
    let spl = spinBackground[Math.floor(Math.random(0) * 8).toFixed(0)]
    if (spinBg.indexOf(spl) == "-1") {
        spinBg.push(spl);
    }
}
while (spinDot.length < 8) {
    let spl = dotSpin[Math.floor(Math.random(0) * 8).toFixed(0)]
    if (spinDot.indexOf(spl) == "-1") {
        spinDot.push(spl);
    }
}


let key = 0;
spinData.forEach(function (item) {
    ++key;
    template = template + `
			<div class="curent-spin float-left" style="transform:rotate(${(360/8)*(key-1)}deg);" data-id="${item["id"]}">
				<div class="curent-bg  w-100 h-100 d-block">
					<img src="spin/${spinBg[key - 1]}" class="spin-image" alt="">
				</div>
				<div class="curent-content">
					<div class="image">
						<img src="${item["image"]}"  alt="">
					</div>
					<div class="text mt-auto">
						<div class="text-dark behind-text">${item["title"].substr(0,10)}</div>
						<div class="text-white  behind-text" >${item["description"].substr(0,10) }</div>
					</div>
				</div>
			</div>
		`
})
let dotTemplate =  "";
spinDot.forEach(function(item) {
	dotTemplate = dotTemplate + `
		<div class="dot-spin">
			<img src="spin/${item}" height="13" alt="" />
		</div>
	`
})

// append spin
document.getElementById("spin").innerHTML = template;
document.getElementById("parent-spin").insertAdjacentHTML("beforeend",dotTemplate)


let rotated = 0;
const runSpin = function () {

    // starting sound 
    soundClick.play()

    if (rotated == 1) {
        document.getElementById("curent-spin").style.transform = "rotate(0deg)";
        rotated = 0;
    }
    soundSpinning.play();
    rotated = 1;
    // end
    let sub = Math.floor(Math.random(1) * spinData.length).toFixed(0);
    let insub = spinData[sub == 7 ? 8 : sub];
    let deg = 0;
    let dur = 0;
    let rotate = 15; // defualt 25
    let finrotate = 360 * rotate;
    let latitude = Math.floor(Math.random(-20.2) * 20.2);
    latitude = ["min", "plus"][Math.floor(Math.random(1) * 2)] == "min" ? latitude = latitude - (latitude * 2) : latitude;


    let target = (finrotate - ((360 / 8) * sub)) + ((360 / 8) + 180) + latitude;
    let interev = setInterval(() => {
        let paramDeg = (deg * 100) / target;

        if (soundSpinning.currentTime > 1.4) {
            soundSpinning.currentTime = 0.11;
        }

        if (paramDeg <= 5) {
            deg = deg + 5;
        } else if (paramDeg <= 10) {
            deg = deg + 10;
        } else if (paramDeg <= 25) {
            deg = deg + 20;
        } else if (paramDeg <= 60) {
            deg = deg + 17;
        } else if (paramDeg <= 70) {
            deg = deg + 15;
        } else if (paramDeg <= 80) {
            deg = deg + 10;
        } else if (paramDeg <= 85) {
            deg = deg + 9;
        } else if (paramDeg <= 86) {
            deg = deg + 9;
        } else if (paramDeg <= 87) {
            deg = deg + 8;
        } else if (paramDeg <= 88) {
            deg = deg + 8;
        } else if (paramDeg <= 89) {
            deg = deg + 7;
        } else if (paramDeg <= 90) {
            deg = deg + 7;
        } else if (paramDeg <= 91) {
            deg = deg + 6;
        } else if (paramDeg <= 92) {
            deg = deg + 5;
        } else if (paramDeg <= 93) {
            deg = deg + 4;
        } else if (paramDeg <= 94) {
            deg = deg + 3;
        } else if (paramDeg <= 95) {
            deg = deg + 2;
        } else if (paramDeg <= 96) {
            deg = deg + 1;
        } else if (paramDeg <= 97) {
            deg = deg + .50;
        } else if (paramDeg <= 98) {
            deg = deg + .25;
        } else if (paramDeg <= 99) {
            deg = deg + .15;
        } else if (paramDeg <= 99.5) {
            deg = deg + .10;
        } else if (paramDeg <= 99.6) {
            deg = deg + .08;
        } else if (paramDeg <= 99.7) {
            deg = deg + .05;
        } else if (paramDeg <= 99.8) {
            deg = deg + .04;
        } else {
            deg = deg + .03;
        }



        //console.log(deg)

        if (deg >= target) {
            clearInterval(interev)
            soundSpinning.pause()
            setTimeout(function () {
                soundResult.play();
                alert(JSON.stringify(insub))
            }, 200)
            /// try ajax at this 
            ///  parameter is variabel insub
        }


        if (dur >= 3000) {
            //clearInterval(interev)
        }
        dur += 10;
        document.getElementById("parent-spin").style.transform = "rotate(" + deg + "deg)";
    }, 1)



}

document.getElementById("spin-now").addEventListener("click", runSpin)