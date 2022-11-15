import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillGithub, AiFillHome } from 'react-icons/ai';
import Image from 'next/image';
import dev from '../public/developer.gif';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import wesop1 from '../public/wesop1.gif';
import { useState } from 'react';

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [showButton, setShowButton] = useState(false);

	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>MooSeon Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800">
				<section className="min-h-screen">
					<nav className="py-10 mb-12 flex justify-between">
						<h1 className="text-xl font-burtons dark:text-slate-50">
							DevelopedbyMS
						</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className="cursor-pointer text-2xl dark:text-slate-300"
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
									href="#"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
							MooSeon PARK
						</h2>
						<h3 className="text-2xl py-2 md:text-3xl dark:text-slate-50">
							FrontEnd Developer
						</h3>
						<p className="text-slate-700 dark:text-slate-400 italic">
							Last updated @ 2022-11
						</p>
						<p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-slate-400">
							Thanks for visiting my webpage!
							<br />
							I'm looking for an opportunity to make the world a better place by
							technology and business.
						</p>
					</div>
					<h4 className="text-3xl text-center mb-10 dark:text-slate-50">
						Contact
					</h4>
					<div className="text-center text-lg flex flex-col">
						<span className="text-md leading-8 text-gray-800 md:text-xl dark:text-slate-400">
							📧 whomsp@gmail
						</span>
						<span className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-slate-400">
							📱 010-2024-2977
						</span>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-slate-300">
						<a href="https://github.com/mooseonpark">
							<AiFillGithub />
						</a>
						<a href="https://www.instagram.com/wire_less/">
							<AiFillInstagram />
						</a>
						<a href="https://wire-less.tistory.com/">
							<AiFillHome />
						</a>
					</div>
					<div className="relative items-center w-96 mt-20 mx-auto">
						<Image src={dev} />
					</div>
				</section>
				<section>
					<div>
						<h3 className="text-3xl py-1 mt-20 dark:text-slate-50 ">
							About Me
						</h3>
						<p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-slate-400">
							I enjoy myself without fear of encountering new people and
							environment, and I aim to be a person who develops today rather
							than yesterday. Although I dropped out of college, I am planning
							to start a new career again by participating in the coding
							bootcamp with continuous interest in programming. I want to
							constantly solve various problems in society and create a valuable
							world.
						</p>
						<p className=" text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-slate-400">
							새로운 사람들, 새로운 환경을 마주치는것에 대해서 두려움 없이
							즐기는 편이고 어제보다 오늘 발전하는 사람이 되는것을 지향합니다.
							비록 전공을 공부하다가 중간에 중퇴 하였지만 프로그래밍에 대한
							계속된 관심으로 부트캠프에 참여하였고 다시 새롭게 커리어를
							시작하려합니다. 끊임없이 사회의 여러 문제를 해결하며 가치있는
							세상을 만들고 싶습니다.
						</p>
					</div>
					<div className="lg:flex gap-10">
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
							<Image src={code} width={100} height={100} className="mx-auto" />
							<h3 className="text-lg font-medium pt-8 pb-2 ">Skills I use</h3>
							<h4 className="py-4 text-teal-600">Learning & Growing with</h4>
							<p className="text-gray-800 py-1">HTML5/CSS3</p>
							<p className="text-gray-800 py-1">JAVASCRIPT</p>
							<p className="text-gray-800 py-1">REACT.JS</p>
							<p className="text-gray-800 py-1">GIT</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
							<Image
								src={consulting}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2 ">Active Learner</h3>
							<h4 className="py-4 text-teal-600">love to learn languages</h4>
							<p className="text-gray-800 py-1">English : TOEIC 860 (2013)</p>
							<p className="text-gray-800 py-1">Chinese : HSK 4 (2018)</p>
							<p className="text-gray-800 py-1">Learning basic Japanese now</p>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h3 className="text-3xl py-1 dark:text-slate-50">Portfolio</h3>
						<p className="text-gray-800 py-1 dark:text-slate-400">HTML/CSS</p>
					</div>
					<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
						<div className="basis-1/3 flex-1">
							<h1>Wesop</h1>
							<Image
								src={wesop1}
								className="rounded-lg object-cover"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<h1>Needed</h1>
							<Image
								src={wesop1}
								className="rounded-lg object-cover"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<h1>portfolio</h1>
							<Image
								src={wesop1}
								className="rounded-lg object-cover"
								width={'100%'}
								height={'100%'}
								layout="responsive"
							/>
						</div>
					</div>
				</section>
				<div className="text-center">
					<button
						className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded dark:text-slate-900 mb-20"
						onClick={scrollToTop}
					>
						👆
						<br /> TOP
					</button>
				</div>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}
