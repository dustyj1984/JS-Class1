let username="dustin2022";
let password="class2022";
let profileName="Dustin Jensen";
let userPhoneNumber="123-234-5678";
let userEmail="dustin2022@gmail.com";
let profileImage="none";
let profileLanguage="English";
let profileFont="Arial";
let profileFontSize="10px";
let profileShowdow="transparent";
let planDetails="Basic plan";
let viewingRestrictions="Childern";
let paymentMethod="Visa";
let firstNameOnCard="Dustin";
let lastNameOnCard="Jensen";
let ccNumber="4400 7756 2233 5588";
let ccExpirationDate="2014-12-2025";
let ccSecurityCode="123";
let billingZipCode="90505";
let billingDay="15th of each month";

document.write(`
<p>User : ${username}</p>
<p>Password: ${password}</p>
<p>Name: ${profileName}</p>
<p>Phone #: ${userPhoneNumber} </p>
<p>Email: ${userEmail} </p>
<p>Image: ${profileImage} </p>   
<p>Language: ${profileLanguage}</p>
<p>Profile Font: ${profileFont} </p>
<p>FontSize: ${profileFontSize} </p>
<p>Profile Shadow: ${profileShowdow} </p>
<p>Plan Details: ${planDetails} </p>
<p>Viewing Restrictions: ${viewingRestrictions} </p>
<p>Payment Method: ${paymentMethod} </p>
<p>First Name: ${firstNameOnCard} </p>
<p>Last Name: ${lastNameOnCard} </p>
<p>CC #: ${ccNumber} </p>
<p>Expiration Date: ${ccExpirationDate} </p>
<p>Security Code: ${ccSecurityCode} </p>
<p>Zip Code: ${billingZipCode} </p>
<p>Billing Day: ${billingDay} </p>
`)