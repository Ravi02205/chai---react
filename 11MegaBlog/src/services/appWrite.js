import conf from "../conf/conf";
import { Account, Client, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email,password})
            }else{
                return userAccount;
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async login({ email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }catch (error) {
            throw new Error(error);
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch (error) {
            console.log("Error getting current user", error);
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch (error) {
            console.log("Error logging out", error);
        }
        return null;
    }

};
let authService = new AuthService();
export default authService;
