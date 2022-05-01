# CLI Commands

## Run in watch mode/ nodemon

```
npm run start:dev
```

## Create a new Controller

```
nest generate controller <controller-name>
```

## Shorthand form for new controller

```
nest g co
```

# Create controller in a specific directory

```
nest generate controller modules/abc
```

# Create controller with no test files

```
nest g co --no-spec
```

# Create Service

```
nest generate service
```

Shorthand

```
nest g s
```

# Create a Module

```
nest g module <name>
```

# Create a DTO

```
nest g class <name>
```

e.g `nest g class coffees/dto/create-coffee.dto --no-spec`

<br>

# Points:

- **Services** are used to seperate business logic from the controller. Each service is a provider. It can inject dependencies. This means that objects can create various relationships with others. **How to use Dependency Injection?** To inject a provider, we use constructors

- **BreakDown This Code**

  ```
   constructor(private readonly coffeeService:CoffeesService){
       //logic
  }
  ```

  Here, private is an access modifier. readonly this makes sure that we are not modifiying thing and are only accessing this. Just a best practice.

- **DTO/Data Transfer Object** Is an object that encapsulates data and send it from one app to another. They help us define the interfaces or I/O in our sytem. We can define interface for lets say a post request expected input
  A DTO is an object that defines how the data will be sent over the network. They're simple interfaces or classes that represent the shape of your API

- **Business Domain in Modules**
  Inside a module there are:

  - controllers : are api routes that we want a module to instantiate
  - exports : to list providers that should be available anywhere this module is imported
  - imports : to list other modules that this module requires
  - providers: are services that need to be instantiated by nest injector. These will be available to this module only unless added to exports module added.

- **Data Validation / Validation Pipeline**
  To validate correctness of data. Validation pipe enforces validation rules for all incoming client payloads.

- **Partial Types**
  This function returning the type of the class we passed into it with all of the props set to optional. Also, inherits all the validation rules applied via decroators.

- **WhiteList** make sure unwanted props are stripped out and removed

- **Tranform:True in ValidationPipe** Autotransform Payloads to DTO instances. The body data in post req might not be of the type specified in the controller. So this transforms or type casts this to the correct type.
