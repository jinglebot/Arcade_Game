// Enemies our player must avoid
var c = 0;
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = 65;

    // To set speed range
    this.min = 100;
    this.max = 500;
    this.speed = getRandomInt(this.min, this.max);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x++;
    this.x += this.speed * dt;
    // console.log(this.y + ' ' + this.speed);

    // if the bug reaches the side of the screen,
    // it starts again with a different speed
    // 100 = sprite.width, adjustment to make sure the bug is
    // out of the screen before restarting
    if (this.x > (ctx.canvas.width + Resources.get(this.sprite).width)) {
        this.x = -100;
        this.speed = getRandomInt(this.min, this.max);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;

    // For increments of movement
    this.incrX = 0;
    this.incrY = 0;
};

Player.prototype.update = function(dt) {
    // To make sure our hero stays within the screen
    this.x < -15 && (this.x = -15);
    this.x > (ctx.canvas.width - 90) && (this.x = ctx.canvas.width - 90);
    this.y < -10 && (this.y = -10);
    this.y > (ctx.canvas.height - 175) && (this.y = ctx.canvas.height - 175);

    // So that our hero run smoothly
    // TODO: How do you make him pause?
    this.x += this.incrX * 100 * dt;
    this.y += this.incrY * 100 * dt;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(punchedKey) {
    if (punchedKey == 'left') { return this.incrX = -1; }
    if (punchedKey == 'up') { return this.incrY = -1; }
    if (punchedKey == 'right') { return this.incrX = 1; }
    if (punchedKey == 'down') { return this.incrY = 1; }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
    var allEnemies = [];
    for (var i = 0; i < 3; i++) {
        var enemy = new Enemy();
        allEnemies[i] = enemy;
        i != 0 && (allEnemies[i].y = allEnemies[i-1].y + 80);
    }

// Place the player object in a variable called player
    var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
