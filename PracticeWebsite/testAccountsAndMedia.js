let account0 = new Account("account0@gstatus.com", "pass0", "Alias0");

let account1 = new Account("account1@gstatus.com", "pass1", "Alias1");  

let account2 = new Account("account2@gstatus.com", "pass2", "Alias2");

let account3 = new Account("account3@gstatus.com", "pass3", "Alias3");

let account4 = new Account("account4@gstatus.com", "pass4", "Alias4");

let account5 = new Account("account5@gstatus.com", "pass5", "Alias5");

let account6 = new Account("account6@gstatus.com", "pass6", "Alias6");

let account7 = new Account("account7@gstatus.com", "pass7", "Alias7");

let account8 = new Account("account8@gstatus.com", "pass8", "Alias8");

let account9 = new Account("account9@gstatus.com", "pass9", "Alias9");

accountsArray.push(account0, account1, account2, account3, account4, account5, account6, account7, account8, account9);


account0.uploads["item0"] = "0dogVideo.mp4";
account0.uploads["item1"] = "1dogVideo.mp4";
account0.uploads["item2"] = "2dogVideo.mp4";
account0.uploads["item3"] = "3dogVideo.mp4";
account0.uploads["item4"] = "4dogVideo.mp4";
account0.uploads["item5"] = "5dogVideo.mp4";
account0.uploads["item6"] = "6dogVideo.mp4";
account0.uploads["item7"] = "7dogVideo.mp4";
account0.uploads["item8"] = "8dogVideo.mp4";
account0.uploads["item9"] = "9dogVideo.mp4";

account1.uploads["item0"] = "0catVideo.mp4";
account1.uploads["item1"] = "1catVideo.mp4";
account1.uploads["item2"] = "2catVideo.mp4";
account1.uploads["item3"] = "3catVideo.mp4";
account1.uploads["item4"] = "4catVideo.mp4";
account1.uploads["item5"] = "5catVideo.mp4";
account1.uploads["item6"] = "6catVideo.mp4";
account1.uploads["item7"] = "7catVideo.mp4";
account1.uploads["item8"] = "8catVideo.mp4";
account1.uploads["item9"] = "9catVideo.mp4";

account2.uploads["item0"] = "0birdVideo.mp4";
account2.uploads["item1"] = "1birdVideo.mp4";
account2.uploads["item2"] = "2birdVideo.mp4";
account2.uploads["item3"] = "3birdVideo.mp4";
account2.uploads["item4"] = "4birdVideo.mp4";
account2.uploads["item5"] = "5birdVideo.mp4";
account2.uploads["item6"] = "6birdVideo.mp4";
account2.uploads["item7"] = "7birdVideo.mp4";
account2.uploads["item8"] = "8birdVideo.mp4";
account2.uploads["item9"] = "9birdVideo.mp4";

let i = 2;
function populateAccountsUploads()
{
 let uploadsIndex = ("xx");
 
 //for (let i = 0; i <= accountsArray.length; i++)
 //{
  //uploadsIndex = ("item" + i);
  accountsArray[0].uploads[uploadsIndex] = i + "yetAnotherrrrrrcoolMusicVideo.mp4";
  i++;
  alert(i);
 //}	 
}