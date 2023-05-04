import { getAllElements, getElement } from './getElement';

function getExampleDOM() {
    const div = document.createElement('div');
    div.innerHTML = `
        <ul class="o-list">
            <li class="o-list__item">Item 1</li>
            <li class="o-list__item">Item 2</li>
            <li class="o-list__item">Item 3</li>
            <li class="o-list__item">Item 4</li>
            <li class="o-list__item">Item 5</li>
            <li class="o-list__item">Item 6</li>
        </ul>
    `;

    return div;
}

test('gets an element from the DOM', () => {
    const container = getExampleDOM();

    const list = getElement('.o-list', container);

    expect(list?.tagName).toBe('UL');
});

test('gets multiple elements from the dom', () => {
    const container = getExampleDOM();

    const listItems = getAllElements('.o-list__item', container);

    expect(listItems?.length).toBe(6);
});
