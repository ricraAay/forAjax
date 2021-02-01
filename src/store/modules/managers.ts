import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { db } from '@/main'

//Models
import IManager from '@/models/iManager'

@Module
export default class ManagerStoreModule extends VuexModule {

  managers: Array<IManager> = []  
  currentManager: any = null

  @Mutation
  updateStateManagers(payload: Array<IManager>) {
    this.managers = payload
  }

  @Mutation
  updateStateCurrentManager(payload: IManager) {
    this.currentManager = payload
  }
  
  @Mutation
  filtrationManagersList(payload: string) {
    this.managers = this.managers
      .reduce((previousValue: Array<IManager>, currentValue: any) => {
        const value = currentValue.data()

        if([value.name, value.surname, value.department].includes(payload)) {
          previousValue.push(currentValue)
        }       
        
        return previousValue
      }, [])
  }

  //Actions
  @Action({ commit: 'updateStateManagers', rawError: true })
  async loadingManagers(): Promise<Array<IManager>> {            
    const querySnapshot = await db.collection('managers').get()
    const result: Array<IManager> = []

    querySnapshot.forEach((doc: any) => result.push(doc))

    return result
  }
  
  @Action({ commit: 'updateStateCurrentManager', rawError: true })
  async getCurrentManager(guid: string): Promise<any> {
    const querySnapshot = await db.collection('managers').doc(guid).get()
    return querySnapshot.data() 
  }
  
  @Action({ commit: 'updateStateCurrentManager', rawError: true })
  removeManager(guid: string) {
    db.collection('managers')
      .doc(guid)
      .delete()
      .then(() => null)
  }  

  @Action
  addManager(payload: IManager): void {
    db.collection('managers')
      .doc(payload.guid.toString())
      .set(payload)
  }  

  @Action
  updateCurrentManager(payload: any): void {
    db.collection('managers').doc(payload.guid)
      .update(payload)
  } 


  get allManagers() {
    return this.managers.reduce((previousValue: Array<object>, currentValue: any) => {
      const payload: any = currentValue.data()
      payload.registration = new Date(payload.registration).toLocaleString("ru")

      previousValue.push(payload)

      return previousValue
    }, []) 
  }

}