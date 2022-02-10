import { MongoClient, ObjectId } from 'mongodb';

let client;

/**
 * start the MongoDB Client with an URI
 */
export function initClient(uri) {
    if (!client) {
        client = new MongoClient(uri);
    }
}

export async function findAll() {
    try {
        // Verbunden mit EINER INSTANZ
        await client.connect();
        // Wähle eine Datenbank
        const db = client.db('test');
        // Wähle Collection
        const animals = db.collection('animals');
        
        // Dein Code !?

        return result; // wichtig <- 

    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }
}