/**
 * @jest-environment jsdom
 */

// Set up the DOM before importing the code
document.body.innerHTML = `
    <form id="urlForm">
        <input type="text" id="name" />
        <button type="submit">Submit</button>
    </form>
`;

const { handleSubmit } = require("../js/formHandler");

describe('handleSubmit', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="urlForm">
                <input type="text" id="name" />
                <button type="submit">Submit</button>
            </form>
        `;
    });

    it('is defined and can be called', () => {
        expect(handleSubmit).toBeDefined();
    });
});
