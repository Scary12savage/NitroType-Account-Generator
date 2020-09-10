# NitroType Account Generator
A NitroType bookmarklet that generates accounts.

## Installation
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:{let s=document.createElement('script');s.type='text/javascript';s.src='https://cdn.jsdelivr.net/gh/Ray-Adams/NitroType-Account-Generator@latest/account_generator.js';document.body.appendChild(s)}
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
