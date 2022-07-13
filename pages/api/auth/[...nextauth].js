import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { v4 as uuidv4 } from 'uuid';
import md5 from "react-native-md5";
import requestIp from 'request-ip' // Get Local IP
		
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
  
   CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
   
	
	credentials: {
      email: { label: "Username", type: "email", placeholder: "User mail" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
		console.log(credentials)
		/* const payload = {
          email: credentials.email,
          password: credentials.password,
        }
		conn.options.user="sys_app_core";
		conn.options.password="9lw4Li7KEzeosFB2u5An7o"; */
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      /* const res = await fetch("http://ivanov.dev.itradius.ru/api/login2", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json() */
	 /*  	const uid=uuidv4(); //  '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
		const detectedIp = requestIp.getClientIp(req)
		let host=req.headers.host.split(".")[0];
	
			
		let firms=[];
		let users=[];
		let domain='';
		let pgName='';
		let pgPassword='';
	    let login=''
	    let user=''
	    let firm=''
	    let query=''
	    query = 'SELECT * from public."SYS_DOMAINS" where "C_ACTIVE"=true and "S_DOMAIN_CODE"=$1';
		console.log("user db ",conn.options.user)
		const domains = await conn.query(query,[host] );
		const hash=md5.hex_md5(credentials.password);

		if (domains.rows.length>0)   {
			domain=domains.rows[0].U_DOMAIN_ID;
			pgName=domains.rows[0].S_DB_USERNAME;
			pgPassword=domains.rows[0].S_DB_PASSWORD;
			conn.options.user=pgName;
			conn.options.password=pgPassword;
			console.log("user db2 ",conn.options.user)	
		}
	  
	  
	   if(credentials.username!=='' && credentials.password!=='' ){
		if( domain!=''){
			query ='SELECT "U_USER_ID", "S_LOGIN" from public."USR_USERS" where "C_ACTIVE"=true and "U_DOMAIN_ID"=$1 and "S_EMAIL"=$2 and "S_PASSWORD_HASH"=$3';
			users = await conn.query( query, [domain,credentials.username,hash]);
			console.log(' hash ',hash,' users ',users.rows);

			if(users.rows.length>0){
				user=users.rows[0].U_USER_ID;				
				login=users.rows[0].S_LOGIN;				
				query ='SELECT "S_NAME" from public."USR_USER_FIRMS" left join public."USR_FIRMS" on "U_USER_FIRM_ID"="U_FIRM_ID" where "C_ACTIVE"=true and "U_DOMAIN_ID"=$1 and "U_USER_ID"=$2 ';
				firms=await conn.query( query, [domain,user]);
				//console.log(firms)
				if(firms.rows.length>0)
				 firm = firms.rows[0].S_NAME;
				const today = new Date()
				const dateBegin = new Date(2000,1,1)
				
				
				// const sess=await conn.query( query, [uid,domain,user,today, detectedIp]);
				// console.log(sess)
				
			}			
		}
	   }//  if(credentials.username!=='' && credentials.password!=='' ){ */
	  
      const user="test"
      const login="test"
      const firm="Firm"	  
	  console.log(login,firm, host )
		//const user={ id: 1, name: 'J Smith', email: 'jsmith@example.com' }
		
      // If no error and we have user data, return it
      if (user!='' ) {
		const logged  ={id: 1, name: login+";"+firm+";"+uid  } 
		console.log(' logged ',logged)
		  
        return logged
      }
      // Return null if user data could not be retrieved
      return null
    }
  })
  
  
  
  ],
  
  secret: "f7059062-47ca-4e8f-b0d5-34fdd605eddd",
  pages: {
     //  signIn: '/signin',
       error: '/admin/users',
	},
	



})