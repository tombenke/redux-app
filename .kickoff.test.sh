#!/bin/bash
testBaseDir=${HOME}/tmp
destDir=${testBaseDir}/test-redux-app
cwd=`pwd`
echo Executing kickoff -a .kickoff.test.yml -f . -d ${destDir}
rm $destDir -rf
kickoff -a .kickoff.test.yml -f . -d $destDir
cd $destDir
echo $destDir
pwd
./.kickoff.sh
rm node_modules/* -fr
npm install
npm run build
npm run test
cd $cwd
