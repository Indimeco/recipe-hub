GeneratedTypes='./types/generated'
AppSrc='./packages/app/src/types/generated'
ServerSrc='./packages/server/src/types/generated'

cp -ruv $GeneratedTypes $AppSrc
cp -ruv $GeneratedTypes $ServerSrc