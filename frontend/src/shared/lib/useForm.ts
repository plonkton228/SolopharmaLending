import { FormType, statusT } from 'shared/models/types/FormType';
import {FormApi} from '../api/FormApi'
import { adminAPI } from 'shared/api/adminAPI';
const API = new FormApi();
export const ClickAdd = async (form : FormType ) =>{
   await API.addForm(form)
}


export const getForms = async () => {
  const response = await API.getForm();
  return response
}


