import { combineReducers } from 'redux';
import shareItemPreviewReducer from './modules/shareItemPreview';

export default combineReducers({
    shareItemPreview: shareItemPreviewReducer 
})