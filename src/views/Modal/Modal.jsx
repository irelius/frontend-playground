import "./Modal.css";
import { useState } from "react";
import { ExitButton } from "../../components";

export default function Modal() {
	const [showModal, setShowModal] = useState(false);

	const closeModal = (e) => {
		e.stopPropagation();
		setShowModal(false);
	};

	return (
		<div className="dfc aic jcc full">
			<div className={`modal-background-${showModal}`} onClick={(e) => closeModal(e)}>
				<section className={`modal-box-${showModal}`} onClick={(e) => e.stopPropagation()}>
					<section className="modal-exit-button">
						<ExitButton setShowModal={setShowModal} />
					</section>
					<section>this is modal content stuff</section>
				</section>
			</div>

			<button className="pointer" onClick={() => setShowModal(true)}>
				Show Modal
			</button>
		</div>
	);
}
