"use client";

import { deleteTopic, getTopicList } from "@/services/api/topic.services";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./list.scss";

function List() {
	const [topicList, setTopicList] = useState<any>();

	useEffect(() => {
		getTopicList()
			.then((resp: any) => {
				if (resp?.status === 200) {
					setTopicList(resp?.data?.topics);
				}
			})
			.catch((err) => console.log(err.message));
	}, []);

	const handleDelete = (item: any) => {
		if (!item?._id) return;
		deleteTopic(item?._id)
			.then((resp) => {
				alert("Topic deleted successfully");
				let temp = topicList?.filter((itm: any) => itm?._id != item?._id);
				setTopicList(temp);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			{topicList?.map((topic: any, index: number) => {
				return (
					<div
						className="list d-flex align-items-center justify-content-between w-100"
						key={index}
					>
						<div className="left">
							<h2>{topic?.title}</h2>
							<p>{topic?.description}</p>
						</div>
						<div className="right d-flex ">
							<Link
								href={`/edit/${topic?._id}`}
								className="btn border me-2 mb-1"
							>
								Edit
							</Link>
							<button
								className="btn btn-danger mb-1"
								onClick={() => handleDelete(topic)}
							>
								Remove
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default List;
