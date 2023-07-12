import { apiIns } from "@/@config/api.config";

export const getTopicList = async () => {
	return await apiIns.get("/topics");
};

export const getTopicById = async (id: any) => {
	return await apiIns.get("/topics/" + id);
};

export const addTopic = async (body: any) => {
	return await apiIns.post("/topics", body);
};

export const editTopic = async (id: any, body: any) => {
	return await apiIns.post("/topics", body);
};

export const deleteTopic = async (id: any) => {
	return await apiIns.delete(`/topics?id=${id}`);
};
