CREATE TABLE doctor_info
( ID_dr SERIAL PRIMARY KEY,
first_name VARCHAR(100),
last_name VARCHAR(100),
username VARCHAR(100),
password VARCHAR(100),
address1 VARCHAR(255),
address2 VARCHAR(255),
address3 VARCHAR(255),
address4 VARCHAR(255),
address5 VARCHAR(255),
national_ins VARCHAR(50),
phone_number VARCHAR(20),
email_address_work VARCHAR(100),
email_address_private VARCHAR(100),
emergency_name VARCHAR(100),
emergency_number VARCHAR(20) );



CREATE TABLE organisation_info 
( ID_org SERIAL PRIMARY KEY, 
organisation_name VARCHAR(255),
username VARCHAR(100),
password VARCHAR(100),
address1 VARCHAR(255),
address2 VARCHAR(255),
address3 VARCHAR(255),
address4 VARCHAR(255),
address5 VARCHAR(255),
organisation_phone_number VARCHAR(20),
organisation_email VARCHAR(100) );


CREATE TABLE connection_info 
( ID_connection VARCHAR(100) PRIMARY KEY,
date_created INT,
ID_org VARCHAR(100),
ID_dr integer,
access BOOLEAN,
placement_start_date TIMESTAMP,
placement_end_date TIMESTAMP,
FOREIGN KEY (ID_dr)
REFERENCES doctor_info(ID_dr) ON DELETE CASCADE );


CREATE TABLE health_records
( ID VARCHAR(100) PRIMARY KEY, ID_dr INT, immunisations VARCHAR(255), health_conditions VARCHAR(255), date_onset TIMESTAMP, FOREIGN KEY (ID_dr) REFERENCES doctor_info(ID_dr) ON DELETE CASCADE );

NHS Hack Day - sharing

CREATE TABLE employment_history
( ID VARCHAR(100) PRIMARY KEY,
ID_dr INT, ID_org INT,
employment_start_date TIMESTAMP,
employment_end_date TIMESTAMP,
final_salary_nodal_point VARCHAR(100),
salary_increment_date TIMESTAMP,
FOREIGN KEY (ID_dr)
REFERENCES doctor_info(ID_dr) ON DELETE CASCADE );


CREATE TABLE bank_and_documents
( ID INT PRIMARY KEY,
ID_dr INT, 
bank_name VARCHAR(255),
bank_sort INT,
bank_account_number INT,
passport VARCHAR(100),
driving_license VARCHAR(100),
DBS VARCHAR(100),
DBS_date TIMESTAMP,
DBS_update_service BOOLEAN,
FOREIGN KEY (ID_dr)
REFERENCES doctor_info(ID_dr) ON DELETE CASCADE );

CREATE TABLE car_info
( ID INT PRIMARY KEY,
ID_dr INT,
car_registration VARCHAR(50),
car_colour VARCHAR(50),
car_make VARCHAR(100),
car_model VARCHAR(100),
FOREIGN KEY (ID_dr)
REFERENCES doctor_info(ID_dr) ON DELETE CASCADE );