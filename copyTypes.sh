GeneratedTypes='./types/generated'
AppSrc='./packages/app/src/types'
ServerSrc='./packages/server/src/types'

cp -ruv $GeneratedTypes $AppSrc
cp -ruv $GeneratedTypes $ServerSrc