"use client";

import {
	addTopic,
	editTopic,
	getTopicById,
} from "@/services/api/topic.services";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./edit.scss";

function Edit({ params }: any) {
	const { id } = params;
	const [title, setTitle] = useState<any>("");
	const [description, setDescription] = useState<any>("");
	const router = useRouter();

	useEffect(() => {
		getTopicById(id)
			.then((resp) => {
				setTitle(resp?.data?.topic?.title);
				setDescription(resp?.data?.topic?.description);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleSubmit = (e: any) => {
		const payload = { title: title, description: description };
		editTopic(id, payload)
			.then((resp: any) => {
				alert("Topic updated successfully");
				router.push("/");
			})
			.catch((err) => console.log(err));
	};
	return (
		<section className="container">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<h2 className="">Edit topic</h2>
					<form className="add-topic w-100">
						<input
							type="text"
							placeholder="Title"
							value={title}
							onChange={(e: any) => setTitle(e.target.value)}
						/>
						<textarea
							placeholder="Description"
							value={description}
							onChange={(e: any) => setDescription(e.target.value)}
						/>

						<button
							onClick={handleSubmit}
							type="button"
							className="btn border mt-3"
						>
							Edit
						</button>
					</form>
				</div>
				<div className="col-md-2"></div>
			</div>
		</section>
	);
}

export default Edit;
