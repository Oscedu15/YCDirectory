import 'server-only';

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  //!Al estar useCdn en false, obtendremos los resultados directamente desde la base de datos y no del cache
  token,
});

if(!writeClient.config().token){
    throw new Error('Write token not found');
}
