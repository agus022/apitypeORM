import { Request, Response } from "express";
import { User } from "../entities/User";
import { parse } from "path";
import { json } from "stream/consumers";

//URL PARA CREAR USUARIOS
export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const user = new User();

    user.firstname = firstname;
    user.lastname = lastname;

    await user.save();

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const usersGet = await User.find();
    return res.json([usersGet]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error });
    }
  }
};

export const getUsersId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id_user: parseInt(id) });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const updateUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userUp = await User.findOneBy({ id_user: parseInt(req.params.id) }); //obtener el id de la ruta
    if (!userUp) return res.status(404).json({ message: "NOT FOUND !!!!!!" }); //verificar si existe el usuario
    await User.update({ id_user: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) return res.status(500).json({ message: error });
  }
  //return res.json("LISTOOOOOO");
};

export const deleteUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id_user: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
