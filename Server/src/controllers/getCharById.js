const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  //* async await
  try {
    const { id } = req.params;
    console.log(typeof Number(id));
    const response = await axios(`${URL}${Number(id)}`);
    console.log(response.data);
    const { status, name, species, gender, origin, image } = response.data;
    const character = { id, status, name, species, gender, origin, image };

    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not Found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //! promesas
  /*  axios(`${URL}${id}`)
    .then(({data} )=> {
      const { status, name, species,  gender, origin, image} = data
      const character = {id, status, name, species,  gender, origin, image}
      character.name ? res.status(200).json(character) : res.status(404).send('Not Found')
    })
    .catch((error) => {
      res.status(500).json({error : error.message})
    }); */
};

module.exports = getCharById;
