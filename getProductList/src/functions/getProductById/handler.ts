import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
const data = require('../../data.json');

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const {productId} = event.pathParameters
  console.log(productId)

  const item = await JSON.parse(JSON.stringify(data)).find(item => Number(item.id) === Number(productId))
  return formatJSONResponse({
    item,
  });
};

export const main = middyfy(getProductById);
