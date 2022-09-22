 /////// SINGLETON
import Reports from './reports'
import Wallets from './wallets'

export default class Users {
    static instance: Users
    private users: { [id: string]: { [id: string]: string } } = {}
    private reports = new Reports()
    private wallets = new Wallets()

    constructor() {
        if (Users.instance) {
            return Users.instance
        }
        Users.instance = this
    }

    registerUser(newUser: { [id: string]: string }): string {
        // register a user
        if (!(newUser['user_name'] in this.users)) {  //unique user_id.
            // Using existing user_name as the id  
            const userId = newUser['user_name']
            this.users[userId] = newUser
            this.reports.logEvent(`new user '${userId}' created`)
            // create a wallet for new user
            this.wallets.createWallet(userId)
            // give user a sign up airdrop
            this.reports.logEvent(
                `Give new user '${userId}' sign up bonus of 10`
            )
            this.wallets.adjustBalance(userId, 10)
            return userId
        }
        return ''
    }

    editUser(userId: string, user: { [id: string]: string }): boolean {
        //  Not implemented yet
        console.log(userId)
        console.log(user)
        return false
    }

    changePwd(userId: string, password: string): boolean {
        //  Not implemented yet
        console.log(userId)
        console.log(password)
        return false
    }
}