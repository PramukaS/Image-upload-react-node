module.exports = (sequelize, DataTypes) => {

    const ImageUpload = sequelize.define("ImageUpload", {
        imageName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return ImageUpload;
}