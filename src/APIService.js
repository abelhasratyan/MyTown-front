export class APIService{

    getToken() {
        const { token } = JSON.parse(localStorage.getItem("user"));
        return `Bearer ${token}`
    };
    getId() {
        const user = JSON.parse(localStorage.getItem("user"));
        return user.id
    }
}