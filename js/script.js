const guideList = document.getElementById('guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetail = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().bio}</div>
        `
            accountDetail.innerHTML += html;

        })


        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        accountDetail.innerHTML = ''

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};

const setupGuides = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
            <div class="collapsible-body white"> ${guide.content} </div>
          </li>
        `;
            html += li;
        });
        guideList.innerHTML = html
    } else {
        guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
    }
};




document.addEventListener('DOMContentLoaded', function() {

    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    let items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});