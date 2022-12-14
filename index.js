const chai = 'chai'
const spies = 'chai-spies'

function receivesAFunction(){
    let spy = chai.spy
    console.log(spy)
}

spy(receivesAFunction)