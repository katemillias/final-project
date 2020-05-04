let star_onea = {
  x1:608,
  y1:655,
  x2:591,
  y2:677,
  x3:623,
  y3:679,
  vx: -1
}

let star_oneb = {
  x1:592,
  y1:664,
  x2:608,
  y2:686,
  x3:626,
  y3:664,
  vx: -1
}

let star_twoa = {
  x1:184,
  y1:90,
  x2:170,
  y2:106,
  x3:194,
  y3:110,
  vx: -1
}

let star_twob = {
  x1:172,
  y1:94,
  x2:181,
  y2:112,
  x3:195,
  y3:98,
  vx: -1
}

let star_threea = {
  x1:334,
  y1:178,
  x2:323,
  y2:196,
  x3:342,
  y3:197,
  vx: -1
}

let star_threeb = {
  x1:323,
  y1:184,
  x2:331,
  y2:200,
  x3:344,
  y3:184,
  vx: -1
}

let star_foura = {
  x1:445,
  y1:113,
  x2:434,
  y2:126,
  x3:453,
  y3:130,
  vx: -1
}


let star_fourb = {
  x1:435,
  y1:117,
  x2:442,
  y2:133,
  x3:453,
  y3:117,
  vx: -1
}

let star_fivea = {
  x1:580,
  y1:194,
  x2:570,
  y2:210,
  x3:587,
  y3:210,
  vx: -1
}

let star_fiveb = {
  x1:572,
  y1:199,
  x2:577,
  y2:215,
  x3:586,
  y3:199,
  vx: -1
}

let star_sixa = {
  x1:847,
  y1:97,
  x2:838,
  y2:115,
  x3:858,
  y3:115,
  vx: -1
}

let star_sixb = {
  x1:837,
  y1:104,
  x2:846,
  y2:120,
  x3:857,
  y3:104,
  vx: -1
}

let star_sevena = {
  x1:892,
  y1:225,
  x2:886,
  y2:243,
  x3:902,
  y3:243,
  vx: -1
}

let star_sevenb = {
  x1:884,
  y1:233,
  x2:893,
  y2:248,
  x3:901,
  y3:231,
  vx: -1
}

let stars = []


function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas

 makeStars()

}

// making this its own function so you can call it repeatedly
function makeStars() {
    let num_stars = 50      // number of stars
    for (let i=0; i<num_stars; i++) {
        let start_position_x = width/2    // currently the center of the screen
        let start_position_y = height // currently the bottom of the screen
        let random_star = { x: start_position_x,
                            y: start_position_y,
                            vx: random(-3, 3),      // left and right
                            vy: random(-2, -8),    // negative vy makes it go up
                            points: random([7, 9, 11, 13]), // how many star points?
                            size: random(10, 50),   // how big? 15
                            vsize: 1,    // animate size
                            color: [random(255), random(255), random(255)]
                                }
        stars.push(random_star)
    }
}

function draw() {

let color_1 = color(181, 219, 247)      // light blue is our first color
let color_2 = color(0, 0, 0)      // black is our second color
  // fade_amount has to be between 0 and 1, so divide the current frameCount by the max frameCount of the fade
let fade_amount = frameCount / 500 //increase number to make go slower
let lerped_color = lerpColor(color_1, color_2, fade_amount)
background(lerped_color)

let color_11 = color(235, 219, 7)      // yellow is our first color
let color_12 = color(0, 0, 0)      // black is our second color
let fade_amount6 = frameCount / 500
let lerped_color6 = lerpColor(color_11, color_12, fade_amount6)
fill(lerped_color6)
circle(430,157,100) //sun

let color_13 = color(181, 219, 247)      // light blue sky is our first color
let color_14 = color(148, 147, 145)      // white moon is our second color
let fade_amount7 = frameCount / 700
let lerped_color7 = lerpColor(color_13, color_14, fade_amount7)
let color_23 = color(181, 219, 247)      // light blue sky is our first color
let color_24 = color(255, 255, 255)      // white bright moon is our second color outline
let fade_amount12 = frameCount / 700
let lerped_color12 = lerpColor(color_23, color_24, fade_amount12)
stroke(lerped_color12)
strokeWeight(10)
fill(lerped_color7)
circle(968,140,100) //moon

let color_3 = color(5, 92, 252)      // ocean blue is our first color
let color_4 = color(3, 10, 41)      // dark blue is our second color
let fade_amount2 = frameCount / 700
let lerped_color2 = lerpColor(color_3, color_4, fade_amount2)

let color_9 = color(5, 92, 252)      // ocean blue is our first color
let color_10 = color(128, 0, 247)      // purple outline of lights is our second color
let fade_amount5 = frameCount / 700
let lerped_color5 = lerpColor(color_9, color_10, fade_amount5)

stroke(lerped_color5)
fill(lerped_color2) ///water fade
rect(3,452,windowWidth,500) ///rect of water

let color_5 = color(82, 88, 99)      // light grey is our first color
let color_6 = color(0, 0, 0)      // black is our second color 39, 38, 41
let fade_amount3 = frameCount / 700
let lerped_color3 = lerpColor(color_5, color_6, fade_amount3)

let color_7 = color(82, 88, 99)      // light grey is our first color
let color_8 = color(250, 246, 5)      // yellow is our second color
      // fade_amount has to be between 0 and 1, so divide the current frameCount by the max frameCount of the fade
let fade_amount4 = frameCount / 700 //increase number to make go slower
let lerped_color4 = lerpColor(color_7, color_8, fade_amount4)

let color_21 = color(82, 88, 99)      // light grey is our first color
let color_22 = color(143, 2, 250)      // light purp is our second color
      // fade_amount has to be between 0 and 1, so divide the current frameCount by the max frameCount of the fade
let fade_amount11 = frameCount / 700 //increase number to make go slower
let lerped_color11 = lerpColor(color_21, color_22, fade_amount11)

stroke(lerped_color11) //outline of lights
fill(lerped_color3) ///color of building and fade
rect(330,300,200,2300) //second left building
stroke(lerped_color11) //outline of lights
fill(lerped_color3) ///color of building and fade
rect(113,200,150,1700) //leftmost building

stroke(lerped_color4) //outline of lights
fill(lerped_color3) ///color of space needle and fade
ellipse(707,133,170,50)
strokeWeight(8)
line(707,108,707,63)
strokeWeight(5)
triangle(705,63,707,63,706,61)
rect(673,150,70,1500) //space needle

fill(247, 214, 0) //star 1 first triange
noStroke()
triangle(star_onea.x1,star_onea.y1,star_onea.x2,star_onea.y2,star_onea.x3,star_onea.y3)

star_onea.x1 = star_onea.x1 + star_onea.vx
star_onea.x2 = star_onea.x2 + star_onea.vx
star_onea.x3 = star_onea.x3 + star_onea.vx


fill(247, 214, 0) //star1 second triangle
noStroke()
triangle(star_oneb.x1,star_oneb.y1,star_oneb.x2,star_oneb.y2,star_oneb.x3,star_oneb.y3)

star_oneb.x1 = star_oneb.x1 + star_oneb.vx
star_oneb.x2 = star_oneb.x2 + star_oneb.vx
star_oneb.x3 = star_oneb.x3 + star_oneb.vx

let color_15 = color(181, 219, 247)      // sky blue is our first color
let color_16 = color(247, 245, 134)      // star yellow is our second color
let fade_amount8 = frameCount / 700
let lerped_color8 = lerpColor(color_15, color_16, fade_amount8)
fill(lerped_color8) //star2 first triange
noStroke()
triangle(star_twoa.x1,star_twoa.y1,star_twoa.x2,star_twoa.y2,star_twoa.x3,star_twoa.y3) //star 1
triangle(star_twob.x1,star_twob.y1,star_twob.x2,star_twob.y2,star_twob.x3,star_twob.y3)
triangle(star_threea.x1,star_threea.y1,star_threea.x2,star_threea.y2,star_threea.x3,star_threea.y3)//star 2
triangle(star_threeb.x1,star_threeb.y1,star_threeb.x2,star_threeb.y2,star_threeb.x3,star_threeb.y3)
triangle(star_foura.x1,star_foura.y1,star_foura.x2,star_foura.y2,star_foura.x3,star_foura.y3)
triangle(star_fourb.x1,star_fourb.y1,star_fourb.x2,star_fourb.y2,star_fourb.x3,star_fourb.y3)
triangle(star_fivea.x1,star_fivea.y1,star_fivea.x2,star_fivea.y2,star_fivea.x3,star_fivea.y3)
triangle(star_fiveb.x1,star_fiveb.y1,star_fiveb.x2,star_fiveb.y2,star_fiveb.x3,star_fiveb.y3)
triangle(star_sixa.x1,star_sixa.y1,star_sixa.x2,star_sixa.y2,star_sixa.x3,star_sixa.y3)
triangle(star_sixb.x1,star_sixb.y1,star_sixb.x2,star_sixb.y2,star_sixb.x3,star_sixb.y3)
triangle(star_sevena.x1,star_sevena.y1,star_sevena.x2,star_sevena.y2,star_sevena.x3,star_sevena.y3)
triangle(star_sevenb.x1,star_sevenb.y1,star_sevenb.x2,star_sevenb.y2,star_sevenb.x3,star_sevenb.y3)

let color_17 = color(125, 92, 94)      // light brown is our first color
let color_18 = color(46, 34, 35)      // dark brown is our second color
let fade_amount9 = frameCount / 700
let lerped_color9 = lerpColor(color_17, color_18, fade_amount9)
fill(lerped_color9)
noStroke()
square(1043,420,30) //dock?

let color_19 = color(125, 92, 94)      // light brown is our first color
let color_20 = color(3, 252, 32)      // gatsby green is our second color
let fade_amount10 = frameCount / 700
let lerped_color10 = lerpColor(color_19, color_20, fade_amount10)
fill(lerped_color10)
noStroke()
triangle(1057,408,1047,420,1068,421)

for (let star of stars) {
        // maybe add a property star.color in setup(), and set the fill here?
        fill([random(255), random(255), random(255)])
        drawStar(star.x, star.y, star.size, star.size/4, star.points)
        star.x += star.vx
        star.y += star.vy
        //star.size += star.vsize  //// try this? v size is rate of change
        star.vy += .05      // this is gravity
    }
    // make it happen again?
    if (frameCount == 200) {
    makeStars()
    }
    if (frameCount == 400) {
   makeStars()
   }
   if (frameCount == 600) {
   makeStars()
   }

   if (frameCount == 800) {
   makeStars()
   }
   if (frameCount == 1000) {
   makeStars()
   }
   if (frameCount == 1200) {
   makeStars()
   }
}
// adapted from https://p5js.org/examples/form-star.html
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
///triangle(x1, y1, x2, y2, x3, y3)
//rect(x, y, w, [h],
function mouseClicked() {
    print(mouseX, mouseY)
}
// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
