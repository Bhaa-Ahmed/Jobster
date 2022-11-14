# Overview

Responsive React CRUD project that allows users to create, read, update and delete jobs.

# Features

- All jobs tab show all jobs the user added and he can search through them.
- The user can delete or edit the hobs through all jobs tab.
- Add job tab let the user add new job.
- Profile tab let the user update his personal info.

# Setup

- React 18.2.0
- CSS using styled-components
- Icons using React Icons
- Routing using React Router
- Charts using recharts
- Data&State Management using reduxjs/toolkit

# Structure

Main project contains pages, components, features and utils.

- There are several pages. Some of them have all of the code for rendering inside (like ErrorPage), some contains child components (like dashboard).
- Pages and components folders have index.js inside. We use it for get all of the files and export as object, so we can easy import multiple components in one line like this: `import { FormRow, FormRowSelect } from "../../components"`
- Utils →
  - axios.js : which contain base url and interceptor.
  - local storage : handle store, get and remove the user info in local storage.

# Data&State Management

- We use reduxjs/toolkit to handle Data&State Management.
- There is 3 main slices

  - User slice : handle register, login, and logout of the user.
  - Job slice : handle create a new job, delete, and edit the current jobs.
  - All jobs slice : handle fetch the current jobs from the data base and pagination functionalities.

  # Site

  - https://jobster-react-redux-toolkit.netlify.app
