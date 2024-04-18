import React from 'react';
import Carte from './Carte';

const Grille = ({ joueurs }) => {
    return (
        <div className="grille">
            {joueurs.map((joueur) => (
                <Carte key={joueur.id} joueur={joueur} />
            ))}
        </div>
    );
};
export default Grille;
