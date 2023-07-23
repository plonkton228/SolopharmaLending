import { FormType, statusT } from 'shared/models/types/FormType';
import {FormApi} from '../api/FormApi'
import { adminAPI } from 'shared/api/adminAPI';

const API = new adminAPI();
export const editForms = async (id : string, type : statusT) => {
    await API.editForm(id, type)
    
   }
 
 export const deleteForm = async (id:string) => {
    await API.deleteForm(id)
 }