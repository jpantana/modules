import util from '../helpers/util.js';

const makeStore = () => {
    let domString = '<h2>Help me</h2>';
    util.printToDom('store-container', domString);
};
makeStore();

export default { makeStore };