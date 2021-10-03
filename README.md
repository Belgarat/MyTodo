# MyTodo
This is my project to test and deep learn angular components and technology.\
The purpose of this work is to create a skeleton for applications to decrease the time projects startups.

[Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## PrimeNG

### Installation
`npm install primeng --save` \
`npm install primeicons --save`\

For 'OrderListModule' install cdk library:
`npm install @angular/cdk --save`

Add following line to angular.json:
```
[...]
  "styles": [
    "node_modules/primeng/resources/themes/saga-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeicons/primeicons.css",
    "src/styles.scss"
  ],
[...]
```
Because PrimeNG can work correctly is important to add "SharedModule" in app.module.ts:
```
imports: [
      [...]
      MenubarModule,
      SharedModule,
      [...]
```
MenubarModule is a specific module for the use MenuBar component.

#### PrimeFlex
`npm install primeflex --save`\
Then change angular.json file add in styles array:
```angular2html
    "src/styles.scss",
    "./node_modules/primeflex/primeflex.css"
```

## NGRX 

### Install NGRX dependencies
`npm install @ngrx/{effects,entity,router-store,store,store-devtools} --save`

### Init directory architecture
Create this folders in core directory (root state):
- actions
- effects
- reducers
- models

For simplify use of store, create index.ts file on the root of state folder.
Every lazy module will have the same structure.\
Important declare in the single lazy module the store with this syntax:
```
StoreModule.forFeature('featuresTodos', reducers),
```
The property 'forFeatures' tells Angular that this is a store in a lazy module and can only be load with this module.

## Code documentation
For the documentation I use typescript standard:
```angular2html
  /**
  * Creates an instance of documenter.
  */
  constructor()

  /**
  * // TODO: comment dispose
  * Disposes documenter
  */
  dispose() 

  /**
  * // TODO: comment getScriptVersion
  * Gets script version
  * @param fileName
  * @returns script version
  */
  getScriptVersion(fileName: string): string 
```
