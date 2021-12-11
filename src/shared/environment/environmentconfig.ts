import dotenv from 'dotenv';

dotenv.config({
    path:
        process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.production',
});

module.exports = {
    serverHost: [process.env.SERVER_HOST],
    mongoUser: [process.env.MONGO_USER],
    mongoPassword: [process.env.MONGO_PASSWORD],
    mongoHost: [process.env.MONGO_HOST],
    mongoDatabase: [process.env.MONGO_DB],
};
