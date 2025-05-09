import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.db');

db.serialize(() => {
db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    comment TEXT NOT NULL,
    ip TEXT NOT NULL,
    date TEXT NOT NULL
    )
`);
});

export default db;
