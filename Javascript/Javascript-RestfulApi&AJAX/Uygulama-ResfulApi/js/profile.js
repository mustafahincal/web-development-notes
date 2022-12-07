class Profile {
    constructor() {
        this.clientId = "";
        this.clientSecret = "";
        //* bir yere bağlanacağım zaman yukardaki bilgilere ihtiyac duyarız ancak şuan json placeholder'ı kullandığımız için bunlara gerek yok.
    }

    async getProfile(username) {
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json();

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);

        const todo = await todoResponse.json();

        return {
            profile,
            todo
        }
    }
}

const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", event => {
    ui.clear();
    let text = event.target.value;
    if (text !== "") {
        profile.getProfile(text).then(res => {
            if (res.profile.length == 0) {
                ui.showAlert(text);
            } else {
                ui.showProfile(res.profile[0]);
                ui.showTodo(res.todo);
            }

        }).catch(err => {
            ui.showAlert(err);
        });
    };
});