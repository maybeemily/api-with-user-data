export function makeHeader() {
    const html = /*html*/ `
    <header>
    <div id="static-header">
    <img src="assets/chuck.png" id="chuck-img">
    <h1>Not Very Funny Chuck Norris Jokes</h1>
    </div>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(userInfo) {
    const html = /*html*/ `
    <div id="profile">
    <img src="${userInfo.photoUrl}" id="avatar">
    <span>${userInfo.displayName}</span>
    <button>sign out</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}