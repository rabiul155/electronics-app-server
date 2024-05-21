## General instructions on how to run the application locally

### Step 1 :

Go to the github repository and copy the repository link.
Here is the link of my github repo : https://github.com/rabiul155/mobile-app-server

### Step 2 :

Open a command terminal and write git clone .....paste your link......
Example : git clone https://github.com/rabiul155/mobile-app-server.git

### Step 3 :

Go to the mobile-app-server folder by writing this command : cd mobile-app-server

### Step 4 :

Install all dependencies by writing this command : npm install

### Step 5 :

Open the folder via vs code by writing this command : code .
This command open the project via vs code

### Step 6 :

Add a .env file in your project root directory and add your mongodb database uri and port number
Example :
PORT=5000
DATABASE_URL=write-your-database-url-here
Note : You must have to write like this format

### Step 7 :

Go back your terminal and write this command : npm run dev
Then = your api will be running successfully on port 5000
