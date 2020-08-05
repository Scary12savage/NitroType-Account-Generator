# NitroType Account Generator
A NitroType bookmarklet that generates accounts.

## Installation
Copy and paste the code below into the URL section of a new bookmark.


<details>
  <summary><strong>Tip</strong></summary>
  <br>
  <p>Triple-click on the code block below to quickly copy the bookmarklet's contents.</p>
</details>

```javascript
javascript:(async()=>{var b=prompt("Enter base username:"),c=prompt("Enter password:"),d=prompt("Enter the number of accounts:");post=async(a,b)=>(await fetch(a,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b})).json(),alert(`Attempting to generate ${d} accounts... Please wait for the next alert.`);for(var e=0;e<parseInt(d);e++)post("https://www.nitrotype.com/api/register",`acceptPolicy=true&email=&password=${c}&receiveContact=&username=${b+e}`).then(a=>{console.log(a)}).catch(a=>{console.error(a)});alert("Operation complete. Check the console for individual HTTP responses.")})();
```
**NOTE**: You can view the beautified file here: [account_generator.js](../master/account_generator.js)

## Usage
1. If you are logged into an account, logout and go to https://www.nitrotype.com
2. Click on the bookmarklet, and you will be prompted for a base username, password, and the number of accounts you would like to generate.
3. After answering the prompts, wait a couple of seconds, and the accounts will be generated (see [below](#limitations) for limitations).

## Example
If you generated 5 accounts with the base username of `baseusername_`, the accounts would have the following usernames:
* `baseusername_0`
* `baseusername_1`
* `baseusername_2`
* `baseusername_3`
* `baseusername_4`

## Limitations
You may get rate limited if you generated too many accounts at one time, however, this is only temporary to prevent the NitroType API from being overwhelmed.

## Troubleshooting
If you experience any problems generating accounts, check the developer console for individual HTTP responses.

## Compatibility
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
