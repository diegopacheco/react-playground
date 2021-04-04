#!/bin/bash

appname="$1"
if [ -z $appname ]
then
    echo "Please provide a valid appname!"
    exit 0
fi

npx create-react-app $appname
cd $appname/
npm install 
npm start