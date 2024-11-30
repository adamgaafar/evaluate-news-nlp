const { checkUrl } = require("../js/checkUrl")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(checkUrl("read")).toBeFalsy();
    })

    test('emails are not considered valid urls', () => {
        expect(checkUrl("mailto:ahmed@gmail.com")).toBeFalsy();
    })

    test('expect urls to be true', () => {
        expect(checkUrl("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(checkUrl("")).toBeFalsy();
    })
})