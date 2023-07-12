"use client";

import { addTopic } from "@/services/api/topic.services";
import React, { useState } from "react";
import "./add.scss";

function Add() {
	const [title, setTitle] = useState<any>("");
	const [description, setDescription] = useState<any>("");
	const handleSubmit = (e: any) => {
		const payload = { title: title, description: description };

		addTopic(payload)
			.then((resp: any) => {
				alert(resp?.data?.message);
				setTitle("");
				setDescription("");
			})
			.catch((err) => console.log(err));
		console.log("object", payload);
	};
	return (
		<section className="container">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<h2 className="">Add topic</h2>
					<form className="add-topic w-100">
						<input
							type="text"
							placeholder="Title"
							value={title}
							onChange={(e: any) => setTitle(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Description"
							value={description}
							onChange={(e: any) => setDescription(e.target.value)}
						/>

						<button
							onClick={handleSubmit}
							type="button"
							className="btn border mt-3"
						>
							Add
						</button>
					</form>
				</div>
				<div className="col-md-2"></div>
			</div>
		</section>
	);
}

export default Add;
