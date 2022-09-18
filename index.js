const asideSection = document.querySelector('aside')
    const mainSection = document.querySelector('main')

    const signInBtn = document.getElementById('sign-in-btn')
    const signUpBtn = document.getElementById('sign-up-btn')

    signInBtn.addEventListener('click', (e) => {
        mainSection.classList.add('slideRight')
        asideSection.classList.add('slideLeft')
    })

    signUpBtn.addEventListener('click', (e) => {
        mainSection.classList.remove('slideRight')
        asideSection.classList.remove('slideLeft')
    })