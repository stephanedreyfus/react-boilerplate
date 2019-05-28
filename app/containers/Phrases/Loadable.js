/**
 * Asynchronously loads the component for Phrases
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
