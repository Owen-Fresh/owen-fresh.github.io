const Welcome = document.querySelector('.Welcome')
const openWelcome = document.querySelector('[data-welcome-target]')
const closeWelcome = document.querySelector('[data-close-button]')

openWelcome.addEventListener('click', () => {
  Welcome.show();
})

closeWelcome.addEventListener('click', () => {
  Welcome.setAttribute('closing', "");
  Welcome.addEventListener('animationend', () => {
    Welcome.removeAttribute('closing');
    Welcome.close();
  }, {once:true})
})

window.onload = function () {
  Welcome.show();
}


const About = document.querySelector('.About')
const openAbout = document.querySelector('[data-About-target]')
const closeAbout = document.querySelector('[data-About-close]')

openAbout.addEventListener('click', () => {
  About.show();
})

closeAbout.addEventListener('click', () => {
  About.setAttribute('closing', "");
  About.addEventListener('animationend', () => {
    About.removeAttribute('closing');
    About.close();
    }, {once:true})
})


const Work = document.querySelector('[data-Work]')
const openWork = document.querySelector('[data-Work-target]')
const closeWork = document.querySelector('[data-Work-close]')

openWork.addEventListener('click', () => {
  Work.show();
})

closeWork.addEventListener('click', () => {
  Work.setAttribute('closing', "");
  Work.addEventListener('animationend', () => {
    Work.removeAttribute('closing');
    Work.close();
    }, {once:true})
})


const Working = document.querySelector('.Working-On')
const openWorking = document.querySelector('[data-Working-target]')
const closeWorking = document.querySelector('[data-Working-close]')

openWorking.addEventListener('click', () => {
  Working.show();
})

closeWorking.addEventListener('click', () => {
  Working.setAttribute('closing', "");
  Working.addEventListener('animationend', () => {
    Working.removeAttribute('closing');
    Working.close();
    }, {once:true})
})


const Writing = document.querySelector('[data-MyWriting]')
const openWriting = document.querySelector('[data-Writing-target]')
const closeWriting = document.querySelector('[data-Writing-Close]')

openWriting.addEventListener('click', () => {
  Writing.show();
})

closeWriting.addEventListener('click', () => {
  Writing.setAttribute('closing', "");
  Writing.addEventListener('animationend', () => {
    Writing.removeAttribute('closing');
    Writing.close();
    }, {once:true})
})


const Coin = document.querySelector('[data-Coin]')
const openCoin = document.querySelector('[data-Coin-target]')
const closeCoin = document.querySelector('[data-Coin-close]')

openCoin.addEventListener('click', () => {
  Coin.show();
})

closeCoin.addEventListener('click', () => {
  Coin.setAttribute('closing', "");
  Coin.addEventListener('animationend', () => {
    Coin.removeAttribute('closing');
    Coin.close();
    }, {once:true})
})


const Air = document.querySelector('[data-Air]')
const openAir = document.querySelector('[data-Air-target]')
const closeAir = document.querySelector('[data-Air-close]')

openAir.addEventListener('click', () => {
  Air.show();
})

closeAir.addEventListener('click', () => {
  Air.setAttribute('closing', "");
  Air.addEventListener('animationend', () => {
    Air.removeAttribute('closing');
    Air.close();
    }, {once:true})
})


const Beverage = document.querySelector('[data-Beverage]')
const openBeverage = document.querySelector('[data-Beverage-target]')
const closeBeverage = document.querySelector('[data-Beverage-close]')

openBeverage.addEventListener('click', () => {
  Beverage.show();
})

closeBeverage.addEventListener('click', () => {
  Beverage.setAttribute('closing', "");
  Beverage.addEventListener('animationend', () => {
    Beverage.removeAttribute('closing');
    Beverage.close();
    }, {once:true})
})


const Gothic = document.querySelector('[data-Gothic]')
const openGothic = document.querySelector('[data-Gothic-target]')
const closeGothic = document.querySelector('[data-Gothic-close]')

openGothic.addEventListener('click', () => {
  Gothic.show();
})

closeGothic.addEventListener('click', () => {
  Gothic.setAttribute('closing', "");
  Gothic.addEventListener('animationend', () => {
    Gothic.removeAttribute('closing');
    Gothic.close();
    }, {once:true})
})


const Sunrise = document.querySelector('[data-Sunrise]')
const openSunrise = document.querySelector('[data-Sunrise-target]')
const closeSunrise = document.querySelector('[data-Sunrise-close]')

openSunrise.addEventListener('click', () => {
  Sunrise.show();
})

closeSunrise.addEventListener('click', () => {
  Sunrise.setAttribute('closing', "");
  Sunrise.addEventListener('animationend', () => {
    Sunrise.removeAttribute('closing');
    Sunrise.close();
    }, {once:true})
})


const Leverless = document.querySelector('[data-Leverless]')
const openLeverless = document.querySelector('[data-Lever-target]')
const closeLeverless = document.querySelector('[data-Leverless-close]')

openLeverless.addEventListener('click', () => {
  Leverless.show();
})

closeLeverless.addEventListener('click', () => {
  Leverless.setAttribute('closing', "");
  Leverless.addEventListener('animationend', () => {
    Leverless.removeAttribute('closing');
    Leverless.close();
    }, {once:true})
})


const Monopolies = document.querySelector('[data-Monopolies]')
const openMonopolies = document.querySelector('[data-Monopolies-target]')
const closeMonopolies = document.querySelector('[data-Monopolies-close]')

openMonopolies.addEventListener('click', () => {
  Monopolies.show();
})

closeMonopolies.addEventListener('click', () => {
  Monopolies.setAttribute('closing', "");
  Monopolies.addEventListener('animationend', () => {
    Monopolies.removeAttribute('closing');
    Monopolies.close();
    }, {once:true})
})