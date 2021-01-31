import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { db } from '@/main'

//Models
import IDepartment from '@/models/iDepartment'

@Module
export default class DepartmentStoreModule extends VuexModule {
  //State
  departments: Array<IDepartment> = []  

  //Mutations
  @Mutation
  updateStateDepartments(payload: Array<IDepartment>) {
    this.departments = payload    
  }

  //Actions
  @Action({ commit: 'updateStateDepartments', rawError: true })
  async getDepartments(): Promise<Array<IDepartment>> {        
    const querySnapshot = await db.collection('departments').get()
    const result: Array<IDepartment> = []

    querySnapshot.forEach((doc: any) => {  
      result.push(doc)
    })

    return result
  }

}