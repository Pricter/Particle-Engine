class Emitter {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.particles = [];
    }

    emit(num) {

    }

    update() {
        for(let particle of this.particles) {
            let gravity = createVector(0, 0.1);
            particle.applyForce(gravity);
            particle.update();
        }

        for(let i = this.particles.length - 1; i >= 0; i--) {
            if(this.particles[i].finished()) {
                this.particles.splice(i, 1);
            }
        }

        for(let i = 0; i < num; i++) {
            this.particles.push(new Particle(this.position.x, this.position.y));
        }
    }

    show() {
        for(let particle of this.particles) {
            particle.display();
        }
    }
}
