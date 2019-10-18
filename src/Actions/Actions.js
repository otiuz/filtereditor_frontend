import * as types from '../constants/actionTypes'

export const loadSection = section => ({type: types.LOAD_SECTION, section})

export const openSection = element => ({type: types.OPEN_SECTION, element})
export const closeSection = element => ({type: types.CLOSE_SECTION, element})
export const openSubsection = element => ({type: types.OPEN_SUBSECTION, element})
export const closeSubsection = element => ({type: types.CLOSE_SUBSECTION, element})
export const openBlocksection = element => ({type: types.OPEN_BLOCKSECTION, element})
export const closeBlocksection = element => ({type: types.CLOSE_BLOCKSECTION, element})
export const openBlock = element => ({type: types.OPEN_BLOCK, element})
export const closeBlock = element => ({type: types.CLOSE_BLOCK, element})

export const showBlock = (show, id) => ({type: types.SHOW_BLOCK, show, id})
export const hideBlock = (hide, id) => ({type: types.HIDE_BLOCK, hide, id})
export const customTextColor = (color, id) => ({type: types.CUSTOM_TEXT_COLOR, color, id})
export const defaultTextColor = (color, id) => ({type: types.DEFAULT_TEXT_COLOR, color, id})
export const customBorderColor = (color, id) => ({type: types.CUSTOM_BORDER_COLOR, color, id})
export const defaultBorderColor = (color, id) => ({type: types.DEFAULT_BORDER_COLOR, color, id})
export const customBackgroundColor = (color, id) => ({type: types.CUSTOM_BACKGROUND_COLOR, color, id})
export const defaultBackgroundColor = (color, id) => ({type: types.DEFAULT_BACKGROUND_COLOR, color, id})
export const copyBlock = (settings, id) => ({type: types.COPY_BLOCK, settings, id})
export const pasteBlock = (settings, id) => ({type: types.PASTE_BLOCK, settings, id})
export const resetBlock = (settings, id) => ({type: types.RESET_BLOCK, settings, id})