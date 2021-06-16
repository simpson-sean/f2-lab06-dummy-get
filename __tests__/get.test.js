const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);

const trek = [
    {
        id: 100,
        name: 'jean_luc_picard',
        species: 'human',
        faction: 'starfleet',
        role: 'command',
        rank: 'captain',
        is_carbon_based: true,
    },

    {
        id: 101,
        name: 'data',
        species: 'android',
        faction: 'starfleet',
        role: 'command',
        rank: 'lieutenant_commander',
        is_carbon_based: false,
    },

    {
        id: 102,
        name:'spock',
        species: 'vulcan',
        faction: 'starfleet',
        role: 'science',
        rank: 'commander',
        is_carbon_based: true,

    },

    {
        id: 103,
        name:'weyoun',
        species: 'vorta',
        faction: 'dominion',
        role: 'supervisor',
        rank: 'supervisor',
        is_carbon_based: true,
    },

    {
        id: 104,
        name:'general_martok',
        species: 'klingon',
        faction: 'klingon_empire',
        role: 'military',
        rank: 'general',
        is_carbon_based: true,
    }
]


const android = {
    id: 101,
    name: 'data',
    species: 'android',
    faction: 'starfleet',
    role: 'command',
    rank: 'lieutenant_commander',
    is_carbon_based: false,

}


it('trek returns all characters', async() => {
    const response = await request.get('/trek-characters');

    expect(response.body).toEqual(trek);
    //done();

});

it('trek/:id responds with a single character', async() => {
    const response = await request.get('/trek-characters/101');

    expect(response.body).toEqual(android);
    //done();

});