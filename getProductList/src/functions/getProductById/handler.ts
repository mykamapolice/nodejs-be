import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
const data = require('../../data.json');

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const id = event.pathParameters.id

  const item = data.find(item => item.id === id)
  return formatJSONResponse({
    item
  });
};

export const main = middyfy(getProductById);
