const PlayerModel = require('./player-model');
const request = require('supertest');
const PlayerRouter = require('./player-router');
const db = require('../data/db-config');

// it('Should set testing environment', () => {
//     expect(process.env.DB_ENV).toBe('testing');
// });

describe('add', ()=>{
    beforeEach(async ()=>{
        await db('bballPlayers').truncate();
    })
        it('should add player to database', async ()=>{
            const records = await db('bballPlayers');
            expect(records).toHaveLength(0);
            
            player = await PlayerModel.add({ name: 'Donovan Mitchell', team: 'Utah Jazz', position:"SG" });
            expect (player.name).toBe('Donovan Mitchell');
    
            const players = await db('bballPlayers');
            expect (players).toHaveLength(1);
        })
    })


    // Delete Tests

    describe('delete', ()=>{
        beforeEach(async ()=>{
            await db('bballPlayers').truncate();
        })
            it('should remove player from database', async ()=>{
                const addedPlayer = await PlayerModel.add({ name: 'Donovan Mitchell', team: 'Utah Jazz', position:"SG" })
                const records = await db('bballPlayers');
                expect(records).toHaveLength(1);
                
                await PlayerModel.remove(addedPlayer.id);
        
                const players = await db('bballPlayers');
                expect (players).toHaveLength(0);
            })
        })

        describe('delete', ()=>{
            beforeEach(async ()=>{
                await db('bballPlayers').truncate();
            })
                it('should remove player from database', async ()=>{
                    const addedPlayer = await PlayerModel.add({ name: 'Donovan Mitchell', team: 'Utah Jazz', position:"SG" })
                    const records = await db('bballPlayers');
                    expect(records).toHaveLength(1);
                    
                    await PlayerModel.remove(addedPlayer.id);
            
                    const players = await db('bballPlayers');
                    expect (players).toHaveLength(0);
                })

            })

            describe('delete', ()=>{
                beforeEach(async ()=>{
                    await db('bballPlayers').truncate();
                })
                    it('should remove player from database', async ()=>{
                        const addedPlayer = await PlayerModel.add({ name: 'Donovan Mitchell', team: 'Utah Jazz', position:"SG" })
                        await PlayerModel.add({ name: 'Rudy Gobert', team: 'Utah Jazz', position:"C" })
                        

                        await PlayerModel.remove(addedPlayer.id);
                        let players = await db('bballPlayers')
                        expect(players)
                        .not
                        .toContainEqual({"id": 1, "name": "Donovan Mitchell", "position": "SG", "team": "Utah Jazz"})

                        expect(players)
                        .toContainEqual({"id": 2, "name": "Rudy Gobert", "position": "C", "team": "Utah Jazz"})
                    })
    
                })


        