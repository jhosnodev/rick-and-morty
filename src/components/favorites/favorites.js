import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Favorites.css'

const Favorites = ({myFavorites, onClose}) => {
    return (
        <main className='favorites'>
                  {myFavorites.map((character) => (
        <Card
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          key={character.id}
          onClose={onClose}
        />
      ))}
        </main>
    );
}



export function mapStateToProps(state) {
    return {myFavorites : state.characters}
  }

  export default connect(mapStateToProps)(Favorites);