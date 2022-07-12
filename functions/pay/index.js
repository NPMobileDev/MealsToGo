module.exports.payRequest = (request, response, stripeClient) => {
  console.log(JSON.parse(request.body).name);
  response.send("Success");
};
