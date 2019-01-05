import NETEASE_API, { getURL } from '@/constant/api';
import axios from 'axios';
import defaultCover from './assets/cover-default.jpg';
import get from 'lodash/get'


export const PLAY_SONG = 'PLAY_SONG';
export const FETCH_URL = 'FETCH_URL';
export const FETCH_SONG_DETAIL_SUCCESS = 'FETCH_SONG_DETAIL_SUCCESS';
export const FETCH_SONG_URL_SUCCESS = 'FETCH_SONG_URL_SUCCESS';
export const SWITCH_PREV_SONG = 'SWITCH_PREV_SONG';
export const SWITCH_NEXT_SONG = 'SWITCH_NEXT_SONG';
export const SWITCH_PLAY_STATE = 'SWITCH_PLAY_STATE';
export const PUSH_TO_PLAYLIST = 'PUSH_TO_PLAYLIST';
export const EMPTY_PLAYLIST = 'EMPTY_PLAYLIST';
export const PLAY_PLAYLIST = 'PLAY_PLAYLIST';
export const CHANGE_PLAYLIST_INDEX = 'CHANGE_PLAYLIST_INDEX';


