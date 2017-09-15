import Vue from 'vue';
import Mutations from './mutations.js';

import * as types from './mutations_type.js';


export const play_nowtrack = ({commit,song}) =>{
	commit(types.PLAYTRACK, song)
}
// export const XXX =({commit} => {
//      ...do something
// commit(types.TYPE_NAME)
// })
