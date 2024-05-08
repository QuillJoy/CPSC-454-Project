# CPSC 454 Project: Blood Bank

## Overview
This repository details a React project using Express API to communicate with a MYSQL database sitting in a virtual machine to act as a database microservice
and a webapp running in another virtual machine.

## How to Run
1. Using VirtualBox, create a virtual machine that uses the Bridged Adapter for its network adapter.
2. Install git and npm.
3. Git clone this repository.
4. Install mysql and run the commands in database/schema.sql to create the database. Make sure the bind-address setting in my.cnf is set to 0.0.0.0.
5. In mysql, create and authorize a user that can access this database via: 
`CREATE USER 'Ubuntu' IDENTIFIED BY 'password';`
`GRANT ALL PRIVILEGES ON bb_db.* TO 'Ubuntu';`
`ALTER USER 'Ubuntu' IDENTIFIED WITH mysql_native_password BY 'password';`
`flush privileges`
7. Create another virtual machine by cloning this machine. Git clone the repository again.
8. In the VM hosting the datbase, do `ifconfig` to see its IP address.
9. Paste this address in the host section of db.js in the cloned virtual machine.
10. To verify the IP address, do 'ifconfig' in the database virtual machine terminal to record the VM's IP. Then on the webapp virtual machine, ping that IP to ensure network connectivity.
11. Navigate to the root of the server directory in the cloned virtual machine and run `node server.js`.
12. Navigate to the root of the blood-bank-app directory and run `npm install`.
13. In the root of the blood-bank-app directory, run `npm start`.

## Usage Flow for a Donor
1. Go to Donor Sign Up
2. Enter details and submit
3. Go to Donor Sign In
4. Go to Create Appointments and submit
5. Go to See Appointments

## Usage Flow for an Employee
1. Go to employee sign in
2. Enter 'emp@example.com' and 'password'
3. Go to See Donors
## Plugin Feature
1. Email notifications: An email notification plug-in is a feature that sends automated email alerts or notifications based on predefined triggers or events in a system. It’s commonly used to inform donors or administrators about important updates, issues, or actions.
