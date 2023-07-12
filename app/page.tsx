import Image from 'next/image'
import List from "../components/list";
import styles from "./page.module.css";

export default function Home() {
	return (
		<section className="container">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<List />
				</div>
				<div className="col-md-2"></div>
			</div>
		</section>
	);
}
