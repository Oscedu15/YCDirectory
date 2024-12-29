import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  //!Al estar useCdn en false, obtendremos los resultados directamente desde la base de datos y no del cache
})
//?Intsalamos npm i server-only, para garantizar que cualquier nueva informacion cargada en la base de datos, sea renderizada directamente