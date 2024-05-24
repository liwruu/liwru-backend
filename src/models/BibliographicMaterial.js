import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
//import { MaterialType } from './MaterialType.js';


export const BibliographicMaterial = sequelize.define('bibliographicMaterial', {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
    },
    isbn:{
        type: DataTypes.INTEGER,
    },
    pages:{
        type: DataTypes.INTEGER,
    },
    year:{
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false,
    /*hooks: {
        beforeCreate: async (bibliographicMaterial) => {
            const materialType = await MaterialType.findByPk(bibliographicMaterial.materialTypeId);
            if(!materialType){
                throw new Error('Material Type not found');
            }

            const prefix = materialType.id;

            const lastBibliographicMaterial = await BibliographicMaterial.findOne({
                where:{
                    id: {
                        [sequelize.Op.like]: `${prefix}-%`
                    }
                },
                order: [['createdAt', DESC]]
            });

            let newIdNumber = '0001';
            if (lastBibliographicMaterial) {
                const lastIdNumber = parseInt(lastBibliographicMaterial.id.split('-')[1]);
                newIdNumber = (lastIdNumber + 1).toString().padStart(4, '0');
            }

            bibliographicMaterial.id = `${prefix}-${newIdNumber}`;
        }
    }*/
});

