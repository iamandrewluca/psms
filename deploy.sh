#!/bin/sh

composer install

cd front/main
yarn install
yarn build
cd ../..

cd front/admin
yarn install
yarn build
cd ../..
