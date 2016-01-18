frontend-nanodegree-arcade-game
===============================

GAME INSTRUCTION:
The goal of this game is for our hero to get to the water without hitting any of the enemy mutant bugs. If he hits any of the bugs, he goes back to the starting position. 

The enemy bugs appear at random. To move our hero, use the following keys:
	- press arrow up to go up,
	- press arrow down to go down,
	- press arrow left to go left, and
	- press arrow right to go right.

To start the game, visit my gh-pages at http://jinglebot.github.io/frontend-nanodegree-arcade-game.



PROGRAM DESCRIPTION:

This project is part of the requirements for completion of the Nanodegree Program. To get the program running, the following guides were followed. 

Enemy bugs are created using a for-loop. 
Player responds to keyup events in increments of 150px per key.
Collision detection is done by testing the pos of both player and enemies.
Collision causes the player to return to start pos.
Hitting the water will show a text display of level completion.

Unfortunately, I still have a lot to do to make this game awesome. So here's my to-do list.

TODO:
1. Fix glitch in player movement.
2. Create score chart.
3. Create new levels, introduce more bugs, introduce gems that add points.
4. Stop animation and end the game.

- jinglebot
  01/18/2016

