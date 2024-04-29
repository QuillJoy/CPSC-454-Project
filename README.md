# CPSC 454 Project: Blood Bank

## Overview
This repository details a React project using Express API to communicate with a MYSQL database sitting in a virtual machine to act as a microservice.

## How to Run
1. Make sure the virtual machine is running. To verify the IP address, do 'ifconfig' in the virtual machine terminal to record the VM's IP. Then on the host machine, ping that IP to ensure network connectivity. Make sure the VM is set to use the Bridged Adapter.
2. Go to the root of the server directory and run `node server.js`
3. Go to the root of the blood-bank-app directory and run `npm start`

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
