if [ ! $1 ]; then
    echo 'err no param'
    exit
fi
printf $1 > .entry
npm run build
printf '' > .entry
