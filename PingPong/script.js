class App {
  constructor(selector, Ball, Paddle) {
    if (!selector) throw new Error("Не передан селектор!");
    this.playerScore = 0;
    this.aiScore = 0;
    this.$xBorder = 600;
    this.$yBorder = 900;
    this.$color = "black";
    this.$root = document.querySelector(`#${selector}`);
    this.$root.appendChild(this.getCanvasConfig("canvas"));
    this.$canvas = document.querySelector("canvas");
    this.$ctx = this.$canvas.getContext("2d");
    this.ball = new Ball(this.$canvas, 10, 1.5, 2);
    this.idIntervalAiPaddle = null;
    this.$ctx.font = "32px Arial";
    this.$ctx.fillStyle = this.$color;
    this.$ctx.textAlign = "center";
    this.$ctx.fillText(
      `Управление осуществляется стрелочками ↑ и ↓`,
      this.$canvas.width / 2,
      150
    );
    this.$ctx.fillText(
      `Для старта игры нажмите Enter`,
      this.$canvas.width / 2,
      250
    );
    this.$ctx.fillText(`Для паузы пробел`, this.$canvas.width / 2, 350);
    this.stop = true;
    this.paddle = new Paddle(
      this.$ctx,
      2,
      this.$canvas.height / 2 - 75,
      25,
      150,
      this.$xBorder
    );
    this.aiPaddle = new Paddle(
      this.$ctx,
      this.$canvas.width - 27,
      this.$canvas.height / 2 - 75,
      25,
      150,
      this.$xBorder
    );

    this.init();
  }

  init() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.paddle.moveUp();
          break;
        case "ArrowDown":
          this.paddle.moveDown();
          break;
        case "Enter":
          if (this.stop)
          this.stop = false;
          this.start();
          break;
        case " ":
          if (!this.stop) {
            this.stop = true;
            this.$ctx.fillText("Пауза", this.$canvas.width / 2, 350);
            clearInterval(this.idIntervalAiPaddle);
          }
          break;
      }
    });
  }

  start() {
    this.draw();
    this.idIntervalAiPaddle = setInterval(
      () => this.aiPaddle.update(this),
      1000 / 60
    );
  }

  draw() {
    if (!this.stop) {
      this.clear();
      this.drawMiddleLine();
      this.drawScore();
      this.ball.draw(this.$ctx);
      this.paddle.draw(this.$ctx);
      this.aiPaddle.draw(this.$ctx);
      this.ball.update(this);
      requestAnimationFrame(this.draw.bind(this));
    }
  }

  clear() {
    this.$ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  drawMiddleLine() {
    this.$ctx.setLineDash([10, 50]);
    this.$ctx.beginPath();
    this.$ctx.moveTo(this.$canvas.width / 2, 0);
    this.$ctx.lineTo(this.$canvas.width / 2, this.$canvas.height);
    this.$ctx.strokeStyle = this.$color;
    this.$ctx.stroke();
  }

  drawScore() {
    this.$ctx.font = "48px Arial";
    this.$ctx.fillStyle = this.$color;
    this.$ctx.textAlign = "center";
    this.$ctx.fillText(
      this.playerScore + " : " + this.aiScore,
      this.$canvas.width / 2,
      50
    );
  }

  getCanvasConfig(el) {
    const canvas = document.createElement(el);
    canvas.width = this.$yBorder;
    canvas.height = this.$xBorder;
    canvas.id = "gameCanvas";
    return canvas;
  }
}

class Ball {
  constructor(canvas, radius = 10, speedX = 1.5, speedY = 2) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }

  update(context) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Отскок от верхней и нижней границ
    if (
      this.y + this.radius > context.$canvas.height ||
      this.y - this.radius < 0
    ) {
      this.speedY = -this.speedY;
    }

    // Проверка попадания мяча в игрока или AI
    let leftEdge = context.paddle.x + context.paddle.width;
    let rightEdge = context.aiPaddle.x;

    if (
      this.x - this.radius < leftEdge &&
      this.y >= context.paddle.y &&
      this.y <= context.paddle.y + context.paddle.height
    ) {
      this.speedX = -this.speedX;
    } else if (
      this.x + this.radius > rightEdge &&
      this.y >= context.aiPaddle.y &&
      this.y <= context.aiPaddle.y + context.aiPaddle.height
    ) {
      this.speedX = -this.speedX;
    }

    // Проверка выхода за пределы экрана
    if (this.x + this.radius < 0) {
      context.playerScore++;
      this.resetBall();
    } else if (this.x - this.radius > context.$canvas.width) {
      context.aiScore++;
      this.resetBall();
    }
  }

  resetBall() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.speedX *= -1;
  }
}

class Paddle {
  constructor(ctx, ...options) {
    const [x, y, width, height, xBorder] = options;
    this.xBorder = xBorder;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 15;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    if (this.y > 0) this.y -= this.speed;
  }

  moveDown() {
    if (this.xBorder >= this.y + this.speed + this.height) this.y += this.speed;
  }

  update(context) {
    const diff = context.ball.y - (this.y + this.height / 2);
    if (diff < 0 && this.y > 0) {
      this.y -= 10;
    } else if (diff > 0 && this.y < context.$canvas.height - this.height) {
      this.y += 10;
    }
  }
}

const app = new App("app", Ball, Paddle);
