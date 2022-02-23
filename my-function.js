exports.handler = async (event) => {
    const response = {
        keyword: event.keyword,
        statusCode: 200,
        body: JSON.stringify('Youssef Shehata says ' + event.queryStringParameters.keyword),
    };
    return response;
};
