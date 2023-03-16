export type UserData = {
    requests:Request[],
    completedRequests:Request[]
}

export type Request = {
    title : string,
    date : string
}