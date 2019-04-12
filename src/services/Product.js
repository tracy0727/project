const API='/api/drinks.json';
function get(){
    return fetch(API).then(p =>p.json())
}
export default {get};