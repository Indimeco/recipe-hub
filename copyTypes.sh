GlobalTypes='./types/generated'
AppSrc='./packages/app/src/types'
ServerSrc='./packages/server/src/types'
DatabaseSrc='./packages/db/src/types'

cp -ruv $GlobalTypes $AppSrc
cp -ruv $GlobalTypes $ServerSrc
cp -ruv $GlobalTypes $DatabaseSrc
