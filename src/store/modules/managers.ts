import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { db } from '@/main'

//Models
import IManager from '@/models/iManager'

@Module
export default class ManagerStoreModule extends VuexModule {
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
      result.push(doc)
    })

    return result
  }
  
  @Action
  async getCurrentManager(payload: string): Promise<any> {
    const querySnapshot = await db.collection('managers').doc(payload).get()
    return querySnapshot.data() 
  }

  @Action
  addNewManager(payload: IManager): void {
    db.collection('managers').add(payload)
  }  



  get allManagers() {
    return this.managers
      .reduce((previousValue: Array<object>, currentValue: any) => {
        const payload: any = currentValue.data()
        payload.uid = currentValue.id
        previousValue.push(payload)
        return previousValue
      }, []) 
  }

}