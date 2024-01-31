export const validateUsers = (req: any, res: any, next: any) => {
  const { body } = req;

  // Verifica se o nome foi passado
  if (body.name === undefined || "") {
    return res.status(400).json({ message: "The field 'name' is required" });
  }

  // Verifica se o email foi passado
  if (body.email === undefined || "") {
    return res.status(400).json({ message: "The field 'email' is required" });
  }

  // Verifica se a senha foi passada
  if (body.password === undefined || "") {
    return res
      .status(400)
      .json({ message: "The field 'password' is required" });
  }

  next();
};

export const validateUpdateUser = (req: any, res: any, next: any) => {
  const { body } = req;

  // Verifica se o nome foi passado
  if (body.name === undefined) {
    return res.status(400).json({ message: "The field 'name' is required" });
  }

  // Verifica se o nome esta vazio
  if (body.name === "") {
    return res
      .status(400)
      .json({ message: "The field 'name' can not be empty" });
  }

  // Verifica se o email foi passado
  if (body.email === undefined) {
    return res.status(400).json({ message: "The field 'email' is required" });
  }

  // Verifica se o email esta vazio
  if (body.email === "") {
    return res
      .status(400)
      .json({ message: "The field 'email' can not be empty" });
  }

  next();
};

export const valiateBalance = (req: any, res: any, next: any) => {
  const { body } = req;
  if (body.balance <= 0) {
    return res
      .status(400)
      .json({ message: "The value can't be lower or equal 0" });
  }
  next();
};
