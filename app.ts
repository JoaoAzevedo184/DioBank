import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialCustomer } from './class/SpecialCustomer'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(-30)
peopleAccount.deposit(30)
peopleAccount.withdraw(40)
peopleAccount.withdraw(0)
peopleAccount.withdraw(30)



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(30)
console.log(companyAccount)