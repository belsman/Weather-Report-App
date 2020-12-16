import api from './weatherappmodel';

export default () => {
    api.load('calabar').then(result => console.log(result));
};
