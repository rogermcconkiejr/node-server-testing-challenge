const db = require('../data/db-config');

module.exports = {
    get,
    add,
    remove
}

function get(){
    return db('bballPlayers')
}

async function add(player){
    const [id] = await db('bballPlayers').insert(player, 'id');
    return db('bballPlayers')
    .where ({ id })
    .first();
  }

function remove(player_id) {
    return db('bballPlayers')
        .where('id', player_id)
        .del()
}