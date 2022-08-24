const createTrainer = async (req, res) => {
    const { body } = req;
    console.log(req);
    // Crear una funcion en dataAccess y mandar el Body
    
  return { success: true, message: "Trainer was created successfully", body };
};

module.exports = createTrainer;
