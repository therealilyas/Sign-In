auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
        db.collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs);
            setupUI(user);
        }, err => {
            console.log(err.message);
        });
    } else {
        setupUI();
        setupGuides([]);
    }
});

const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('guides').add({
        title: createForm.title.value,
        content: createForm.content.value
    }).then(() => {
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message);
    });
});


const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            bio: signupForm['signup-bio'].value
        });
    }).then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

const logout = document.getElementById('logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);

        const modal = document.getElementById('modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});