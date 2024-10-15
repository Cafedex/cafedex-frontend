export default ({config}) => {
    const isDevelopment = process.env.APP_ENV === 'development';

    return {
        ...config,
        extra: {
        apiUrl: isDevelopment ? 'http://localhost:8080' : 'https://cafedex.app/api',
        },
    };  
}