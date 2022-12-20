# Installing TailWindCSS into project
    Step 1 : Adding package to project
        npm install -D tailwindcss@latest

    Step 2 : Create a configuration file
        npx tailwind init

    Step 3 : Edit the tailwind.config.js file

    Step 4 : Add tailwind directives in the style.css file

# Generating a module to manage users
    ng generate module user
    Import the UserModule in the AppModule then list it in the imports.

    Note : The BrowserModule should only be imported in the root module. Other modules should import CommonModule instead.

# Navigation component
    ng g c nav

# Auth modal
    ng g c user/auth-modal

# Shared Module
    ng g m shared
    ng g c shared/modal
    Note : The shared module should define components, pipes anď directives for different parts of our app.

# Creating services
    ng g s services/modal

# Memory Leaks
    Data in a component will be destroyed when the component is destroyed. However, if a service object is injected, data in the service will persist. It needs to be destroyed manually to prevent memory leaks.

# Creating a container for tabs
    ng g c shared/TabsContainer

# Creating a tab component
    ng g c shared/Tab