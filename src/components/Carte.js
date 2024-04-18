import React from 'react';

const Carte = ({ joueur }) => {
    return (
        <div className="carte">
            <img src={joueur.image} alt={joueur.nom} />
            <h3>{joueur.nom}</h3>
            <p>Poste: {joueur.prenom}</p>
            <p>Âge: {joueur.age}</p>
            <p>Tir: {joueur.tir}</p>
            <p>Passe: {joueur.passe}</p>
            <p>Dribble: {joueur.dribble}</p>
            <p>Defense: {joueur.defense}</p>
            <p>physique: {joueur.physique}</p>
            <p>Prix: {joueur.prix}</p>
            <p>Poste: {joueur.poste}</p>
            <p>Note: {joueur.note}</p>
            <p>Strategy: {joueur.strategy}</p>
        </div>
    );
};
export default Carte;

