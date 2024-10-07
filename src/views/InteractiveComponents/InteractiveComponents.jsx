import { useEffect, useState } from "react";
import "./InteractiveComponents.css";
import ListBuilder1 from "../ListBuilder1";
import ListBuilder2 from "../ListBuilder2";
import ImageCarousel from "../ImageCarousel";
import Accordion from "../Accordion/Accordion";
import SideBar from "../../components/SideBar/SideBar";
import { LoadingAnimation } from "../../components";

export default function InteractiveComponents() {
	const [load, setLoad] = useState(false);
	const [loadTransition, setLoadTransition] = useState(false);
	const options = ["List Builder 1", "List Builder 2", "Image Carousel", "Accordion"];
	const [currDemo, setCurrDemo] = useState("accordion");
	const [showSideBar, setShowSideBar] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 2000);
	}, []);

	useEffect(() => {
		if (load) {
			setTimeout(() => {
				setLoadTransition(true);
			}, 250);
		}
	}, [load]);

	return load ? (
		<div className={`load-transition-${loadTransition}`}>
			{/* Side bar section. Set to show when showSideBar is true */}
			<SideBar
				options={options}
				setCurrDemo={setCurrDemo}
				showSideBar={showSideBar}
				setShowSideBar={setShowSideBar}
			/>

			{/* Header section. Contains the button to set showSideBar to true so show side bar */}
			<section className="header">
				<i className="fa-solid fa-bars fa-2xl pointer" onClick={() => setShowSideBar(true)}></i>
			</section>

			{/* Main section of interactive components */}
			<div className="ic-container">
				{currDemo === "list builder 1" ? (
					<ListBuilder1 />
				) : currDemo === "list builder 2" ? (
					<ListBuilder2 />
				) : currDemo === "image carousel" ? (
					<ImageCarousel />
				) : currDemo === "accordion" ? (
					<Accordion />
				) : (
					<div>asdf</div>
				)}
			</div>
		</div>
	) : (
		<LoadingAnimation />
	);
}
