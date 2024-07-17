import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'; 
import { Loan } from './Loan.js';
import { Author } from './Author.js';

export const BibliographicMaterial = sequelize.define('bibliographicMaterial', {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    isbn:{
        type: DataTypes.INTEGER,
        unique: true,
    },
    pages:{
        type: DataTypes.INTEGER,
    },
    year:{
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.BLOB,
    }
},{
    timestamps: false,
});


BibliographicMaterial.hasMany(Loan, {
    foreignKey: 'bibliographicMaterialId',
    sourceKey: 'id'
});
  
  Loan.belongsTo(BibliographicMaterial, {
    foreignKey: 'bibliographicMaterialId',
    targetId: 'id',
});


BibliographicMaterial.hasMany(Author, {
    foreignKey: 'bibliographicMaterialId',
    sourceKey: 'id'
})

Author.belongsToMany(BibliographicMaterial, {
    through: 'AuthorMaterial',
    foreignKey: 'authorId',
    otherKey: 'bibliographicMaterialId'  
})