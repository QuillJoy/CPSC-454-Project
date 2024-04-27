 CREATE database bb_db
    -> CHARACTER SET utf8mb4
    -> COLLATE utf8mb4_unicode_ci;

CREATE TABLE Donors (
    -> DonorID int,
    -> FirstName varchar(255),
    -> LastName varchar(255),
    -> Sex varchar(10),
    -> BloodType varchar(10),
    -> Email varchar(255),
    -> Password varchar(255),
    -> DOB varchar(255),
    -> PhoneNumber varchar(255)
    -> );

CREATE TABLE Appointments (
    -> Day int,
    -> Month int,
    -> Year int
    -> );

CREATE TABLE Employees (
    -> Email varchar(255),
    -> Password varchar(255),
    -> );


