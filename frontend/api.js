
export const createTopic = async (topic) => {
  return fetch(`/create-topic/${topic}`).then(res => res.json());
};