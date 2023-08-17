


import { httpAxios } from "@/helper/axiosHelper";

export async function addTask(task) { 

    const result = await httpAxios.post("/api/tasks", task).then((response) => {
        response.data;
    });

    return result;

}


export async function getTusksOfUser(userId) { 
    const result = await httpAxios.get(`api/users/${userId}/tasks`).then((response) => response.data);

    return result;
}


export async function deleteTask(taskId) { 
    const result = await httpAxios.delete(`api/tasks/${taskId}`).then((response) => response.data);

    return result;
}

 

