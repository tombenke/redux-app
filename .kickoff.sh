#!/bin/bash
export files="package.json package-lock.json README.md LICENSE.md"
export os=$(uname -a | head -n1 | awk '{print $1;}')
for f in $files; do
    if [[ $os == 'Linux' ]]; then
        sed -f .kickoff.sed -i $f
    else
        sed -f .kickoff.sed -i '' $f
    fi
done

