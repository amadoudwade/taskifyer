export type User = {
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    telephone: string
}

export type Task = {
    _id: string,
    title: string,
    description: string,
    status: string,
    priority: string,
    deadline: Date,
    user: User
}