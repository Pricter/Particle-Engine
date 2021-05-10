let particles = [];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);

    for(let i = 0; i < 3; i++) {
        particles.push(new Particle(200, 20));
    }

    for(let particle of particles) {
        let gravity = createVector(0, 0.1);
        particle.applyForce(gravity);

        particle.update();
        particle.display();
    }

    for(let i = particles.length - 1; i >= 0; i--) {
        if(particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}
