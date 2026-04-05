import type { LoaderFunctionArgs } from 'react-router';
import { apiService } from '../../services';

export const detailAdLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    throw new Response(null, { status: 404 });
  }
  let responseData;
  try {
    responseData = (await apiService.getAdItemById(params.id)).data;
  } catch {
    throw new Response(null, { status: 500 });
  }

  return responseData;
};
