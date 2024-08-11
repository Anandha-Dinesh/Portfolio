"use client";
import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const App = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = useMemo(
		() => ({
			particles: {
				number: {
					value: 236,
					density: {
						enable: true,
						value_area: 800,
					},
				},
				color: {
					value: "#ffffff",
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#000000",
					},
					polygon: {
						nb_sides: 5,
					},
					image: {
						src: "img/github.svg",
						width: 100,
						height: 100,
					},
				},
				opacity: {
					value: 1,
					random: true,
					anim: {
						enable: true,
						speed: 1,
						opacity_min: 0,
						sync: false,
					},
				},
				size: {
					value: 2,
					random: true,
					anim: {
						enable: false,
						speed: 65.77825419640895,
						size_min: 19.48985309523228,
						sync: false,
					},
				},
				line_linked: {
					enable: false,
					distance: 150,
					color: "#ffffff",
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 14.430708547789706,
					direction: "bottom-right",
					random: true,
					straight: false,
					out_mode: "out",
					bounce: true,
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 600,
					},
				},
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: {
						enable: false,
						mode: "bubble",
					},
					onclick: {
						enable: false,
						mode: "repulse",
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1,
						},
					},
					bubble: {
						distance: 250,
						size: 0,
						duration: 2,
						opacity: 0,
						speed: 3,
					},
					repulse: {
						distance: 400,
						duration: 0.4,
					},
					push: {
						particles_nb: 4,
					},
					remove: {
						particles_nb: 2,
					},
				},
			},
			retina_detect: true,
		}),
		[]
	);

	if (init) {
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
		);
	}

	return <></>;
};

export default App;
