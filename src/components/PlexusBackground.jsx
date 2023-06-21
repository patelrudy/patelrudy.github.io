import React from 'react';
import Sketch from 'react-p5';

const PlexusBackground = () => {
  let particles = [];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.frameRate(30);
    const particlesLength = Math.floor(p5.windowWidth / 13);

    for(let i = 0; i < particlesLength; i++) {
      particles.push(new Particle(p5, p5.random(p5.width), p5.random(p5.height)));
    }
  }

  const draw = (p5) => {
    p5.clear();
    particles.forEach((p, index) => {
      p.update();
      p.draw();
      p.checkParticles(particles.slice(index));
      p.checkMouse();
    });

    const cursorParticleSize = 10;
    p5.noStroke();
    p5.fill('rgba(150,150,150,0.5)');
    p5.circle(p5.mouseX, p5.mouseY, cursorParticleSize * 1.5);
  }

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  class Particle {
    constructor(p5, x, y) {
      this.p5 = p5;
      this.pos = p5.createVector(x, y);
      this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
      this.size = 5;
    }

    update() {
      this.pos.add(this.vel);
      this.edges();
    }

    draw() {
      this.p5.noStroke();
      this.p5.fill('rgba(150,150,150,0.5)');
      this.p5.circle(this.pos.x, this.pos.y, this.size * 2);
    }

    edges() {
      if (this.pos.x < 0 || this.pos.x > this.p5.width) {
        this.vel.x *= -1;
      }

      if (this.pos.y < 0 || this.pos.y > this.p5.height) {
        this.vel.y *= -1;
      }
    }

    checkParticles(particles) {
      particles.forEach(particle => {
        const d = this.p5.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

        if(d < 150) {
          this.p5.stroke('rgba(150,150,150,0.1)');
          this.p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
        }
      });
    }

    checkMouse() {
      const d = this.p5.dist(this.pos.x, this.pos.y, this.p5.mouseX, this.p5.mouseY);
      if(d < 150) {
        this.p5.stroke('rgba(150,150,150,0.1)');
        this.p5.line(this.pos.x, this.pos.y, this.p5.mouseX, this.p5.mouseY);
      }
    }
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
}

export default PlexusBackground;
