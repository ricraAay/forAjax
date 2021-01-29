import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { db } from '@/main'

//Models
import IManager from '@/models/iManager'

@Module
export default class Database extends VuexModule {
  //State
  managers: Array<Object> = []  

  //Mutations
  @Mutation
  updateStateManagers(payload: Array<Object>) {
    this.managers = payload
  }

  //Actions
  @Action({ commit: 'updateStateManagers', rawError: true })
  async getAllManagers(): Promise<Array<object>> {        
    const querySnapshot = await db.collection('managers').get()
    const result: Array<Object> = []

    querySnapshot.forEach((doc: any) => {   
      result.push(doc.data())
    })

    return result
  }
  
  @Action
  addNewManager(payload: IManager): void {
    db.collection('managers').add(payload)
  }  

}