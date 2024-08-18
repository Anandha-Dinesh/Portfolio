"use client";
import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navbar";
import Titles from "./components/titles";
import {infos} from "../../public/images/info";

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
					value: 300,
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
					value: 0.5,
					random: true,
					anim: {
						enable: false,
						speed: 4,
						size_min: 0.3,
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
					enable: false,
					speed: 1,
					direction: "none",
					random: true,
					straight: false,
					out_mode: "out",
					bounce: false,
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
						enable: true,
						mode: "bubble",
					},
					onclick: {
						enable: true,
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
			<main className="bg-black h-dvh w-dvw">
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
				<NavBar />
				<div className="flex w-dvw h-3/4">
					<div className="flex-1 ml-6 mt-10 text-3xl align-middle">
						<div className="ml-20 mt-24">
							<div className="text-6xl">Hello there !</div>
							<div className="mt-8">
								<div className="mt-3">I{"'"}M Anandha Dinesh</div>
								<div className="mt-4">
									<Titles />
								</div>
								<div className="mt-10 ml-10 mb-5 text-sm justify-center">
									{" "}
									Connect with me in{" "}
									<div className="flex mt-3 flex-grow mr-4">
										<div className="flex space-x-5">
											<a
												target="_blank"
												href={"mailto:anandhadinesh80@gmail.com"}
											>
												<Image
													src={"/images/mail.png"}
													alt="Email"
													width={30}
													height={30}
												/>
											</a>
											<a target="_blank" href={infos.social.linkedin}>
												<Image
													src={"/images/linkedin.svg"}
													alt="linkedin"
													width={30}
													height={30}
												/>
											</a>
											<a href={infos.social.github} target="_blank">
												<Image
													src={"/images/github.svg"}
													alt="github"
													width={35}
													height={35}
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hidden sm:flex sm:flex-1 relative h-full justify-cente align-middle">
						<Image
							src="/images/devimg.png"
							alt="Dev"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
			</main>
		);
	}

	return <></>;
};

export default App;
