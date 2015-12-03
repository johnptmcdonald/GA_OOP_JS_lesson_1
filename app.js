"use strict"

// make object literal with Game properties
var Game = {
	canvas: null,
	canvasContext: null,
	rectanglePosition: null
}

// add an init/start function that is called at the bottom
// we assign the canvas, the context, and run the mainLoop
Game.start = function(){
	Game.canvas = document.getElementById("canvas")
	Game.canvasContext = Game.canvas.getContext("2d")
	Game.mainLoop()
}

// a utility function to completely clear the canvas
Game.clearCanvas = function(){
	Game.canvasContext.clearRect(0,0,Game.canvas.width, Game.canvas.height)
}

// update the game world with the new rectangle position
Game.update = function(){
	var d = new Date;
	var currentSystemTime = d.getTime()
	Game.rectanglePosition = (currentSystemTime/100 % (Game.canvas.width+20))
}

// draw this new game world
Game.draw = function(){
	console.log("running draw")
	Game.canvasContext.fillStyle = "blue";
	Game.canvasContext.fillRect(Game.canvas.width-Game.rectanglePosition, 0, 20, 20)
}

// the mainLoop clears the canvas, then updates and draws
Game.mainLoop = function(){
	Game.clearCanvas()
	Game.update()
	Game.draw()
	setTimeout(Game.mainLoop, 16)
}

// finally, we call the start/init function
Game.start()

