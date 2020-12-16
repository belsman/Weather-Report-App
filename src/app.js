import model from './weatherappmodel';

export default () => {
    model.load('jos').then(result => {
        const parseResult = model.parseData(result);
        console.log(parseResult);
    });
};
