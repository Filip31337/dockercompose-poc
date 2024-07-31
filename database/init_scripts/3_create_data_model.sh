#!/bin/bash

# Download the SQL script
curl -LJO https://raw.githubusercontent.com/gvenzl/sample-data/master/countries-cities-currencies/install.sql

# Execute the SQL script as TEST user
sqlplus -s TEST/test@//localhost/FREEPDB1 @install.sql

# Remove the SQL script after execution
rm install.sql
