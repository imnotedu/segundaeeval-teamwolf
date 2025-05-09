import db from './db';
import { Request, Response } from 'express';

export const saveContact = (req: Request, res: Response) => {
  const { email, name, comment } = req.body;
  const ip = req.ip;
  const date = new Date().toISOString();

  const stmt = db.prepare('INSERT INTO contacts (email, name, comment, ip, date) VALUES (?, ?, ?, ?, ?)');
  stmt.run(email, name, comment, ip, date, (err) => {
    if (err) {
      res.status(500).json({ message: 'Error al guardar el contacto', error: err });
    } else {
      res.status(200).json({ message: 'Contacto guardado con éxito' });
    }
  });
  stmt.finalize();
};
