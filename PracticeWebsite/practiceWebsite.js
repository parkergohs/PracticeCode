/*
Table Of Contents (Sections)
----------------
Sign in code
Account class creation
Account object creation (10 test accounts)
Account object info population
Search content

Table Of Contents (Functions)
signIn()
signOut()
displayProfileTest()
createAccount()
testPopulateAccountsUploads()
search()
applyFilter()
addToTempSearchResults()
sortTempSearchResults()
displaySortedSearchResults()
addScoreToTrainingLog()
displayDailyTrainingScores()
*/

//Sign in code
//
//
function signIn()
{
 alert("Signing in");
 /*if (!signedIn())
 {
  displaySignInPage();
 }*/	
 
 //get input values
 let  emailInput = document.getElementById("emailInput").value;
 let  passInput = document.getElementById("passInput").value;
 let  aliasInput = document.getElementById("aliasInput").value;
 
 //search db for account
 for (let i = 0; i <= accountsArray.length; i++)
 {
   //search accountsArray for given email 
   if (emailInput == accountsArray[i].email)
   {
    //if email found, compare email/password input to records data	   
    if (emailInput == accountsArray[i].email && passInput == accountsArray[i].pass)
    {
	 alert("Email Input: " + emailInput + "\nAccount Email: " + accountsArray[i].email +
	 "\nPass Input: " + passInput + "\nAccount pass: " + accountsArray[i].pass);
	//if match, sign in, otherwise alert info doesnt match
	 //alert("Successfully signed in as " + accountsArray[i].email);
	 alert("Successfully signed in as " + accountsArray[i].email);
	 accountsArray[i].isSignedIn = true;
	 break;
    }
	else
	{
	 alert("account info doesnt match");
	}
   }
 }
}

function signOut()
{
 //account#.isSignedIn = false;	
 //load home page
}


function displayProfilesTest()
{
 let accountString = "";
 for (let i = 0; i <= 9; i++)
 {
  accountString +=  (JSON.stringify(accountsArray[i]) + "\n\n<br><br>");
 }
 $("#profileSection").append(accountString);
 
 //$("#profileSection").append(JSON.stringify(accountsArray) + "\n");
 //alert(JSON.stringify(accountsArray) );
}

let totalAccounts = 0;

//Account class creation
//
//
class Account   //Note: classes not hoisted
{
 //totalAccounts = 0;

 constructor(email, pass, alias)
 {
  totalAccounts = accountsArray.length;	 
	 
  this.id = totalAccounts + 1; 
  this.email = email; 
  this.pass = pass; 
  this.alias = alias; 
  
  this.uploads = {};   // new Array({});
  
  this.isSignedIn;
  
  let currentDate = new Date(),
  day = currentDate.getUTCDate(),
  month = currentDate.getUTCMonth() + 1,
  year   = currentDate.getUTCFullYear() + 1;
  currentDate = (day + " / " + month + " / " + year);
  this.signUpDate = currentDate; 
  
  totalAccounts++;
 }
}

let accountsArray = new Array();
//Account object creation (10 test accounts)
//
//
function createAccount()
{
 //check that all fields are filled in
 //check that passwords match
 //check that email is available
 let  emailInput = document.getElementById("emailInput").value;
 let  passInput = document.getElementById("passInput").value;
 let  aliasInput = document.getElementById("aliasInput").value;
 
 alert("emailInput" + emailInput + "\n" +
 "passInput" + passInput + "\n" +
 "aliasInput" + aliasInput + "\n");

 
 var admin = new Account("admin@gstatus.com", "secretz", "topTier");

 totalAccounts++;
 
 accountsArray.push(admin);
 
 alert("Profile created, there are now " + totalAccounts + " total accounts.\n" +
 "Email: " + admin.email + "\n" +
 "Pass: " + admin.pass + "\n" +
 "Alias: " + admin.alias);
 
 alert(JSON.stringify(accountsArray)); //Print All accounts in accountsArray
}


//Account object info population
//
//
/*
Account
-id
-email
-pss
-alias
-uploadedContent[{}, {}, {}...]

for #ofAccounts
{
 add 10 items to uploadedContent	
}
*/
function testPopulateAccountsUploads()
{
 for (let i = 0; i <= accountsArray.length; i++)
 {
  //alert(i);
  //JSON.stringify(accountsArray) + "\n"
  accountsArray[i].uploads.push("Test object");
 }
 alert(JSON.stringify(accountsArray));
}

//Search content
//
//
function search()
{	
	
 let searchInput = document.getElementById("searchInput").value;
 alert("Searching for: " + searchInput);	
 
 
 $("#searchResults").append("<h2>List of results</h2>");
 
 $("#searchResults").append("<h3>Item 1</h3>");
 
 
 //check accounts for media titles
 //if media title contains match, apply filter                                                                  applyFilter()
 //if media item passes filter, add to tempSearchResults[]                                                      addToTempSearchResults()
 //after checking all titles (optimize storage/search process), sort items into sortedSearchResults[]           sortTempSearchResults()
 //if exists, add to displayArray                                                                               displaySortedSearchResults()
 //displayArray + <br>
 
 let tempSearchResults = [];
 let sortedSearchResults = [];
 
 //loop through accounts
 for (let i = 0; i <= accountsArray.length; i++)
 {
   //loop through each account's uploads 
   for (upload in accountsArray[i].uploads)
   {
	if (searchInput.indexOf(upload))
	{
	 tempSearchResults.push(upload.value);
	 alert("Item found" + accountsArray[i].upload + "\nUpload: " + upload);
	 
	 //break;
    }
    	
   }
   $("#searchResults").append(tempSearchResults);
 }
 alert(tempSearchResults);
 
 applyFilter(); 
}



function  applyFilter()
{
 //get filter criteria from search options 	
 
 if (true/*item passes filters*/)
 {
  addToTempSearchResults()
 }
}

function  addToTempSearchResults()
{
 //add matches to unsorted temp array

}

function  sortTempSearchResults()
{
 //get sort criteria from search options 
 //sort temp results (compare sort methods for optimization)
 
 //sortedSearchResults = 
}

function  displaySortedSearchResults()
{
 for (let i = 0; i <= sortedSearchResults.length; i++)
 {
  $("#searchResults").append("<h3>" + sortedSearchResults[i] + "</h3>");	
 }
}




//Personal Training Log
//
//
let totalScore = 0;
let dailyScoresArray = [];


function addScoreToTrainingLog()
{
 dailyScoresArray = localStorage.getItem("dailyScoresArray")
 
 //get score value from input
 let dailyScoreInput = document.getElementById("dailyScoreInput").value;
 dailyScoresArray.push(dailyScoreInput);
 alert("Added " + dailyScoreInput + "  \ndailyScores Array " + JSON.stringify(dailyScoresArray));
 
 //add to local storage (Date : Score)
 localStorage.setItem("today", dailyScoreInput);
 totalScore = localStorage.getItem("totalScore")
 totalScore = parseInt(totalScore);
 totalScore += parseInt(dailyScoreInput);
 localStorage.setItem("totalScore", totalScore) ;
 
 localStorage.setItem("dailyScoresArray", dailyScoresArray);
}

function displayDailyTrainingScores()
{	
 // get info from local storage
 let scores = localStorage.getItem("today");
 alert("Total Score: " + localStorage.getItem("totalScore") +
     "\nDaily Scores Array: " + localStorage.getItem("dailyScoresArray") +
	 "\nToday's Score: " + localStorage.getItem("today"));
 //make info easily readable
 //display information
 //localStorage.removeItem("totalScore");
}